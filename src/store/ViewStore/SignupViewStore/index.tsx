import { observable, action } from 'mobx'

export default class SignupStore {
  @observable email = ''
  @observable emailError: string | undefined = ''
  @observable isValid = false

  @action
  emailOnChange(id) {
    this.email = id
    this.validateEmail()
  }

  @action
  validateEmail() {
    const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const required = this.email ? undefined : 'Required'
    this.emailError = required
      ? required
      : emailPatter.test(this.email) ? undefined : 'Invalid email address'
  }

  @action
  validateForm() {
    if (this.emailError === undefined) {
      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  @action
  clearStore() {
    this.email = ''
    this.emailError = ''
    this.isValid = false
  }
}
