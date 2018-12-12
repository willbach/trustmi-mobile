import { observable, action } from 'mobx'
import City from 'types/City'

export default class CreateGroupStore {
  @observable name = ''
  @observable description = ''
  @observable location: City
  @observable interests: string[] = []

  @action.bound
  updateValue(key: string, value: string) {
    if (key === 'interest') {
      const newInterests = this.interests
      if (this.interests.includes(value)) {
        this.interests = this.interests.filter(interest => interest !== value)
      } else {
        newInterests.push(value)
        this.interests = newInterests
      }
    } else {
      this[key] = value
    }
  }

  @action.bound
  refresh() {
    this.description = this.description + '1'
    this.description = this.description.slice(0, -1)
  }

  @action.bound
  clearStore() {
    this.name = ''
    this.description = ''
    this.location = new City({ city: '', state: '', country: ''})
    this.interests = []
  }
}
