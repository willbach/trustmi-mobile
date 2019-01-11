import { observable, action } from 'mobx'
import City from 'types/City'

export default class CreateGroupStore {
  @observable name = ''
  @observable about = ''
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
    this.about = this.about + '1'
    this.about = this.about.slice(0, -1)
  }

  @action.bound
  clearStore() {
    this.name = ''
    this.about = ''
    this.location = new City({ city: '', state: '', country: ''})
    this.interests = []
  }
}
