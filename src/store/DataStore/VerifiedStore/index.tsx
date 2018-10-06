import { observable, action } from 'mobx'
import dataSources from 'data-sources'

import CryptoJS from 'crypto-js'

import { AsyncStorage } from 'react-native'

export default class VerifiedStore {
  @observable collegeBoard = {}
  @observable creditKarma = {}
  @observable mint = {}
  @observable services = ['collegeBoard', 'creditKarma', 'mint'] //array with all service names in it

  @action
  async storeData(service, pin, username, password) {
    const data = await dataSources[service].scrape(username, password)
    console.log('GOT THE DATA IN THE STORE: ', data)
    console.log('PIN', pin, pin.length)

    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), pin).toString()
    await AsyncStorage.setItem(service, encryptedData)

    const decryptedDataBytes = CryptoJS.AES.decrypt(encryptedData, pin)
    const decryptedData = decryptedDataBytes.toString(CryptoJS.enc.Utf8)
    console.log('decrypted?', JSON.parse(decryptedData))

    this[service].data = data
    console.log('WE HAVE NOW STORED THE DATA: ', this[service])
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
