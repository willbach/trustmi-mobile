import { observable, action } from 'mobx'
import dataSources from 'data-sources'
import generateRandomString from 'utils/random-string'

import CryptoJS from 'crypto-js'

import { AsyncStorage } from 'react-native'

export default class VerifiedStore {
  @observable collegeBoard = {}
  @observable creditKarma = {}
  @observable mint = {}
  @observable services = ['collegeBoard', 'creditKarma', 'mint'] //array with all service names in it
  @observable secret : string | undefined = undefined

  @action
  async storeData(service, pin, username, password) {
    //generate and send secret here
    if (dataSources.isMFA(service)) {
      this.secret = generateRandomString(20)
    }

    const data = await dataSources.scrape(username, password, service, this.secret)
    console.log('GOT THE DATA IN THE STORE: ', data)
    console.log('PIN', pin, pin.length)

    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), pin).toString()
    await AsyncStorage.setItem(service, encryptedData)

    const decryptedDataBytes = CryptoJS.AES.decrypt(encryptedData, pin)
    const decryptedData = decryptedDataBytes.toString(CryptoJS.enc.Utf8)
    console.log('decrypted?', JSON.parse(decryptedData))

    this[service].data = data
    console.log('WE HAVE NOW STORED THE DATA: ', this[service])
    this.secret = undefined
  }

  @action
  async getData(service, pin) {
    const encryptedData = await AsyncStorage.getItem(service)
    console.log('WHAT DO WE HAVE HERE', service, encryptedData)
    if (encryptedData !== null) {
      const decryptedDataBytes = CryptoJS.AES.decrypt(encryptedData, pin)
      console.log(1, decryptedDataBytes)
      const decryptedData = decryptedDataBytes.toString(CryptoJS.enc.Utf8)
      console.log(2, decryptedData)
      const data = JSON.parse(decryptedData)
      console.log(3, data)
  
      this[service].data = data
    }
  }
}
