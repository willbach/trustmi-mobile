import { observable, action } from 'mobx'

export default class RestoreStore {
  @observable mnemonic = ''
  @observable mnemonicError: string | undefined = ''
  @observable isValid = false

  @action
  mnemonicOnChange(id) {
    this.mnemonic = id
    this.validateMnemonic()
  }

  @action
  validateMnemonic() {
    const required = this.mnemonic ? undefined : 'Required'
    this.mnemonicError = required
      ? required
      : this.mnemonic.trim().split(' ').length === 12 ? undefined : 'Mnemonic must have 12 words'
  }

  @action
  validateForm() {
    if (this.mnemonicError === undefined) {
      this.isValid = true
    } else {
      this.isValid = false
    }
  }

  @action
  clearStore() {
    this.mnemonic = ''
    this.mnemonicError = ''
    this.isValid = false
  }
}
