import { observable, action } from 'mobx'
import dataSources from 'data-sources'
import generateRandomString from 'utils/random-string'
import { storeLocalData, retrieveLocalData } from 'utils/local-storage'

export default class ScrapedStore {
  @observable collegeBoard = {}
  @observable creditKarma = {}
  @observable mint = {}
  @observable services = ['collegeBoard', 'creditKarma', 'mint'] //array with all service names in it
  @observable secret : string | undefined = undefined

  @action
  async storeData(service: string, pin: string, username: string, password: string) {
    //generate and send secret here
    if (dataSources.isMFA(service)) {
      this.secret = generateRandomString(20)
    }

    const data = await dataSources.scrape(username, password, service, this.secret)
    console.log('GOT THE DATA IN THE STORE: ', data)
    console.log('PIN', pin, pin.length)

    await storeLocalData(data, service, pin)

    this[service].data = data
    console.log('WE HAVE NOW STORED THE DATA: ', this[service])
    this.secret = undefined
  }

  @action
  async getData(service: string, pin: string) {
    const data = await retrieveLocalData(service, pin)
    this[service].data = data
  }
}
