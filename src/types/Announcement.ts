export default class Announcement {
  name: string
  text: string
  timeStamp: Date

  constructor(data) {
    const { name, text, timeStamp } = data
    this.name = name
    this.text = text
    this.timeStamp = new Date(timeStamp)
  }
}
