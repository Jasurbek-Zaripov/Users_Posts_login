const fs = require('fs/promises')
const path = require('path')
let root = path.resolve()
module.exports = {
  home: async () => fs.readFile(path.join(root, 'src', 'home', 'home.html'), 'utf-8'),
}
