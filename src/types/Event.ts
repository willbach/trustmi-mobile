import Member from 'types/Member'

export default class Event {
  id: string
  title: string
  groupName: string
  groupId: string
  about: string
  street: string
  city: string
  state: string
  country: string
  location: string
  attendees: Member[]
  interests: string[]
  documents: string[]
  rsvp: string
  saved: boolean
  startTime: Date
  endTime: Date
  createdAt: Date

  constructor(data) {
    const { id, title, groupName, groupId, about, street, city, state, country, location, attendees, interests, documents, rsvp, saved, startTime, endTime, createdAt } = data
    this.id = id
    this.title = title
    this.groupName = groupName
    this.groupId = groupId
    this.about = about
    this.street = street
    this.city = city
    this.state = state
    this.country = country
    this.location = location
    this.attendees = attendees && attendees.map(member => new Member(member)) || []
    this.interests = interests || []
    this.documents = documents || []
    this.rsvp = rsvp
    this.saved = saved
    this.startTime = startTime && new Date(startTime) || new Date()
    this.endTime = endTime && new Date(endTime) || new Date()
    this.createdAt = new Date(createdAt)
  }
}
