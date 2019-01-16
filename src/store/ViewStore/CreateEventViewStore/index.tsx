import { observable, action } from 'mobx'
import { addOrDelete } from 'utils/array-utils'

export default class CreateEventStore {
  @observable groupId = ''
  @observable pic = ''
  @observable title = ''
  @observable about = ''
  @observable location = '' // this should be an exact location
  @observable parkingInfo = ''
  @observable interests: string[] = [] // default is the group
  @observable documents: string[] = []
  @observable startTime = ''
  @observable endTime = ''

  @action
  createEvent() {
    // id
    // group_id
    // title
    // about
    // parkingInfo
    // location
    // startTime
    // endTime
    // interests
    // documents
  }

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
    this.groupId = ''
    this.pic = ''
    this.title = ''
    this.about = ''
    this.location = ''
    this.parkingInfo = ''
    this.interests = []
    this.documents = []
  }
}
