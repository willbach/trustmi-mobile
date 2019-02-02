export default class VerifiedDocuments {
  photoIds: any[]
  transcripts: any[]
  payStubs: any[]

  constructor(data: any) {
    const { photoIds, transcripts, payStubs } = data
    this.photoIds = photoIds || []
    this.transcripts = transcripts || []
    this.payStubs = payStubs || []
  }
}
