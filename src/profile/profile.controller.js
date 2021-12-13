const { profile } = require('./profile.module')

module.exports = async function (rq, rs) {
  //GET METHOD
  if (rq.method == 'GET') {
    // GET profile html
    if (rq.url == '/profile') {
      rs.setHeader('content-type', 'text/html')
      let A_A = await profile()
      return rs.end(A_A)
    }
  }
}
