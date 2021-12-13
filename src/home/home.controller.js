const { home } = require('./home.module')

module.exports = async function (rq, rs) {
  if (rq.url == '/') {
    rs.setHeader('content-type', 'text/html')
    let a = await home()
    return rs.end(a)
  }
}
