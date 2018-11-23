import { observable, action } from 'mobx'

import Group from 'types/Group'
import Event from 'types/Event'
import Chat from 'types/Chat'
import Notification from 'types/Notification'

import devData from 'utils/dev-data'

export default class GroupStore {
  @observable groups: Group[] = []
  @observable chats: Chat[] = []
  @observable notifications: Notification[] = []
  @observable availableGroups: Group[] = []
  @observable availableInterests: string[] = []
  @observable events: Event[] = []
  @observable availableEvents: Event[] = []
  @observable eventsByInterest = {}

  @action
  loadData() {
    this.getGroupsAndEvents()
    this.getChats()
    this.getNotifications()
    this.getAvailableGroups()
    this.getAvailableInterests()
    this.getAvailableEvents()
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
    this.availableInterests = devData.availableInterests
  }

  @action
  getAvailableEvents() {
    this.availableEvents = devData.availableEvents
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
}
