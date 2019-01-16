export default class Member {
  id: string
  firstName: string
  lastName: string

  constructor(data) {
    const { id, firstName, lastName } = data
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
  }
}
