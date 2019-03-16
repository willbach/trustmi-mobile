export default class VerifiedService {
  service: string
  raw: any[] // list
  processed: any // object
  
  constructor({ service, raw, processed }) {
    this.service = service
    this.raw = raw || []
    this.processed = processed || {}

    this.processData = this.processData.bind(this)
  }
  
  processData() {
    
  }
}
