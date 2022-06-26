
const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PASS_REGEXP = /^.{6,}$/ // /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
const LOGIN_REGEXP = /^[A-Za-z]([.A-Za-z0-9-]{2,15})([A-Za-z0-9])$/

const isEmailValid = (email) => EMAIL_REGEXP.test(email)
const isPasswordValid = (pass) => PASS_REGEXP.test(pass)
const isLoginValid = (login) => LOGIN_REGEXP.test(login)


export default {
  isEmailValid,
  isPasswordValid,
  isLoginValid,
}
