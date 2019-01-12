import Announcement from 'types/Announcement'
import Event from 'types/Event'
import Member from 'types/Member'

export default class Group {
  id: string
  name: string
  city: string
  state: string
  country: string
  about: string
  announcements: Announcement[]
  organizers: Member[]
  members: Member[]
  events: Event[]
  videos: string[]
  photos: string[]
  files: string[]
  recommendations: string[]
  interests: string[]
  filters: any

  constructor(data) {
    const { id, name, city, state, country, about, announcements, organizers, members, events, videos, photos, files, recommendations, interests, filters } = data
    this.id = id
    this.name = name
    this.city = city
    this.state = state
    this.country = country
    this.about = about
    this.announcements = announcements === undefined ? [] : announcements.map(ele => new Announcement(ele))
    this.organizers = organizers === undefined ? [] : organizers.map(ele => new Member(ele))
    this.members = members === undefined ? [] : members.map(ele => new Member(ele))
    this.events = events === undefined ? [] : events.map(ele => new Event(ele))
    this.videos = videos
    this.photos = photos
    this.files = files
    this.recommendations = recommendations
    this.interests = interests
    this.filters = filters
  }
}
