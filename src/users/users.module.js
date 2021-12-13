const fs = require('fs/promises')
const path = require('path')
let root = path.resolve()

//export object
module.exports = {
  //read user html
  users: async () => fs.readFile(path.join(root, 'src', 'users', 'users.html'), 'utf-8'),

  //read user database
  users_db: async () => fs.readFile(path.join(root, 'db', 'users.json'), 'utf-8'),

  //write new user to users database
  users_create: async (rq, rs) => {
    //imports
    const fs = require('fs/promises')
    const path = require('path')
    let root = path.resolve()

    //read users database
    let users_cr = await fs.readFile(path.join(root, 'db', 'users.json'), 'utf-8')

    //json parse database
    users_cr = JSON.parse(users_cr || '{}')

    //get POST body
    let data_body = ''
    rq.on('data', data => {
      data_body += data
    })
    rq.on('end', async () => {
      try {
        if (!data_body) return rs.end(JSON.stringify({ Error: 'no POST body' }, null, 2))
        // json parse POST body
        let data_json = await JSON.parse(data_body)

        //database bormi
        if (!users_cr && !users_cr['username']) {
          //new user
          users_cr[1] = {
            username: data_json['username'],
          }
          users_cr['lastID'] = 1

          //write new user
          await fs.writeFile(
            path.join(root, 'db', 'users.json'),
            JSON.stringify(users_cr, null, 2)
          )

          //send message
          return rs.end(JSON.stringify({ yourID: ID }, null, 2))
        }

        // validate username
        for (const loop_id in users_cr) {
          if (loop_id == 'lastID') continue
          if (Object.hasOwnProperty.call(users_cr, loop_id)) {
            const { username } = users_cr[loop_id]
            //shu user bormi
            if (
              username.trim().toLowerCase() == data_json['username'].trim().toLowerCase()
            ) {
              return rs
                .writeHead(400)
                .end(JSON.stringify({ Error: "boshqa ism o'lab toping!" }, null, 2))
            }
          }
        }

        // new id
        let ID = +users_cr['lastID'] + 1 || 1

        //new user
        users_cr[ID] = {
          username: data_json['username'],
        }

        users_cr['lastID']++

        //write new user
        await fs.writeFile(
          path.join(root, 'db', 'users.json'),
          JSON.stringify(users_cr, null, 2)
        )

        //send message
        return rs.end(
          JSON.stringify({ yourID: ID, name: data_json['username'] }, null, 2)
        )
      } catch (err) {
        console.log(err)
      }
    })
  },
}
