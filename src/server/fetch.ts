export default class Fetch {
  apiEndpoint: string

  constructor() {
    this.apiEndpoint = 'https://localhost:4444'
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
      .then(data => data.json())
      .catch(err => console.log('ERROR ON POST: ', err))

    console.log('RESULT:', result)
    return result
  }

  async get(route: string, token: string) {
    const request = new Request(this.apiEndpoint + route, {
      headers: {
        "x-access-token": token
      }
    })

    console.log('SERVER GET: ', request)

    const result = await fetch(request)
      .then(data => data.json())
      .catch(err => console.log('ERROR ON GET: ', err))

    console.log('RESULT:', result)
    return result
  }

  async put(route: string, body: any, token: string) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        "x-access-token": token
      }
    })

    console.log('SERVER PUT: ', request)

    const result = await fetch(request)
      .then(data => data.json())
      .catch(err => console.log('ERROR ON PUT: ', err))

    console.log('RESULT:', result)
    return result
  }

  async delete(route: string, token: string) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'DELETE',
      headers: {
        "x-access-token": token
      }
    })

    console.log('SERVER DELETE: ', request)

    const result = await fetch(request)
      .then(data => data.json())
      .catch(err => console.log('ERROR ON DELETE: ', err))

    console.log('RESULT:', result)
    return result
  }
}
