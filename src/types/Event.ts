export default class Event {
  id: string
  name: string
  groupName: string
  pic: string
  text: string
  location: string
  interests: string[]
  rsvp: string
  saved: boolean
  date: Date

  constructor(data) {
    const { id, name, groupName, pic, text, location, interests, rsvp, saved, date } = data
    this.id = id
    this.name = name
    this.groupName = this.groupName
    this.pic = pic
    this.text = text
    this.location = location
    this.interests = interests
    this.rsvp = rsvp
    this.saved = saved
    this.date = new Date(date)
  }

  formatDateTime() {
    return `${this.date.getMonth() + 1}/${this.date.getDate()}/${this.date.getFullYear()}`
  }
}
