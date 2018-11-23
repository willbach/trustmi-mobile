import Member from 'types/Member'
import Message from 'types/Message'

export default class Chat {
  id: string
  userId: string
  groupName: string
  title: string
  members: Member[]
  messages: Message[]

  constructor(data) {
    const { id, userId, groupName, members, messages } = data
    this.id = id
    this.userId = userId
    this.groupName = groupName
    this.title = this.generateChatTitle(members.filter((member: Member) => member.id !== userId))
    this.members = members.map(ele => new Member(ele))
    this.messages = messages.map(ele => new Message(ele))
  }

  generateChatTitle(members: Member[]) {
    const getFirstName = (fullName: string) : string => fullName.split(' ')[0]
    if (members.length < 3) {
      return members.map((member: Member) => getFirstName(member.name)).join(', ')
    } else {
      return `${getFirstName(members[0].name)}, ${getFirstName(members[1].name)}, and ${members.length - 2} other${members.length === 3 ? '' : 's'}`
    }
  }
}
