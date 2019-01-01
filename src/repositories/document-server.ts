export default class DocumentServer {
  apiEndpoint: string

  constructor() {
    // this.apiEndpoint = 'http://localhost:4000'
    this.apiEndpoint = 'http://10.0.2.2:7402'
  }

  async post(route: string, body: any) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": 'application/json'
      }
    })

    console.log('ABOUT TO SEND: ', request)
    console.log('BODY', JSON.stringify(body))

    const result = await fetch(request)
      .then(data => data.json())
      .catch(err => console.log('ERROR ON POSTING: ', err))

    console.log('RESULT:', result)
    return result
  }

  async get(route: string, token: string) {
    const request = new Request(this.apiEndpoint + route, {
      headers: {
        "x-access-token": token
      }
    })

    console.log('ABOUT TO SEND: ', request)

    const result = await fetch(request)
      .then(data => data.json())
      .catch(err => console.log('ERROR ON POSTING: ', err))

    console.log('RESULT:', result)
    return result
  }
}
