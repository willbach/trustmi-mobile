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
      await this.storeUser(pin)
      return true
    } catch (e) {
      console.log('ERROR CREATING USER: ', e)
      return false
    }
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
      const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(user), pin).toString()
      await AsyncStorage.setItem('user', encryptedUser)

      return true
    } catch (e) {
      console.log('ERROR STORING USER: ', e)
      return false
    }
  }

  @action restoreUser(pin: string) {
    
  }

  @action
  async getHashedPIN(pin: string) {
    const encryptedPIN = await AsyncStorage.getItem('hashedPIN')
    const bytes = CryptoJS.AES.decrypt(encryptedPIN, pin)
    return bytes.toString(CryptoJS.enc.Utf8)
  }

  @action
  async checkUserExists() {
    const user = await AsyncStorage.getItem('user')
    return !!user
  }

  @action
  async checkPIN(pin: string) {
    const hashedPIN = await this.getHashedPIN(pin)
    return bcrypt.compareSync(pin, hashedPIN)
  }

  @action
  async loginUser(pin: string) {
    try {
      const hashedPIN = await this.getHashedPIN(pin)
      const passwordMatch = bcrypt.compareSync(pin, hashedPIN)
      if (passwordMatch) {
        const encryptedUser = await AsyncStorage.getItem('user')
        const decryptedUserBytes = CryptoJS.AES.decrypt(encryptedUser, pin)
        const decryptedUser = decryptedUserBytes.toString(CryptoJS.enc.Utf8)
        const user = JSON.parse(decryptedUser)

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
  logoutUser() {
    this.email = ''
    this.mnemonic = ''
    this.privateKeyHex = ''
    this.address = ''
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
