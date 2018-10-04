export default class FetchUtil {
  apiEndpoint: string
  apiKey: string

  constructor(data) {
    const { apiEndpoint, apiKey } = data
    this.apiEndpoint = apiEndpoint
    this.apiKey = apiKey
  }

  async post(username: string, password: string) {
    const request = new Request(this.apiEndpoint, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": 'application/json',
        "x-api-key": this.apiKey,
      }
    })

    console.log('ABOUT TO SEND: ', request)

    const result = await fetch(request)
      .then(data => data)
      .catch(err => console.log('ERROR ON SCRAPING: ', err))

    console.log('got some data back', result)
    return result
  }
}
