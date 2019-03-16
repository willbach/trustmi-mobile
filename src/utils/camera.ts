import ImagePicker from 'react-native-image-crop-picker'

export const getPhoto = async (useCamera: boolean, cameraType = 'back', options?: any) : Promise<any> => {
  const imageOptions = options || { width: 300, height: 400, cropping: true, includeBase64: true, cameraType }
  try {
    if (useCamera) {
      const image = await ImagePicker.openCamera(imageOptions)
      return image
    } else {
      const image = await ImagePicker.openPicker(imageOptions)
      return image
    }

  } catch (error) {
    console.log('ERROR WITH IMAGE PICKER', error)
    return { mime: '', data: ''}
  }
}
