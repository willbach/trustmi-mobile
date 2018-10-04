import { observable, action } from 'mobx'

export default class RestoreStore {
  @observable mnemonic = ''
  @observable mnemonicError: string | undefined = ''
  @observable email = ''
  @observable emailError: string | undefined = ''
  @observable isValid = false

  @action
  mnemonicOnChange(id) {
    this.mnemonic = id
    this.validateMnemonic()
  }

  @action
  emailOnChange(id) {
    this.email = id
    this.validateEmail()
  }

  @action
  validateMnemonic() {
    const required = this.mnemonic ? undefined : 'Required'
    this.mnemonicError = required
      ? required
      : this.mnemonic.trim().split(' ').length === 12 ? undefined : 'Mnemonic must have 12 words'
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
    if (this.mnemonicError === undefined && this.emailError === undefined) {
      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  @action
  clearStore() {
    this.mnemonic = ''
    this.mnemonicError = ''
    this.email = ''
    this.emailError = ''
    this.isValid = false
  }
}
