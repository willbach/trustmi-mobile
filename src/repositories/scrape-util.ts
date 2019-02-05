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

    console.log('ABOUT TO SCRAPE: ', request)

    const result = await fetch(request)

    if (result.status > 199 && result.status < 300) {
      const data = await result.json()
      console.log('got some data back', result)

      return data
    } else {
      const message = await result.json()
      throw new Error(`${result.status}: ${message}`)
    }
  }
}
