import LambdaUtil from 'repositories/scrape-util'
import MFAServer from 'repositories/mfa-server'
import DocumentServer from 'repositories/document-server'

const apiEndpoint = ''
const apiKey = ''

const lambda = new LambdaUtil({ apiEndpoint, apiKey })
const mfaServer = new MFAServer()
const documentServer = new DocumentServer()

export default {
  isMFA: (service: string) => service === 'mint',

  scrape: (username: string, password: string, service: string, secret?: string) => {
    return lambda.post({ username, password, service, secret })
  },

  authenticateMFA: (secret: string, code: string) => {
    return mfaServer.post('/authenticate-mfa', { secret, code })
  },

  addDocument: (type: string, body: any) => {
    return documentServer.post(`/document/${type}`, body)
  },

  getDocumentToken: (auth: any) => {
    return documentServer.post(`/document/auth`, auth)
  },

  getDocuments: (address: string, verified: boolean, token: string) => {
    return documentServer.get(`/document/${verified}/${address}`, token)
  }
}
