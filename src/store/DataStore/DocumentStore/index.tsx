import { observable, action } from 'mobx'
import repositories from 'repositories'
import { hexToBuffer, bufferToHex, generateHash, serverSign, stringToBuffer } from 'utils/buffer-util'
import { storeLocalDataSecure, retrieveLocalData } from 'utils/local-storage'
import ethUtil from 'ethereumjs-util'

export default class DocumentStore {
  @observable unverifiedDocuments = {
    photoId: [],
    payStubs: [],
    transcripts: [],
  }
  @observable services = [ 'photoId', 'payStubs', 'transcripts'] //array with all service names in it
  @observable secret : string | undefined = undefined

  @action
  async getUnverifiedDocuments(address: string, privateKeyHex: string) {
    const authRequest = {
      id: address,
      hash: generateHash(hexToBuffer(address)),
      signature: serverSign(generateHash(hexToBuffer(address)), privateKeyHex)
    }
    const { token } = await repositories.getDocumentToken(authRequest)

    this.unverifiedDocuments = await repositories.getDocuments(address, false, token)
    console.log('WE HAVE UNVERIFIED DOCUMENTS ', this.unverifiedDocuments)
  }

  @action
  addDocument({ address, privateKeyHex }) {
    return ({ type, first, middle, last, sex, dateOfBirth, country, expirationDate, university, gpa, graduationDate, company, payDate, file, selfie }) => {
      const body = { id: address, first, middle, last, sex, dateOfBirth, country, expirationDate, university, gpa, graduationDate, company, payDate, file: '', selfie: '', hash: '', signature: '' }
      
      // make the hash
      const hashBuffer = Object.values(body).reduce((acc, cur) => {
        if (cur)
          acc.push(stringToBuffer(cur))

        return acc
      }, [ hexToBuffer(address) ])

      body.hash = bufferToHex(ethUtil.sha3(Buffer.concat(hashBuffer)))
      body.file = file
      body.selfie = selfie
      body.signature = serverSign(body.hash, privateKeyHex)
      console.log('Submitting documents for verification', body.id, body.first, body.file.length, body.selfie.length)
      
      return repositories.addDocument(type, body)
    }
  }
}
