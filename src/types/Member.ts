export default class Member {
  id: string
  name: string

  constructor(data) {
    const { id, name } = data
    this.id = id
    this.name = name
  }
}
