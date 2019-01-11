import { observable, action } from 'mobx'

import { storeLocalData, retrieveLocalData } from 'utils/local-storage'

export default class ProfileStore {
  @observable items = []
  @observable interests: string[] = ['Tech and Coding', 'Sports and Fitness', 'Real Estate and Investing']
  @observable profileCompletionPercentage: number = 42
  @observable profileData = {
    pic: '',
    first: 'John',
    last: 'Doe',
    middle: '',
    sex: '',
    birthDate: '',
    city: 'Los Angeles',
    state: 'CA',
    zip: '',
    country: 'USA',
  }

  @action
  async loadData(pin: string) {
    await this.loadInterests(pin)
  }

  @action
  async loadInterests(pin: string) {
    const interests = await retrieveLocalData('interests', pin)
    if (interests instanceof Array) {
      this.interests = interests
    }
  }

  @action
  async addInterest(pin: string, interest: string) {
    const newInterests = this.interests.map(ele => ele)
    if (!newInterests.includes(interest)) {
      newInterests.push(interest)
      await storeLocalData(newInterests, 'interests', pin)
      this.interests = newInterests
    }
  }

  @action
  async removeInterest(pin: string, interest: string) {
    const newInterests = this.interests.filter((ele: string) => ele !== interest)
    await storeLocalData(newInterests, 'interests', pin)
    this.interests = newInterests
  }

  @action
  fetchItems(data) {
    this.items = data
  }
}
