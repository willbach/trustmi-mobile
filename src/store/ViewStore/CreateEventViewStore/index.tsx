import { observable, action } from 'mobx'
import { addOrDelete } from 'utils/array-utils'

export default class CreateEventStore {

  @observable title = ''
  @observable about = ''
  @observable directionsParking = ''
  @observable street = ''
  @observable city = ''
  @observable state = ''
  @observable country = ''
  @observable startTime = new Date()
  @observable endTime = new Date()
  @observable interests: string[] = [] // default is the group
  @observable documents: string[] = []

  @action.bound
  updateValue(key: string, value: string) {
    if (key === 'interest') {
      this.interests = addOrDelete(this.interests, value)
    } else if (key === 'document') {
      this.documents = addOrDelete(this.documents, value)
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
    this.title = ''
    this.about = ''
    this.directionsParking = ''
    this.street = ''
    this.city = ''
    this.state = ''
    this.country = ''
    this.startTime = new Date()
    this.endTime = new Date()
    this.interests = []
    this.documents = []
  }
}
