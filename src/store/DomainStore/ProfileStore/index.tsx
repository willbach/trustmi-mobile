import { observable, action } from 'mobx'
import moment from 'moment'

import { storeLocalData, retrieveLocalData } from 'utils/local-storage'
import { ONE_WEEK } from 'theme/constants'

export default class ProfileStore {
  constructor () {
    this.getAge = this.getAge.bind(this)
  }

  @observable items = []
  @observable interests: string[] = ['Tech and Coding', 'Sports and Fitness', 'Real Estate and Investing']
  @observable profileCompletionPercentage: number = 42
  @observable profileData = {
    pic: '',
    first: '',
    last: '',
    middle: '',
    sex: '',
    dateOfBirth: '',
    email: '',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90025',
    country: 'USA',
  }

  @action
  async setProfileData(profileData: any, pin: string) {
    const newProfileData = this.profileData

    for(let key in profileData) {
      if (profileData[key]) {
        newProfileData[key] = profileData[key]
      }
    }

    await storeLocalData(newProfileData, 'profileData', pin)
    this.profileData = newProfileData
  }

  @action
  async loadProfileData(pin: string) {
    const profileData = await retrieveLocalData('profileData', pin)
    if (profileData !== null) {
      this.profileData = profileData
    }
  }

  @action
  async loadData(pin: string) {
    return Promise.all([
      this.loadInterests(pin),
      this.loadProfileData(pin),
    ])
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
  async shouldPrompt(pin: string) {
    const lastPrompt = await retrieveLocalData('lastPrompt', pin)
    await storeLocalData(new Date(), 'lastPrompt', pin)

    if (lastPrompt) {
      return new Date().getTime() > ( new Date(lastPrompt).getTime() + ONE_WEEK)
    }

    return true
  }

  @action
  getAge() {
    const now = moment()
    const dob = moment(this.profileData.dateOfBirth)
    const age = now.diff(dob, 'year', true)

    return Math.floor(age)
  }

  @action
  fetchItems(data) {
    this.items = data
  }
}
