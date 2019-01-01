const DOCUMENT_TYPES = ['drivers', 'passport', 'payStub', 'transcript']

export const isDocumentUpload = (item: any) => DOCUMENT_TYPES.includes(item.service)
