import { observable, action } from 'mobx'

import { formatPhone, formatEmail, formatName } from 'utils/format'

export default class SignupStore {
  // @observable email = ''
  @observable phone = ''
  // @observable sendTo = 'phone'
  // @observable emailError: string | undefined = ''
  @observable phoneError: string | undefined = ''
  @observable isValid = false

  @action
  onChange(key: string, value: string) {
    if (key === 'email') {
      value = formatEmail(value)
    } else if (key === 'phone') {
      value = formatPhone(value)
    }

    this[key] = value
    this.validate(key)
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
      this.phoneError = !this.phone || this.phone.length < 10 ? 'Phone number must include area code' : undefined
    }
  }

  @action
  validateForm() {
    if (this.phoneError === undefined) {
      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  @action
  clearStore() {
    this.phone = ''
    this.phoneError = ''
    this.isValid = false
  }
}
