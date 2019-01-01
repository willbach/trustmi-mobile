import { observable, action } from 'mobx'
import repositories from 'repositories'
import generateRandomString from 'utils/random-string'
import VerifiedDocuments from 'types/VerifiedDocuments'
import { hexToBuffer, generateHash, serverSign} from 'utils/buffer-util'
import { storeLocalData, retrieveLocalData } from 'utils/local-storage'

export default class VerifiedStore {
  @observable collegeBoard = {}
  @observable creditKarma = {}
  @observable mint = {}
  @observable services = ['collegeBoard', 'creditKarma', 'mint'] //array with all service names in it
  @observable secret : string | undefined = undefined
  @observable verifiedDocuments : VerifiedDocuments = new VerifiedDocuments({})

  @action
  async getData(service: string, pin: string, username: string, password: string) {
    //generate and send secret here
    if (repositories.isMFA(service)) {
      this.secret = generateRandomString(20)
    }

    const data = await repositories.scrape(username, password, service, this.secret)
    console.log('GOT THE DATA IN THE STORE: ', data)
    console.log('PIN', pin, pin.length)

    await storeLocalData(data, service, pin)

    this[service].data = data
    console.log('WE HAVE NOW STORED THE DATA: ', this[service])
    this.secret = undefined
  }

  @action
  async getVerifiedDocuments(pin: string, address: string, privateKeyHex: string) {
    const authRequest = {
      id: address,
      hash: generateHash(hexToBuffer(address)),
      signature: serverSign(generateHash(hexToBuffer(address)), privateKeyHex)
    }
    const { token } = await repositories.getDocumentToken(authRequest)
  
    const verifiedDocuments = await repositories.getDocuments(address, true, token)
    
    console.log('GOT THE DATA IN THE STORE: ', verifiedDocuments)
    console.log('PIN', pin, pin.length)
  
    await storeLocalData(verifiedDocuments, 'verifiedDocuments', pin)
    
    this.verifiedDocuments = verifiedDocuments
    console.log('WE HAVE NOW STORED THE DATA: ', this.verifiedDocuments)
  }

  @action
  async retrieveData(pin: string) {
    // add something here to retrieve verified documents from the server, store them, then delete them (and delete them?)

    await Promise.all(this.services.map( async(service) => {
      const data = await retrieveLocalData(service, pin)
      return this[service].data = data
    }))
  }
}
