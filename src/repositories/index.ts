import LambdaUtil from 'repositories/scrape-util'
import MFAServer from 'repositories/mfa-server'
import DocumentServer from 'repositories/document-server'

const apiEndpoint = 'https://7ksbiabql8.execute-api.us-east-2.amazonaws.com/default/testCreditKarma'
const apiKey = 'lfiGZNhrbK11rM1dsYo5R1pamCgXblb1JVNtks3b'

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
    return documentServer.post(`/documents/${type}`, body)
  },

  getDocumentToken: (auth: any) => {
    return documentServer.post(`/documents/auth`, auth)
  },

  getDocuments: (address: string, verified: boolean, token: string) => {
    return documentServer.get(`/documents/${verified}/${address}`, token)
  }
}
