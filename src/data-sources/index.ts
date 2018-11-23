import LambdaUtil from 'data-sources/scrape-util'
import MFAServer from 'data-sources/mfa-server'
import DocumentServer from 'data-sources/document-server'

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

  addDocument: (document: any, type: string) => { //document needs to be signed
    return documentServer.post(`/document/${type}`, document)
  },

  getDocumentToken: (auth: any) => {
    return documentServer.post(`/document/auth`, auth)
  },

  getDocuments: (address: string, verified: boolean, token: string) => {
    return documentServer.get(`/document/${verified}/${address}`, token)
  }
}
