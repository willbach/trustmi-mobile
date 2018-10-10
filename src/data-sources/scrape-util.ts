export default class FetchUtil {
  apiEndpoint: string
  apiKey: string

  constructor(data) {
    const { apiEndpoint, apiKey } = data
    this.apiEndpoint = apiEndpoint
    this.apiKey = apiKey
  }

  async post(body: any) {
    const request = new Request(this.apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": 'application/json',
        "x-api-key": this.apiKey,
      }
    })

    console.log('ABOUT TO SEND: ', request)

    const result = await fetch(request)
      .then(data => data.json())
      .catch(err => console.log('ERROR ON SCRAPING: ', err))

    console.log('got some data back', result)
    return result
  }
}
