import { observable, action } from 'mobx'

import Mnemonic from 'bitcore-mnemonic'
import bcrypt from 'bcryptjs'
import ethUtil from 'ethereumjs-util'

import { storeLocalData, retrieveLocalData, deleteLocalData, checkLocalDataExists } from 'utils/local-storage'

export default class UserStore {
  @observable email = ''
  @observable mnemonic = ''
  @observable privateKeyHex = ''
  @observable address = ''
  @observable pin = ''

  @action
  async createUser(email: string, pin: string, recoveryMnemonic?: string) {
    try {
      const mnemonic = recoveryMnemonic ? new Mnemonic(recoveryMnemonic) : new Mnemonic()
      const hashedPIN = bcrypt.hashSync(pin)
      const privateKey = mnemonic.toHDPrivateKey()
      const privateKeyBuffer = privateKey.privateKey.toBuffer()
      const privateKeyHex = privateKeyBuffer.toString('hex')
      const ethAddress = ethUtil.privateToAddress(privateKeyBuffer).toString('hex')

      this.email = email
      this.mnemonic = mnemonic.toString()
      this.privateKeyHex = privateKeyHex
      this.address = ethAddress
      this.pin = pin

      await storeLocalData(hashedPIN, 'hashedPIN', pin)
      await this.storeUser(pin)
      return { address: ethAddress, privateKeyHex }
    } catch (error) {
      throw new Error(error.message)
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
      await storeLocalData(user, 'user', pin)

      return true
    } catch (e) {
      console.log('ERROR STORING USER: ', e)
      return false
    }
  }

  @action
  async restoreUser(email: string, pin: string, mnemonic: string) {
    return this.createUser(email, pin, mnemonic)
  }

  @action
  async checkUserExists() {
    return checkLocalDataExists('user')
  }

  @action
  async checkPIN(pin: string) {
    const hashedPIN = await retrieveLocalData('hashedPIN', pin)
    return bcrypt.compareSync(pin, hashedPIN)
  }

  @action
  async loginUser(pin: string) {
    try {
      const hashedPIN = await retrieveLocalData('hashedPIN', pin)
      const passwordMatch = bcrypt.compareSync(pin, hashedPIN)
      if (passwordMatch) {
        const user = await retrieveLocalData('user', pin)

        this.email = user.email
        this.mnemonic = user.mnemonic
        this.privateKeyHex = user.privateKeyHex
        this.address = user.address
        this.pin = pin

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
    this.pin = ''
  }

  @action
  async removeUser(pin: string) {
    try {
      const hashedPIN = await retrieveLocalData('hashedPIN', pin)
      const passwordMatch = bcrypt.compareSync(pin, hashedPIN)

      if (passwordMatch) {
        deleteLocalData('hashedPIN')
        deleteLocalData('user')
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}
