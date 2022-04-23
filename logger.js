
const colors = {
  reset: '\x1b[0m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
}

function toConsole(color, title, data, time) {
  if (time) {
    const tme = new Date().toLocaleString() // toLocaleTimeString()
    title = `[${tme}] ${title}`
  }
  console.log(colors[color], title, colors.reset, data)
}

function logSave() {
}

export default function (title, data = {}, time = false) {
  const log = () => toConsole('blue', title, data, time)
  const error = () => toConsole('red', title, data, time)
  const danger = () => toConsole('red', title, data, time)
  const success = () => toConsole('green', title, data, time)

  return {
    log,
    error,
    danger,
    success
  }
}
