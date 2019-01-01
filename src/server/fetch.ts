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
        "Content-Type": 'application/json'
      }
    })

    if (token) {
      request.headers['x-access-token'] = token
    }

    console.log('SERVER POST: ', request)

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

  async get(route: string, token?: string) {
    const request = new Request(this.apiEndpoint + route)

    if (token) {
      request.headers['x-access-token'] = token
    }

    console.log('SERVER GET: ', request)

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
