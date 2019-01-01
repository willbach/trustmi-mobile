import ethUtil from 'ethereumjs-util'

export const serverSign = (hexHash, privateKeyHex) => {
  const privateKeyBuffer = hexToBuffer(privateKeyHex)

  const { r, s, v } = ethUtil.ecsign(
    hexToBuffer(hexHash),
    privateKeyBuffer
  )

  return bufferToHex(
    Buffer.concat(
      [ r, s, Buffer.from([ v ]) ]
    )
  )
}

export const hexToBuffer = (value) => {
  let newValue = value
  if (value.substr(0, 2) === '0x') {
    newValue = value.substr(2)
  }
  return Buffer.from(newValue, 'hex')
}

export const stringToBuffer = (value) => {
  return Buffer.from(value)
}

export const bufferToHex = (buffer) => {
  return buffer.toString('hex')
}

export const privateToAddress = (privateKeyHex) => {
  const privateKeyBuffer = Buffer.from(privateKeyHex, 'hex')
  return ethUtil.privateToAddress(privateKeyBuffer).toString('hex')
}

export const generateHash = (hashBuffer: Buffer) => bufferToHex(ethUtil.sha3(hashBuffer))
