import Member from 'types/Member'

export default class Event {
  id: string
  title: string
  groupName: string
  about: string
  location: string
  attendees: Member[]
  interests: string[]
  rsvp: string
  saved: boolean
  startTime: Date
  endTime: Date
  createdAt: Date

  constructor(data) {
    const { id, title, groupName, about, location, attendees, interests, rsvp, saved, startTime, endTime, createdAt } = data
    this.id = id
    this.title = title
    this.groupName = groupName
    this.about = about
    this.location = location
    this.attendees = attendees && attendees.map(member => new Member(member)) || []
    this.interests = interests || []
    this.rsvp = rsvp
    this.saved = saved
    this.startTime = startTime && new Date(startTime) || new Date()
    this.endTime = endTime && new Date(endTime) || new Date()
    this.createdAt = new Date(createdAt)
  }
}
