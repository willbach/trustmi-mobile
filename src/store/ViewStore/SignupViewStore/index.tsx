import { observable, action } from 'mobx'

import { formatDate, formatEmail, formatName } from 'utils/format'

export default class SignupStore {
  @observable email = ''
  @observable first = ''
  @observable middle = ''
  @observable last = ''
  @observable sex = ''
  @observable dateOfBirth = ''
  @observable emailError: string | undefined = ''
  @observable firstError: string | undefined = ''
  @observable lastError: string | undefined = ''
  @observable sexError: string | undefined = ''
  @observable dateOfBirthError: string | undefined = ''
  @observable photoId = { data: '', mime: '' }
  @observable selfie = { data: '', mime: '' }
  @observable isValid = false

  @action
  onChange(key: string, value: string) {
    if (key === 'dateOfBirth') {
      value = formatDate(value)
    } else if (key === 'email') {
      value = formatEmail(value)
    } else if (key === 'first' || key === 'middle' || key === 'last') {
      value = formatName(value)
    } else if (key === 'sex') {
      value = value.toUpperCase().replace(/[^A-Z]/, '')
    }

    this[key] = value
    this.validate(key)
  }

  @action
  validate(key: string) {
    if (key === 'email') {
      const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
      const required = this.email ? undefined : 'Required'
      this.emailError = required
        ? required
        : emailPatter.test(this.email) ? undefined : 'Invalid email address'
    } else if (key === 'first') {
      this.firstError = !this.first ? 'Required' : undefined
    } else if (key === 'last') {
      this.lastError = !this.last ? 'Required' : undefined
    } else if (key === 'sex') {
      this.sexError = !this.sex ? 'Required' : undefined
    } else if (key === 'dateOfBirth') {
      this.dateOfBirthError = this.dateOfBirth.length < 10 ? 'Please use MM/DD/YYYY format' : undefined
    }
  }

  @action
  validateForm() {
    if (this.emailError === undefined && this.firstError === undefined && this.lastError === undefined && this.sexError === undefined && this.dateOfBirthError === undefined && 
    this.photoId.data.length && this.selfie.data.length) {

      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  @action
  clearStore() {
    this.email = ''
    this.first = ''
    this.middle = ''
    this.last = ''
    this.sex = ''
    this.dateOfBirth = ''
    this.emailError = ''
    this.firstError = ''
    this.lastError = ''
    this.sexError = ''
    this.dateOfBirthError = ''
    this.photoId = { data: '', mime: '' }
    this.selfie = { data: '', mime: '' }
    this.isValid = false
  }
}
