import { Platform } from 'react-native'

export default class DocumentServer {
  apiEndpoint: string

  constructor() {
    this.apiEndpoint = Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000'
  }

  async post(route: string, body: any) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": 'application/json'
      }
    })

    console.log('SENDING DOCUMENT REQUEST: ', request)

    const result = await fetch(request)

    if (result.status === 200) {
      const data = await result.json()
      console.log('document response:', data)
      return data
    }

    console.log('response from the data server', result.status)

    return true
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
