const fs = require('fs/promises')
const path = require('path')
let root = path.resolve()

//export profile
module.exports = {
  //read profile html
  profile: fs.readFile(path.join(root, 'src', 'profile', 'profile.html'), 'utf-8'),
}
