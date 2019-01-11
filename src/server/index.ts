import ethUtil from 'ethereumjs-util'
import { serverSign } from 'utils/buffer-util'
import Fetch from './fetch'

export  class AuthenticatedServerInterface {
  token: string
  fetch: any

  constructor() {
    this.fetch = new Fetch()
  }

  async authenticate(address: string, privateKeyHex: string) {
    const hexHash = ethUtil.sha3(Buffer.from(address, 'hex')).toString('hex')
    const signature = serverSign(hexHash, privateKeyHex)

    try {
      const result = await this.fetch.post('/token', { address, signature })
      this.token = result.token
    } catch(error) {
      console.log('ERROR GETTING TOKEN:', error)
    }
  }

  post(route: string, body: any) {
    console.log(2)
    return this.fetch.post(route, body, this.token)
  }

  get(route: string) {
    return this.fetch.get(route, this.token)
  }

  put(route: string, body: any) {
    return this.fetch.put(route, body, this.token)
  }

  delete(route: string) {
    return this.fetch.delete(route, this.token)
  }
}

export  class UnauthenticatedServerInterface {
  fetch: any

  constructor() {
    this.fetch = new Fetch()
  }

  post(route: string, body: any) {
    return this.fetch.post(route, body)
  }

  get(route: string) {
    return this.fetch.get(route)
  }

  put(route: string, body: any) {
    return this.fetch.put(route, body)
  }

  delete(route: string) {
    return this.fetch.delete(route)
  }
}
