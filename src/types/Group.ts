import Announcement from 'types/Announcement'
import Event from 'types/Event'
import Member from 'types/Member'
import Chat from './Chat';

export default class Group {
  id: string
  name: string
  city: string
  state: string
  country: string
  about: string
  chats: Chat[]
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
    const { id, name, city, state, country, about, chats, announcements, organizers, members, events, videos, photos, files, recommendations, interests, filters } = data
    this.id = id
    this.name = name
    this.city = city
    this.state = state
    this.country = country
    this.about = about
    this.chats = chats && chats.map(ele => new Chat(ele)) || []
    this.announcements = announcements && announcements.map(ele => new Announcement(ele)) || []
    this.organizers = organizers && organizers.map(ele => new Member(ele)) || []
    this.members = members && members.map(ele => new Member(ele)) || []
    this.events = events && events.map(ele => new Event(ele)) || []
    this.videos = videos || []
    this.photos = photos || []
    this.files = files || []
    this.recommendations = recommendations || []
    this.interests = interests && interests.map(item => item.interest) || []
    this.filters = filters
  }

  isOrganizer(userId: string) {
    return Boolean(this.organizers.find(organizer => organizer.id === userId))
  }
}
