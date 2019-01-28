export default class User {
  id: string
  email: string
  first: string
  middle: string
  last: string
  dateOfBirth: Date

  constructor(data) {
    const { id, email, first, middle, last, dateOfBirth } = data
    this.id = id
    this.email = email
    this.first = first
    this.middle = middle
    this.last = last
    this.dateOfBirth = new Date(dateOfBirth)
  }
}
