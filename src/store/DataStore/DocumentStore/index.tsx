import { observable, action } from 'mobx'
import dataSources from 'data-sources'
import { hexToBuffer, bufferToHex, generateHash, serverSign } from 'utils/buffer-util'
import { storeLocalData, retrieveLocalData } from 'utils/local-storage'

export default class ScrapedStore {
  @observable verifiedDocuments = {
    drivers: [],
    passport: [],
    payStub: [],
    transcript: [],
  }
  @observable unverifiedDocuments = {
    drivers: [],
    passport: [],
    payStub: [],
    transcript: [],
  }
  @observable services = ['drivers', 'passport', 'payStub', 'transcript'] //array with all service names in it
  @observable secret : string | undefined = undefined

  @action
  async getDocuments(pin: string, address: string, privateKeyHex: string) {
    const authRequest = {
      id: address,
      hash: generateHash(hexToBuffer(address)),
      signature: serverSign(generateHash(hexToBuffer(address)), privateKeyHex)
    }
    const { token } = await dataSources.getDocumentToken(authRequest)

    const verifiedDocuments = await dataSources.getDocuments(address, true, token)
    
    console.log('GOT THE DATA IN THE STORE: ', verifiedDocuments)
    console.log('PIN', pin, pin.length)

    await storeLocalData(verifiedDocuments, 'verifiedDocuments', pin)
    
    this.verifiedDocuments = verifiedDocuments

    this.unverifiedDocuments = await dataSources.getDocuments(address, false, token)
    console.log('WE HAVE NOW STORED THE DATA: ', this.verifiedDocuments, this.unverifiedDocuments)
  }

  // @action
  // async addDocument(service: string, pin: string) {
    
  // }
}
