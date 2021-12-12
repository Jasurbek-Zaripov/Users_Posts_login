const fs = require('fs')
const path = require('path')
let root = path.resolve()
module.exports = {
  _404: fs.readFileSync(path.join(root, 'src', '404', '404.html'), 'utf-8'),
}
