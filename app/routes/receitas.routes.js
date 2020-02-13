const ReceitasController = require('../controllers/receitas.controller.js')
const receitas = new ReceitasController()

module.exports = app => {

  app.get('/api/receitas/', receitas.getReceitas)

}
