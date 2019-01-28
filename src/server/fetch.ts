export default class Fetch {
  apiEndpoint: string

  constructor() {
    this.apiEndpoint = 'http://10.0.2.2:4444'
    // this.apiEndpoint = 'http://localhost:4444'
  }

  async post(route: string, body: any, token?: string) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": 'application/json',
        "x-access-token": token ? token : ''
      }
    })

    console.log('SERVER POST: ', request)

    const response = await fetch(request)

    if (response.status !== 200 && response.status !== 204) {
      throw new Error('Authentication failed')
    }
      
    const data = await response.json()
    console.log('RESULT:', data)
    return data
  }

  async get(route: string, token?: string) {
    const request = new Request(this.apiEndpoint + route, {
      headers: {
        "x-access-token": token ? token : ''
      }
    })

    console.log('SERVER GET: ', request)
    const response = await fetch(request)

    if (response.status === 401) {
      throw new Error('Authentication failed')
    } else if (response.status === 400) {
      throw new Error('Bad request')
    } else if (response.status === 204) {
      console.log('GOT A 204')
      return []
    }

    const data = await response.json()

    console.log('RESULT:', data)
    return data
  }

  async put(route: string, body: any, token?: string) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'PUT',
      body: JSON.stringify(body)
    })

    if (token) {
      request.headers['x-access-token'] = token
    }

    console.log('SERVER PUT: ', request)

    const result = await fetch(request)
      .then(response => {
        if (response.status !== 200 && response.status !== 204) {
          throw new Error('Authentication failed')
        }
        return response.json()
      })

    console.log('RESULT:', result)
    return result
  }

  async delete(route: string, token?: string) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'DELETE'
    })

    if (token) {
      request.headers['x-access-token'] = token
    }

    console.log('SERVER DELETE: ', request)

    const result = await fetch(request)
      .then(response => {
        if (response.status !== 200 && response.status !== 204) {
          throw new Error('Authentication failed')
        }
        return response.json()
      })

    console.log('RESULT:', result)
    return result
  }
}
