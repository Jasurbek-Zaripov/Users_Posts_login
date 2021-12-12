const _404Controller = require('./404/_404.controller')
const homeController = require('./home/home.controller')
const loginController = require('./login/login.controller')
const postsController = require('./posts/posts.controller')
const profileController = require('./profile/profile.controller')
const usersController = require('./users/users.controller')

module.exports = function (rq, rs) {
  //home
  if (rq.url == '/') {
    homeController(rq, rs)
  }
  //users
  else if (/users/g.test(rq.url)) {
    usersController(rq, rs)
  }

  //posts
  else if (/posts/g.test(rq.url)) {
    postsController(rq, rs)
  }

  //login
  else if (/login/g.test(rq.url)) {
    loginController(rq, rs)
  }

  //profile
  else if (/profile/g.test(rq.url)) {
    profileController(rq, rs)
  }

  //GET 404
  else {
    _404Controller(rq, rs)
  }
}
