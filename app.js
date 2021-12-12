const http = require('http')
const appController = require('./src/app.controller')

const server = http.createServer((require, response) => {
  // MAIN Rout
  appController(require, response)
})

server.listen(4000, () => console.log(`http://localhost:4000`))
/*

/
/users
/posts
/posts/2
/login
/icon post qoldirish uchun
windows.location

*/
