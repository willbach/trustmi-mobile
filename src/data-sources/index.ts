import lambdaUtil from 'data-sources/scrape-util'
import MFAServer from 'data-sources/mfa-server'

const apiEndpoint = ''
const apiKey = ''

const lambda = new lambdaUtil({ apiEndpoint, apiKey })
const mfaServer = new MFAServer()

export default {
  isMFA: (service: string) => service === 'mint',
  scrape: (username: string, password: string, service: string, secret?: string) => {
    return lambda.post({ username, password, service, secret })
  },
  authenticateMFA: (secret: string, code: string) => {
    return mfaServer.post('/authenticate-mfa', { secret, code })
  }
}
