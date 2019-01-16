export default class Message {
  authorId: string
  author: string
  text: string
  createdAt: Date

  constructor(data) {
    const { authorId, author, text, createdAt } = data
    this.authorId = authorId
    this.author = author
    this.text = text
    this.createdAt = createdAt && new Date(createdAt) || new Date()
  }
}
