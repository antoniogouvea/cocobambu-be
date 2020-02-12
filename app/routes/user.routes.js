const UserController = require('../controllers/user.controller')
const user = new UserController()

module.exports = app => {

  app.post('/user/login', user.login)
  // app.post('/call/end', call.end)
  // app.get('/call', call.find)

  // app.post('/call', call.create)
  // app.get('/call', call.find)
  // app.put('/call', call.update);
  // app.patch('/call', call.update);
  // app.delete('/call', call.remove)

}
