
const getCookie = (cookie, name) => {
  let matches = cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

const setCookie = (name, value, options = {}) => {
  options = { path: '/', ...options}
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }
  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey
    let optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }
  return updatedCookie
}

const deleteCookie = (name) => {
  return setCookie(name, "", {
    'max-age': -1
  })
}

export default {
  getCookie,
  setCookie,
  deleteCookie
}
