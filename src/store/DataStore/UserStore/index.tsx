import { observable, action } from 'mobx'
import moment from 'moment'

import { storeLocalData, storeLocalDataSecure, retrieveLocalDataSecure, retrieveLocalData, deleteLocalData, checkLocalDataExists } from 'utils/local-storage'

import { ServerInterface, serverInterface } from 'server'
import { ONE_WEEK } from 'theme/constants'

export default class UserStore {
  constructor () {
    this.getAge = this.getAge.bind(this)
  }

  @observable id = ''
  @observable email = ''
  @observable phone = ''
  @observable name = ''
  @observable first = ''
  @observable last = ''
  @observable middle = ''
  @observable sex = ''
  @observable dateOfBirth = ''

  @observable userType = ''
  @observable userPurpose = ''
  @observable userIntro = ''

  @observable linkedinUrl: string | undefined = undefined
  @observable companyName = ''
  @observable title = ''

  @observable universityName = ''
  @observable universityGradYear = ''

  @observable skills = []
  @observable certifications = []
  @observable positions = [
    { company: 'The Pond', title: 'Business Development', duration: '6 months', verified: false },
    { company: 'EmblemEDU', title: 'Business Development', duration: '9 months', verified: false },
    { company: 'WME | IMG', title: 'Global Insights Manager', duration: '2 years, 3 months', verified: true },
    { company: 'ESPN', title: 'Senior Research Analyst', duration: '1 year, 8 months', verified: false },
    { company: 'The Madison Square Garden Company', title: 'Consumer Research Analyst', duration: '1 years, 2 months', verified: false }
  ]
  @observable tests = [
    { name: 'SAT', score: '1390', date: '2010/10/10' }
  ]
  @observable schools = [
    { name: 'Wake Forest University', gradYear: '2010', gpa: '3.34', degree: 'B.A.', field: 'Communications and Psychology', verified: true },
    { name: 'Montgomery High School', gradYear: '2006', verified: false }
  ]

  @observable creditScore: number
  @observable annualIncome: number

  @observable city = 'Los Angeles'
  @observable state = 'CA'
  @observable zip = '90025'
  @observable country = 'USA'

  @observable profileCompletionPercentage = 10
  @observable verificationStage = 'VerifyIdentity'
  @observable interests: string[] = ['Tech and Coding', 'Sports and Fitness', 'Real Estate and Investing']
  @observable thePondApi: ServerInterface = serverInterface

  @action.bound
  async getUser() {
    if (await checkLocalDataExists('phone') && await checkLocalDataExists('token')) {
      try {
        const phone = await retrieveLocalData('phone')
        const token = await retrieveLocalDataSecure('token', phone)
  
        this.thePondApi.setToken(token)
        const user = await this.thePondApi.get('/users')
        this.setProperties(user)
  
        return user
      } catch (error) {
        if (error.toString().includes('Authentication failed')) {
          return { invalidToken: true }
        }

        throw new Error(error)
      }
    }

    throw new Error('No stored credentials')
  }

  @action.bound
  getFinancials() {
    const financials: any = []
    if (this.annualIncome) {
      financials.push({ name: 'Annual Income', value: this.annualIncome })
    }
    if (this.creditScore) {
      console.log('HERE')
      financials.push({ name: 'Credit Score', value: this.creditScore })
    }

    console.log('HERE2', financials, this.creditScore)

    return financials
  }

  @action.bound
  checkUserExists() {
    return 
  }

  @action.bound
  setProperties(data) {
    Object.keys(data).forEach((key: string) => this[key] = data[key])
  }

  @action.bound
  async updateUser(body: any) {
    console.log('UPDATING USER:', body)
    const result = await this.thePondApi.put('/users', body)
    console.log('USER UPDATING:', result)
    this.setProperties(result)
    return result
  }

  @action.bound
  refresh() {
    this.id = this.id + '1'
    this.id = this.id.slice(0, -1)
  }

  @action.bound
  requestCode({ email, phone, sendTo }) {
    return this.thePondApi.post('/signups', { email, phone, sendTo })
  }

  @action.bound
  async confirmCode(code: string) {
    console.log('REQUESTING')
    try {
      const { email, phone } = this
      const token = await this.thePondApi.post('/signups/code', { email, phone, code })
      console.log('GOT SOMETHING', token)
      this.thePondApi.setToken(token)
      await storeLocalData({ data: phone, key: 'phone' })
      await storeLocalDataSecure(token, 'token', phone)

      return true
    } catch (error) {
      console.log('ERROR CONFIRMING CODE:', error)
      throw new Error(error)
    }
  }

  @action.bound
  async removeUser() {
    try {
      deleteLocalData('hashedPIN')
      deleteLocalData('user')
      return true
    } catch (e) {
      return false
    }
  }

  @action.bound
  getAge() {
    const now = moment()
    const dob = moment(this.dateOfBirth)
    const age = now.diff(dob, 'year', true)

    return Math.floor(age)
  }

  @action.bound
  async loadInterests(pin: string) {
    const interests = await retrieveLocalDataSecure('interests', pin)
    if (interests instanceof Array) {
      this.interests = interests
    }
  }

  @action.bound
  async addInterest(pin: string, interest: string) {
    const newInterests = this.interests.map(ele => ele)
    if (!newInterests.includes(interest)) {
      newInterests.push(interest)
      await storeLocalDataSecure(newInterests, 'interests', pin)
      this.interests = newInterests
    }
  }

  @action.bound
  async removeInterest(pin: string, interest: string) {
    const newInterests = this.interests.filter((ele: string) => ele !== interest)
    await storeLocalDataSecure(newInterests, 'interests', pin)
    this.interests = newInterests
  }
  
  @action.bound
  async shouldPrompt() {
    const lastPrompt = await retrieveLocalData('lastPrompt')
    await storeLocalData({ data: new Date(), key: 'lastPrompt' })

    if (lastPrompt) {
      return new Date().getTime() > ( new Date(lastPrompt).getTime() + ONE_WEEK)
    }

    return true
  }

  @action.bound
  getCityForLatLong(coords: any) {
    return this.thePondApi.post('/locations/city', coords)
  }
}
