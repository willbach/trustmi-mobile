import { observable, action } from 'mobx'

import Mnemonic from 'bitcore-mnemonic'
import bcrypt from 'bcryptjs'
import ethUtil from 'ethereumjs-util'
import CryptoJS from 'crypto-js'

import { AsyncStorage } from 'react-native'

export default class UserStore {
  @observable email = ''
  @observable mnemonic = ''
  @observable privateKeyHex = ''
  @observable address = ''

  @action
  retrievePIN() {

  }

  @action
  comparePIN() {

  }

  @action
  async createUser(email: string, pin: string) {
    try {
      const mnemonic = new Mnemonic()
      const hashedPIN = bcrypt.hashSync(pin)
      const privateKey = mnemonic.toHDPrivateKey()
      const privateKeyBuffer = privateKey.privateKey.toBuffer()
      const privateKeyHex = privateKeyBuffer.toString('hex')
      const ethAddress = ethUtil.privateToAddress(privateKeyBuffer)
      
      this.email = email
      this.mnemonic = mnemonic.toString()
      this.privateKeyHex = privateKeyHex
      this.address = ethAddress

      const encryptedPIN = CryptoJS.AES.encrypt(hashedPIN, pin).toString()
      await AsyncStorage.setItem('hashedPIN', encryptedPIN)
      await this.storeUser(hashedPIN)
      return true
    } catch (e) {
      console.log('ERROR CREATING USER: ', e)
      return false
    }
  }

  @action
  async getHashedPIN(pin: string) {
    const encryptedPIN = await AsyncStorage.getItem('hashedPIN')
    const bytes = CryptoJS.AES.decrypt(encryptedPIN, pin)
    return bytes.toString(CryptoJS.enc.Utf8)
  }

  @action
  async storeUser(pin: string) {
    try {
      const user = {
        email: this.email,
        mnemonic: this.mnemonic,
        privateKeyHex: this.privateKeyHex,
        address: this.address,
      }
      const hashedPIN = await this.getHashedPIN(pin)
      const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(user), hashedPIN).toString()
      await AsyncStorage.setItem('user', encryptedUser)

      return true
    } catch (e) {
      console.log('ERROR STORING USER: ', e)
      return false
    }
  }

  @action
  async retrieveUser(pin: string) {
    try {
      const hashedPIN = await this.getHashedPIN(pin)
      const passwordMatch = bcrypt.compareSync(pin, hashedPIN)
      if (passwordMatch) {
        const encryptedUser = await AsyncStorage.getItem('user')
        const decryptedUserBytes = CryptoJS.AES.decrypt(encryptedUser, hashedPIN)
        const user = JSON.parse(decryptedUserBytes.toString(CryptoJS.enc.Utf8))

        this.email = user.email
        this.mnemonic = user.mnemonic
        this.privateKeyHex = user.privateKeyHex
        this.address = user.address

        return true
      } else {
        return false
      }
    } catch (e) {
      console.log('ERROR RETRIEVING USER: ', e)
      return false
    }
  }

  @action
  async removeUser(pin: string) {
    try {
      const hashedPIN = await this.getHashedPIN(pin)
      const passwordMatch = bcrypt.compareSync(pin, hashedPIN)

      if (passwordMatch) {
        AsyncStorage.removeItem('hashedPIN')
        AsyncStorage.removeItem('user')
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}
