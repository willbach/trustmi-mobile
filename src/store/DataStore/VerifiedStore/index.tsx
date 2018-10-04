import { observable, action } from 'mobx'
import dataSources from 'data-sources'

import CryptoJS from 'crypto-js'

import { AsyncStorage } from 'react-native'

export default class VerifiedStore {
  @observable collegeBoard = {}
  @observable creditKarma = {}
  @observable mint = {}

  @action
  async storeData(service, pin, username, password) {
    const data = await dataSources[service].scrape(username, password)
    console.log('GOT THE DATA IN THE STORE: ', data)

    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), pin).toString()
    await AsyncStorage.setItem(service, encryptedData)

    this[service] = data
    console.log('WE HAVE NOW STORED THE DATA: ', this[service])
  }

  @action
  async getData(service, pin) {
    const encryptedData = await AsyncStorage.getItem(service)
    const decryptedDataBytes = CryptoJS.AES.decrypt(encryptedData, pin)
    const decryptedData = decryptedDataBytes.toString(CryptoJS.enc.Utf8)
    const data = JSON.parse(decryptedData)

    this[service] = data
  }
}
