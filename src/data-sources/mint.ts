import lambdaUtil from 'data-sources/scrape-util'
import MFAServer from 'data-sources/mfa-server'

const apiEndpoint = 'https://3cdmapcj00.execute-api.us-east-2.amazonaws.com/default/testMint'
const apiKey = 'wwuwwe3uv0aCgHP20eTtq1pEVeh4bP7O6niphWML'

const lambda = new lambdaUtil({ apiEndpoint, apiKey })
const mfaServer = new MFAServer()

export default {
  scrape: (username: string, password: string, secret: string) => {
    return lambda.post({ username, password })
  },
  authenticateMFA: (secret: string, code: string) => {
    return mfaServer.post('/authenticate-mfa', { secret, code })
  }
}
