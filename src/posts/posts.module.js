const fs = require('fs/promises')
const path = require('path')
let root = path.resolve()

//export
module.exports = {
  //read post html
  posts: async () => fs.readFile(path.join(root, 'src', 'posts', 'posts.html'), 'utf-8'),

  //read post database
  posts_db: async () => fs.readFile(path.join(root, 'db', 'posts.json'), 'utf-8'),

  //write post database
  posts_write: async (rq, rs) => {
    try {
      //imports
      const fs = require('fs/promises')
      const path = require('path')
      let root = path.resolve()

      let posts_db = await fs.readFile(path.join(root, 'db', 'posts.json'), 'utf-8')
      posts_db = JSON.parse(posts_db || '{}')
      let data_body = ''

      rq.on('data', d => {
        data_body += d
      })

      rq.on('end', async () => {
        if (!data_body) return rs.end(JSON.stringify({ Error: 'malumot kelmadi!' }))

        data_body = JSON.parse(data_body)

        //valdate: shu idli post bormi
        if (!data_body['user_id'])
          return rs.end(JSON.stringify({ Error: 'User topilmadi!' }))

        //create new post or add new post
        if (posts_db[data_body['user_id']]) {
          posts_db[data_body['user_id']].push({
            date_time: data_body['data_time'],
            title: data_body['post_title'],
            body: data_body['body_area'],
          })

          //yo'q bo'lsa yaratish
        } else {
          posts_db[data_body['user_id']] = [
            {
              date_time: data_body['data_time'],
              title: data_body['post_title'],
              body: data_body['body_area'],
            },
          ]
        }

        //write post to posts database
        await fs.writeFile(
          path.join(root, 'db', 'posts.json'),
          JSON.stringify(posts_db, null, 2)
        )

        //responese
        rs.end(
          JSON.stringify({
            okey: 'saved: OK!',
          })
        )
      })
    } catch (err) {
      //responese
      rs.end(
        JSON.stringify({
          Error: err.stack,
        })
      )
    }
  },
}
