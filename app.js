const http = require('http')
const appController = require('./src/app.controller')

const localhost = '192.168.1.42'
const server = http.createServer((require, response) => {
  // MAIN Rout
  appController(require, response)
})

server.listen(4000, () => console.log(`http://${localhost}:4000`))
