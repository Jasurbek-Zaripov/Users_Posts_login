const path = require('path')
const { posts, posts_db, posts_write } = require('./posts.module')

module.exports = async function (rq, rs) {
  //GET METHOD
  if (rq.method == 'GET') {
    //posts rout
    if (rq.url == '/posts') {
      rs.setHeader('content-type', 'text/html')
      //post html
      let A_A = await posts()
      return rs.end(A_A)

      //GET JSON database
    } else if (rq.url == '/api/posts') {
      rs.setHeader('content-type', 'application/json')

      //posts database
      let A_A = await posts_db()
      return rs.end(A_A)
    }

    //POST METHOD
  } else if (rq.method == 'POST') {
    //add new post
    if (rq.url == '/api/posts/add') {
      posts_write(rq, rs)
    }
  }
}
