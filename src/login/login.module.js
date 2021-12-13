const fs = require('fs/promises')
const path = require('path')
let root = path.resolve()

//export login
module.exports = {
  //read login html
  login: async () => fs.readFile(path.join(root, 'src', 'login', 'login.html'), 'utf-8'),
}
