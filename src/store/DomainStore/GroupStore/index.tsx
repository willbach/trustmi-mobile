import { observable, action } from 'mobx'

import Group from 'types/Group'
import Event from 'types/Event'
import Chat from 'types/Chat'
import User from 'types/User'
import Notification from 'types/Notification'
import Announcement from 'types/Announcement'
import City from 'types/City'
import AvailableInterests from 'types/AvailableInterests'
import { INTEREST_CATEGORIES } from 'theme/constants'

import { ServerInterface, serverInterface } from 'server'
import devData from 'utils/dev-data'
import { generateId } from 'utils/buffer-util'

export default class GroupStore {
  @observable groups: Group[] = []
  @observable chats: Chat[] = []
  @observable notifications: Notification[] = []
  @observable availableGroups: Group[] = []
  @observable availableInterests: AvailableInterests = new AvailableInterests(INTEREST_CATEGORIES.reduce((acc, cur) => {
    acc[cur] = []
    return acc
  }, {}))
  @observable availableLocations: City[] = []
  @observable categories: string[] = []
  @observable events: Event[] = []
  @observable availableEvents: Event[] = []
  @observable eventsByInterest = {}
  @observable lastLogin: Date = new Date()
  @observable thePondApi: ServerInterface = serverInterface

  constructor() {
    this.loadData = this.loadData.bind(this)
    this.getGroupsAndEvents = this.getGroupsAndEvents.bind(this)
    this.getChats = this.getChats.bind(this)
    this.getNotifications = this.getNotifications.bind(this)
    this.getAvailableGroups = this.getAvailableGroups.bind(this)
    this.getAvailableInterests = this.getAvailableInterests.bind(this)
    this.getAvailableLocations = this.getAvailableLocations.bind(this)
    this.searchLocations = this.searchLocations.bind(this)
    this.sortEventsByInterest = this.sortEventsByInterest.bind(this)
    this.createChat = this.createChat.bind(this)
    this.updateChat = this.updateChat.bind(this)
    this.createEvent = this.createEvent.bind(this)
    this.updateEvent = this.updateEvent.bind(this)
    this.createGroup = this.createGroup.bind(this)
    this.updateGroup = this.updateGroup.bind(this)
    this.createAnnouncement = this.createAnnouncement.bind(this)
    this.updateAnnouncement = this.updateAnnouncement.bind(this)
  }

  @action
  loadData({ city, state, country }) {
    this.getGroupsAndEvents()
    this.getChats()
    this.getNotifications()
    this.getAvailableGroups(city, state, country)
    this.getAvailableInterests()
    this.getAvailableLocations()
  }

  @action
  async getGroupsAndEvents() {
    try {
      const groups = await this.thePondApi.get('/groups')
      this.groups = groups.map(group => new Group(group))
      const events = groups.reduce((acc: Event[], group: Group) => {
        return acc.concat(group.events.map((event: Event) => {
          event.groupName = group.name
          return event
        }))
      }, [])
      this.events = events
    } catch (error) {
      console.log('ERROR GETTING GROUPS:', error)
    }
  }

  @action
  getChats() {
    this.chats = devData.chats
  }

  @action
  getNotifications() {
    this.notifications = devData.notifications
  }

  @action
  async getAvailableGroups(city: string, state: string, country: string) {
    try {
      const groups = await this.thePondApi.get(`/groups/available?city=${city}&state=${state}&country=${country}`)
      this.availableGroups = groups.map(group => new Group(group))
    } catch (error) {
      console.log('ERROR GETTING AVAILABLE GROUPS:', error)
    }
  }

  @action
  async getAvailableInterests() {
    try {
      const interests = await this.thePondApi.get(`/interests`)
      this.availableInterests = new AvailableInterests(interests)
    } catch (error) {
      console.log('ERROR GETTING INTERESTS:', error)
      this.availableInterests = new AvailableInterests(devData.availableInterests)
    }
  }

  @action
  async getAvailableLocations() {
    try {
      if (this.availableLocations.length > 0) {
        return this.availableLocations
      }
      
      this.availableLocations = await this.thePondApi.get(`/locations`)
      return this.availableLocations
    } catch (error) {
      console.log('ERROR GETTING LOCATIONS:', error)
      return this.availableLocations
    }
  }

  @action
  async searchLocations(cityQuery: string) {
    return this.thePondApi.get(`/locations/${cityQuery}`)
  }

  @action
  sortEventsByInterest(interests: any) {
    if (!interests)
      return
    const categorizedEvents = interests.toJS().reduce((acc: any, cur: string) => {
      acc[cur] = this.availableEvents.filter((event: Event) => event.interests.includes(cur))
      return acc
    }, {})
    this.eventsByInterest = categorizedEvents
  }
  
  @action
  createGroup({ name, about, city, state, country, interests }) {
    return this.thePondApi.post('/groups', { id: generateId([ name, about, city, state, country ]), name, about, city, state, country, interests })
  }

  @action
  async getGroup(groupId: string) {
    const group = new Group(await this.thePondApi.get(`/groups/${groupId}`))
    return group
  }
  
  @action
  createEvent({ groupId, title, about, directionsParking, street, city, state, country, startTime, endTime, interests, documents, isDraft }) {
    return this.thePondApi.post('/events', { id: generateId([ groupId, title, city, state, country, startTime.toString(), endTime.toString() ]), groupId, title, about, directionsParking, street, city, state, country, startTime, endTime, interests, documents, isDraft })
  }

  @action
  async getEvent(eventId: string) {
    const event = new Event(await this.thePondApi.get(`/events/${eventId}`))
    return event
  }

  @action
  updateEvent(event: Event) {
    return this.thePondApi.put('/events', event)
  }

  @action
  async createUser({ email, first, middle, last, sex, dateOfBirth }) {
    return this.thePondApi.post('/users', { email, first, middle, last, sex, dateOfBirth })
  }

  @action
  async getUser(userId: string) {
    const user = new User(await this.thePondApi.get(`/users/${userId}`))
    return user
  }

  @action
  updateUser({ email, first, middle, last, dateOfBirth }) {
    return this.thePondApi.put('/users', { email, first, middle, last, dateOfBirth })
  }

  @action
  createChat(chat: Chat) {
    return this.thePondApi.post('/chats', chat)
  }

  @action
  updateChat(chat: Chat) {
    return this.thePondApi.put('/chats', chat)
  }

  @action
  updateGroup(group: Group) {
    return this.thePondApi.put('/groups', group)
  }

  @action
  createAnnouncement(announcement: Announcement) {
    return this.thePondApi.post('/announcements', announcement)
  }

  @action
  updateAnnouncement(announcement: Announcement) {
    return this.thePondApi.put('/announcements', announcement)
  }
}
