import { isDocumentUpload } from 'utils/checks'

export const goToService = (navigation, item, onContinue?: any) => {
  if (isDocumentUpload(item)) {
    navigation.navigate("UploadDocument", { type: item.service, onContinue })
  } else {
    navigation.navigate("VerifiedPage", { name: item.name, service: item.service, onContinue })
  }
}
