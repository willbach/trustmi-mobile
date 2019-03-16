import { observable, action } from 'mobx'
import RNFetchBlob from 'rn-fetch-blob'
import { ServerInterface, serverInterface } from 'server'

import { formatPhone, formatEmail, formatName } from 'utils/format'

export default class AccountSetupStore {
  @observable idPhoto: any = {}
  @observable selfieVideo: any = {}
  @observable location = { city: '', state: '', zip: '', country: '' }
  @observable userType = ''
  @observable userPurpose = ''
  @observable userIntro = ''
  @observable aboutError : string | undefined = ''
  @observable isValid = false
  @observable thePondApi: ServerInterface = serverInterface

  @action
  async verifyIdentity() {
    console.log('UPLOADING', this.idPhoto.data, this.selfieVideo.uri)
    const selfieVideoPath = this.selfieVideo.uri.replace('file://', '')
    const body = [
      {
        name: 'idPhoto',
        filename: `idPhoto.jpeg`,
        type: 'image/jpeg',
        data: this.idPhoto.data
      },
      {
        name: 'selfieVideo',
        filename: `selfieVideo.mp4`,
        data: RNFetchBlob.wrap(selfieVideoPath)
      }
    ]

    return this.thePondApi.uploadFormData('/verify/identity', body)
  }

  @action
  onChange(data) {
    Object.keys(data).forEach((key) => {
      let value = data[key]
      if (key === 'email') {
        value = formatEmail(value)
      } else if (key === 'phone') {
        value = formatPhone(value)
      }

      this[key] = value
      this.validate(key)
    })
  }

  @action
  validate(key: string) {
    if (key === 'email') {
      // const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      // const required = this.email ? undefined : 'Required'
      // this.emailError = required
      //   ? required
      //   : emailPatter.test(this.email) ? undefined : 'Invalid email address'
    } else if (key === 'phone') {
      this.aboutError = !this.userIntro || this.userIntro.length < 100 ? 'Intro must be at least 100 characters' : undefined
    }
  }

  @action
  validateForm() {
    if (this.aboutError === undefined) {
      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  @action
  clearStore() {
    this.location = { city: '', state: '', zip: '', country: '' }
    this.userType = ''
    this.userPurpose = ''
    this.userIntro = ''
    this.aboutError = undefined
    this.isValid = false
  }
}
