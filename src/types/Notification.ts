export default class Notification {
  id: string
  groupId: string
  groupName: string
  title: string
  text: string
  timeStamp: Date

  constructor(data) {
    const { id, groupId, groupName, title, text, timeStamp } = data
    this.id = id
    this.groupId = groupId
    this.groupName = groupName
    this.title = title
    this.text = text
    this.timeStamp = new Date(timeStamp)
  }
}
