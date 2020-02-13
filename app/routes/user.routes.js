const UserController = require('../controllers/user.controller')
const user = new UserController()

module.exports = app => {

  app.post('/api/user/login', user.login)

}
