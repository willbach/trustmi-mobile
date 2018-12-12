import ethUtil from 'ethereumjs-util'
import { serverSign } from 'utils/buffer-util'
import Fetch from './fetch'

export default class ServerInterface {
  token: string
  fetch: any

  constructor(address: string, privateKeyHex: string) {
    const hexHash = ethUtil.sha3(Buffer.from(address, 'hex')).toString('hex')
    const signature = serverSign(hexHash, privateKeyHex)

    this.fetch = new Fetch()

    this.fetch.post('/token', { address, signature })
      .then(auth => {
        this.token = auth.body.token
      })
  }

  post(route: string, body: any) {
    return this.fetch.post(route, body, this.token)
  }

  get(route: string) {
    return this.fetch.post(route, this.token)
  }

  put(route: string, body: any) {
    return this.fetch.put(route, body, this.token)
  }

  delete(route: string) {
    return this.fetch.delete(route, this.token)
  }
}
