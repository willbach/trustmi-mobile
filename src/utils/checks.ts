const DOCUMENT_TYPES = ['photoId', 'payStub', 'transcript']

export const isDocumentUpload = (item: any) => DOCUMENT_TYPES.includes(item.service)
