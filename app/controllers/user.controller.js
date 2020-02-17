const UserService = require('../services/user.service')
const userService = new UserService()

class UserController {

  async login(req, res) {
    const { body } = req

    try {
      let username = body.username
      let password = body.password
      let where = { username: username }

      let resposta = await userService.findOne(where)
      if (resposta && resposta.password === password)
        return res.status(200).json('Usuário logado')

      return res.status(401).json('Usuário ou senha incorretos')

    } catch (error) {
      console.error(error)
      res.status(500).json({
        message: ''
      })
    }
  }
}

module.exports = UserController