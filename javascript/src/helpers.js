const getKey = (resolve) => {
  var stdin = process.stdin
  stdin.setRawMode = true
  stdin.setEncoding('utf8')
  stdin.on('data', function (key) {
    if (key.indexOf('\n') > -1) {
      resolve(key.replace('\r\n', ''))
    }
  })
}

const doTeclado = (msg) => {
  console.log(msg)
  return new Promise((resolve) => {
    getKey(resolve)
  })
}
module.exports = { doTeclado }
