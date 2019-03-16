import CryptoJS from 'crypto-js'
import { AsyncStorage } from 'react-native'

export const storeLocalDataSecure = (data: any, key: string, pin: string) : Promise<void> => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), pin).toString()
  return AsyncStorage.setItem(key, encryptedData)
}

export const storeLocalData = ({ data, key }) : Promise<void> => {
  return AsyncStorage.setItem(key, data)
}

// TODO: modify this function so that it returns a consistent value
export const retrieveLocalDataSecure = async(key: string, pin: string) : Promise<any> => {
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

export const retrieveLocalData = (key: string) : Promise<any> => AsyncStorage.getItem(key)

export const deleteLocalData = async(key: string) : Promise<void> => {
  return AsyncStorage.removeItem(key)
}

export const checkLocalDataExists = (key: string) => AsyncStorage.getItem(key).then(data => !!data)
