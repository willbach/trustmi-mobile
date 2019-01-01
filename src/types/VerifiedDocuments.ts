export default class VerifiedDocuments {
  drivers: any[]
  passports: any[]
  transcripts: any[]
  payStubs: any[]

  constructor(data: any) {
    const { drivers, passports, transcripts, payStubs } = data
    this.drivers = drivers || []
    this.passports = passports || []
    this.transcripts = transcripts || []
    this.payStubs = payStubs || []
  }
}
