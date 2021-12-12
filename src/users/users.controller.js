const { users, users_db, users_create } = require('./users.module')

module.exports = async function (rq, rs) {
  //GET METHOD
  if (rq.method == 'GET') {
    //users html
    if (rq.url == '/users') {
      rs.setHeader('content-type', 'text/html')
      let A_A = await users
      return rs.end(A_A)

      //GET users database
    } else if (rq.url == '/api/users') {
      rs.setHeader('content-type', 'text/html')
      let A_A = await users_db
      return rs.end(A_A)
    }

    //POST METHOD
  } else if (rq.method == 'POST') {
    //create new user
    if (rq.url == '/api/users/create') {
      users_create(rq, rs)
    }
  }
}
