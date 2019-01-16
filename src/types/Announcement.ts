import Member from 'types/Member'

export default class Announcement {
  id: string
  creator: Member
  name: string
  text: string
  createdAt: Date

  constructor(data) {
    const { id, creator, name, text, createdAt } = data
    this.creator = creator && new Member(creator) || creator
    this.id = id
    this.name = name
    this.text = text
    this.createdAt = new Date(createdAt)
  }
}
