import lambdaUtil from 'data-sources/scrape-util'

const apiEndpoint = 'https://tl77ysi8ai.execute-api.us-east-2.amazonaws.com/default/testCollegeBoard'
const apiKey = 'hrM9EZPPmG4mj8H8iyiVc5hketOJmwna9H0qHJJO'

const lambda = new lambdaUtil({ apiEndpoint, apiKey })

export default {
  scrape: (username: string, password: string) => {
    return lambda.post({ username, password })
  }
}
