import RNFetchBlob from 'rn-fetch-blob'
import { deleteLocalData } from 'utils/local-storage'

export class ServerInterface {
  apiEndpoint: string
  token: string

  constructor() {
    // this.apiEndpoint = 'http://10.0.2.2:4444'
    // this.apiEndpoint = 'http://localhost:4444'
    this.apiEndpoint = 'http://192.168.1.4:4444'
  }

  setToken({ auth, token }) {
    this.token = token
  }

  async uploadFormData(route: string, body: any) {
    return RNFetchBlob.fetch(
      'POST',
      this.apiEndpoint + route,
      {
        Accept: 'application/json',
        'x-access-token': this.token || '',
        'Content-Type': 'multipart/form-data'
      },
      body
    )
  }

  async post(route: string, body: any) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": 'application/json',
        "x-access-token": this.token || ''
      }
    })

    console.log('SERVER POST: ', request)

    const response = await fetch(request)

    if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
      throw new Error(`Creation failed with status code: ${response.status}`)
    }

    if (response.status === 200) {
      const data = await response.json()
      console.log('RESULT:', data)
      return data
    } else {
      return true
    }
  }

  async get(route: string) {
    const request = new Request(this.apiEndpoint + route, {
      headers: { "x-access-token": this.token || '' }
    })

    console.log('SERVER GET: ', request)
    const response = await fetch(request)
    console.log('GET RESPONSE', response)

    if (response.status === 401) {
      this.token = ''
      deleteLocalData('phone')
      deleteLocalData('token')
      throw new Error('Authentication failed')
    } else if (response.status >= 400) {
      throw new Error('Bad request')
    } else if (response.status === 204) {
      return []
    }

    const data = await response.json()
    return data
  }

  async put(route: string, body: any) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": 'application/json',
        "x-access-token": this.token || ''
      }
    })

    console.log('SERVER PUT: ', request)

    const result = await fetch(request)
      .then(response => {
        if (response.status === 401) {
          this.token = ''
          deleteLocalData('phone')
          deleteLocalData('token')
          throw new Error('Authentication failed')
        } else if (response.status >= 400) {
          throw new Error('Bad request')
        } else if (response.status === 204) {
          return []
        }
        return response.json()
      })

    console.log('RESULT:', result)
    return result
  }

  async delete(route: string) {
    const request = new Request(this.apiEndpoint + route, {
      method: 'DELETE'
    })

    request.headers['x-access-token'] = this.token || ''

    console.log('SERVER DELETE: ', request)

    const result = await fetch(request)
      .then(response => {
        if (response.status === 401) {
          this.token = ''
          deleteLocalData('phone')
          deleteLocalData('token')
          throw new Error('Authentication failed')
        } else if (response.status >= 400) {
          throw new Error('Bad request')
        } else if (response.status === 204) {
          return []
        }
        return response.json()
      })

    console.log('RESULT:', result)
    return result
  }
}

export const serverInterface = new ServerInterface()
