const { _404 } = require('./_404.module')
module.exports = function (rq, rs) {
  rs.writeHead(404, { 'Content-Type': 'text/html' })
  return rs.end(_404)
}
