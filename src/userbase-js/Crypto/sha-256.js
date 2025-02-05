import base64 from 'base64-arraybuffer'

const BYTE_SIZE = 32 // 256 / 8
const HASH_ALGORITHM_NAME = 'SHA-256'

/**
 *
 * @param {ArrayBuffer} data
 */
const hash = async (data) => {
  const result = await window.crypto.subtle.digest(
    {
      name: HASH_ALGORITHM_NAME,
    },
    data
  )
  return result
}

const hashString = async (dataString) => {
  const data = base64.decode(dataString)
  const result = await hash(data)
  return base64.encode(result)
}

export default {
  BYTE_SIZE,
  HASH_ALGORITHM_NAME,
  hash,
  hashString
}
