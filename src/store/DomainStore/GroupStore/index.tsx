import { observable, action } from 'mobx'

import Group from 'types/Group'
import Event from 'types/Event'
import Chat from 'types/Chat'
import Notification from 'types/Notification'
import Announcement from 'types/Announcement'
import City from 'types/City'
import AvailableInterests from 'types/AvailableInterests'
import { INTEREST_CATEGORIES } from 'theme/constants'

import ServerInterface from 'server'
import devData from 'utils/dev-data'

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
  @observable thepondAPI: ServerInterface

  @action
  loadData() {
    this.getGroupsAndEvents()
    this.getChats()
    this.getNotifications()
    this.getAvailableGroups()
    this.getAvailableInterests()
    this.getAvailableEvents()
    this.getAvailableLocations()
  }

  @action
  getGroupsAndEvents() {
    const groups = devData.groups
    this.groups = groups
    const events = groups.reduce((acc: Event[], group: Group) => {
      return acc.concat(group.events.map((event: Event) => {
        event.groupName = group.name
        return event
      }))
    }, [])
    console.log('EVENTS?', events)
    this.events = events
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
  getAvailableGroups() {
    this.availableGroups = devData.availableGroups
  }

  @action
  getAvailableInterests() {
    this.availableInterests = new AvailableInterests(devData.availableInterests)
  }

  @action
  getAvailableEvents() {
    this.availableEvents = devData.availableEvents
  }

  @action
  getAvailableLocations() {
    this.availableLocations = devData.availableLocations
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
  connectToServer(address: string, privateKey: string) {
    this.thepondAPI = new ServerInterface(address, privateKey)
  }

  @action
  createChat(chat: Chat) {
    return this.thepondAPI.post('/chat', chat)
  }

  @action
  updateChat(chat: Chat) {
    return this.thepondAPI.put('/chat', chat)
  }

  @action
  createEvent(event: Event) {
    return this.thepondAPI.post('/event', event)
  }

  @action
  updateEvent(event: Event) {
    return this.thepondAPI.put('/event', event)
  }

  @action
  createGroup(group: Group) {
    return this.thepondAPI.post('/group', group)
  }

  @action
  updateGroup(group: Group) {
    return this.thepondAPI.put('/group', group)
  }

  @action
  createAnnouncement(announcement: Announcement) {
    return this.thepondAPI.post('/announcement', announcement)
  }

  @action
  updateAnnouncement(announcement: Announcement) {
    return this.thepondAPI.put('/announcement', announcement)
  }
}
