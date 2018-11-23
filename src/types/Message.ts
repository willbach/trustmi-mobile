export default class Message {
  authorId: string
  author: string
  text: string
  timeStamp: Date

  constructor(data) {
    const { authorId, author, text, timeStamp } = data
    this.authorId = authorId
    this.author = author
    this.text = text
    this.timeStamp = new Date(timeStamp)
  }
}
