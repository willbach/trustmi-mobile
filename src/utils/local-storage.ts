import CryptoJS from 'crypto-js'
import { AsyncStorage } from 'react-native'

export const storeLocalData = (data: any, key: string, pin: string) : Promise<void> => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), pin).toString()
  return AsyncStorage.setItem(key, encryptedData)
}

// TODO: modify this function so that it returns a consistent value
export const retrieveLocalData = async(key: string, pin: string) : Promise<any> => {
  const encryptedData = await AsyncStorage.getItem(key)
  
  if (encryptedData === null) {
    return {}
  }

  const decryptedDataBytes = CryptoJS.AES.decrypt(encryptedData, pin)
  console.log(1, decryptedDataBytes)
  const decryptedData = decryptedDataBytes.toString(CryptoJS.enc.Utf8)
  console.log(2, decryptedData)
  try {
    const data = JSON.parse(decryptedData)
    console.log(3, data)
    return data
  } catch (e) {
    console.log('ERROR:', e)
    return decryptedData
  }
}

export const deleteLocalData = async(key: string) : Promise<void> => {
  return AsyncStorage.removeItem(key)
}

export const checkLocalDataExists = (key: string) => AsyncStorage.getItem(key).then(data => !!data)
