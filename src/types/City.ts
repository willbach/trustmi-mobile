export default class City {
  city: string
  state: string
  country: string

  constructor(data) {
    const { city, state, country } = data
    this.city = city
    this.state = state
    this.country = country
  }
}
