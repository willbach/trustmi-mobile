import lambdaUtil from 'data-sources/scrape-util'

const apiEndpoint = 'https://7ksbiabql8.execute-api.us-east-2.amazonaws.com/default/testCreditKarma'
const apiKey = 'lfiGZNhrbK11rM1dsYo5R1pamCgXblb1JVNtks3b'

const lambda = new lambdaUtil({ apiEndpoint, apiKey })

export default {
  scrape: (username: string, password: string) => {
    return lambda.post({ username, password })
  }
}
