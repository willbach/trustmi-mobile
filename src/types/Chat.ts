import Member from 'types/Member'
import Message from 'types/Message'

export default class Chat {
  id: string
  userId: string
  creator: Member
  groupName: string
  title: string
  members: Member[]
  messages: Message[]
  createdAt: Date

  constructor(data) {
    const { id, userId, groupName, members, messages, creator, createdAt } = data
    this.id = id
    this.userId = userId
    this.creator = creator && new Member(creator) || new Member({})
    this.groupName = groupName
    this.title = this.generateChatTitle(members.filter((member: Member) => member.id !== userId))
    this.members = members.map(ele => new Member(ele))
    this.messages = messages.map(ele => new Message(ele))
    this.createdAt = createdAt && new Date(createdAt) || new Date()
  }

  generateChatTitle(members: Member[]) {
    if (members.length < 3) {
      return members.map((member: Member) => member.firstName).join(', ')
    } else {
      return `${members[0].firstName}, ${members[1].firstName}, and ${members.length - 2} other${members.length === 3 ? '' : 's'}`
    }
  }
}
