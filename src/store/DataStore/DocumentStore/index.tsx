import { observable, action } from 'mobx'
import repositories from 'repositories'
import { hexToBuffer, bufferToHex, generateHash, serverSign, stringToBuffer } from 'utils/buffer-util'
import { storeLocalData, retrieveLocalData } from 'utils/local-storage'
import ethUtil from 'ethereumjs-util'

export default class VerifiedStore {
  @observable unverifiedDocuments = {
    drivers: [],
    passports: [],
    payStubs: [],
    transcripts: [],
  }
  @observable services = ['drivers', 'passports', 'payStubs', 'transcripts'] //array with all service names in it
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
    // make the hash
    return ({ type, first, middle, last, sex, birthDate, street1, street2, city, state, zip, country, expirationDate, university, gpa, graduationDate, company, payDate, file }) => {
      const body = { id: '', first, middle, last, sex, birthDate, street1, street2, city, state, zip, country, expirationDate, university, gpa, graduationDate, company, payDate, file: '', hash: '', signature: '' }

      console.log(2, address, body)
      const hashBuffer = Object.values(body).reduce((acc, cur) => {
        if (cur)
          acc.push(stringToBuffer(cur))

        return acc
      }, [ hexToBuffer(address) ])

      body.id = address
      body.file = file
      body.hash = bufferToHex(ethUtil.sha3(Buffer.concat(hashBuffer)))
      console.log(3, body.hash, privateKeyHex)
      body.signature = serverSign(body.hash, privateKeyHex)
      
      return repositories.addDocument(type, body)
    }
  }
}

// const driversSubmission = {
//   id: testAddress1,
//   first: 'Bob',
//   last: 'Goodman',
//   middle: 'J',
//   sex: 'M',
//   birthDate: '20001010',
//   expirationDate: '20201010',
//   street1: '123 Fake St',
//   street2: 'Apt 201',
//   city: 'Los Angeles',
//   state: 'CA',
//   zip: '90024',
//   country: 'USA',
//   file: fs.readFileSync(path.join(__dirname, './documents/sample_drivers.jpg'), { encoding: 'base64' }),
//   selfie: fs.readFileSync(path.join(__dirname, './documents/sample_selfie.jpg'), { encoding: 'base64' })
// }
// const driversHashBuffer = Buffer.concat([
//   hexToBuffer(driversSubmission.id),
//   stringToBuffer(driversSubmission.sex),
//   stringToBuffer(driversSubmission.expirationDate),
//   stringToBuffer(driversSubmission.street1),
//   stringToBuffer(driversSubmission.street2),
//   stringToBuffer(driversSubmission.city),
//   stringToBuffer(driversSubmission.state),
//   stringToBuffer(driversSubmission.zip),
//   stringToBuffer(driversSubmission.country)
// ])
// driversSubmission.hash = bufferToHex(ethUtil.sha3(driversHashBuffer))
// driversSubmission.signature = serverSign(driversSubmission.hash, testPrivkey1)

// const passportSubmission = {
//   id: testAddress1,
//   first: 'Bob',
//   last: 'Goodman',
//   middle: 'J',
//   sex: 'M',
//   birthDate: '20001010',
//   expirationDate: '20201010',
//   country: 'USA',
//   file: fs.readFileSync(path.join(__dirname, './documents/sample_passport.jpg'), { encoding: 'base64' }),
//   selfie: fs.readFileSync(path.join(__dirname, './documents/sample_selfie.jpg'), { encoding: 'base64' })
// }
// const passportHashBuffer = Buffer.concat([
//   hexToBuffer(passportSubmission.id),
//   stringToBuffer(passportSubmission.birthDate),
//   stringToBuffer(passportSubmission.expirationDate),
//   stringToBuffer(passportSubmission.country),
// ])
// passportSubmission.hash = bufferToHex(ethUtil.sha3(passportHashBuffer))
// passportSubmission.signature = serverSign(passportSubmission.hash, testPrivkey1)

// const payStubSubmission = {
//   id: testAddress1,
//   payDate: '20181020',
//   company: 'Widgets Corp Ltd',
//   file: fs.readFileSync(path.join(__dirname, './documents/sample_paystub.jpg'), { encoding: 'base64' })
// }
// const payStubHashBuffer = Buffer.concat([
//   hexToBuffer(payStubSubmission.id),
//   stringToBuffer(payStubSubmission.payDate),
//   stringToBuffer(payStubSubmission.company),
// ])
// payStubSubmission.hash = bufferToHex(ethUtil.sha3(payStubHashBuffer))
// payStubSubmission.signature = serverSign(payStubSubmission.hash, testPrivkey1)

// const transcriptSubmission = {
//   id: testAddress1,
//   univeristy: 'university of virginia',
//   graduationDate: '20120510',
//   gpa: '3.54',
//   file: fs.readFileSync(path.join(__dirname, './documents/sample_transcript.jpg'), { encoding: 'base64' })
// }
// const transcriptHashBuffer = Buffer.concat([
//   hexToBuffer(transcriptSubmission.id),
//   stringToBuffer(transcriptSubmission.univeristy),
//   stringToBuffer(transcriptSubmission.graduationDate),
//   stringToBuffer(transcriptSubmission.gpa),
// ])
// transcriptSubmission.hash = bufferToHex(ethUtil.sha3(transcriptHashBuffer))
// transcriptSubmission.signature = serverSign(transcriptSubmission.hash, testPrivkey1)

// const authRequest = {
//   id: testAddress1
// }
// const authHashBuffer = hexToBuffer(authRequest.id)
// authRequest.hash = bufferToHex(ethUtil.sha3(authHashBuffer))
// authRequest.signature = serverSign(authRequest.hash, testPrivkey1)
