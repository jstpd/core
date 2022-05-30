import { createHmac } from 'crypto'

const passToHash = (pass, salt) => {
  return createHmac('sha256', salt).update(pass).digest('hex')
}

const checkPass = (pass, hash, salt) => {
  const hashP = createHmac('sha256', salt).update(pass).digest('hex')
  return (hashP === hash) ? true : false
}

const createTokenKey = (id, salt) => {
  const hash = (Math.random(1000, 999999) * id) +'_'+ new Date().toDateString()
  return createHmac('sha256', salt).update(hash).digest('hex')
}

export default {
  passToHash,
  checkPass,
  createTokenKey
}
