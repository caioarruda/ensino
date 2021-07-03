const getKey = (keyData) => {
  var stdin = process.openStdin()
  //dsfstdin.setRawMode(true)

  // resume stdin in the parent process (node app won't quit all by itself
  // unless an error or process.exit() happens)
  stdin.resume()

  // i don't want binary, do you?
  stdin.setEncoding('utf8')

  // on any data into stdin
  stdin.on('data', function (key) {
    // ctrl-c ( end of text )
    if (key.indexOf('\n') > -1) {
      keyData = key
      console.log('pressionado: ', keyData)
      process.exit()
    }
  })
}

module.exports = { getKey }
