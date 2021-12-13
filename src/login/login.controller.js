const { login } = require('./login.module')

module.exports = async function (rq, rs) {
  if (rq.method == 'GET') {
    if (rq.url == '/login') {
      rs.setHeader('content-type', 'text/html')
      let A_A = await login()
      return rs.end(A_A)
    }
  }
}
