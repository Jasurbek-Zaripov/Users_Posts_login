const fs = require('fs/promises')
const path = require('path')
let root = path.resolve()
module.exports = {
  _404: async () => fs.readFile(path.join(root, 'src', '404', '404.html'), 'utf-8'),
}
