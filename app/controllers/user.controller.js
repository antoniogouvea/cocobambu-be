const UserService = require('../services/user.service')

const userService = new UserService()

class UserController {

  async login(req, res) {
    const { body } = req

    try {
      const count = await callService.count({ atendente: body.atendente, status: 1 })

      if (count)
        throw new Error('Atendente ocupado')

      const call = await callService.insert(body)
      await attendantService.update({ nome: body.atendente }, { status: 1 })

      return res.json(call)
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: '' })
    }
  }



  find(req, res) {
    let { where = '{}', fields = '{}' } = req.query
    
    where = JSON.parse(where)
    fields = JSON.parse(fields)

    console.log('=======================================================')
    console.log(`CallController :: find :: ${JSON.stringify(where)}`)

    callService.find(where, fields)
      .then(data => res.json(data))
      .catch(error => res.error(error))
  }

}

module.exports = UserController