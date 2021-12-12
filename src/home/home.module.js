const fs = require('fs/promises')
const path = require('path')
let root = path.resolve()
module.exports = {
  home: fs.readFile(path.join(root, 'src', 'home', 'home.html'), 'utf-8'),
}
