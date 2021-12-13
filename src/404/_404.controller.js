const { _404 } = require('./_404.module')
module.exports = async function (rq, rs) {
  rs.writeHead(404, { 'Content-Type': 'text/html' })
  let A_A = await _404()
  return rs.end(A_A)
}
