const ReceitasService = require('../services/receitas.service')
const receitasService = new ReceitasService()

class ReceitasController {


    async getReceitas(req, res) {
        try {
            let query
            if (req.query.id) 
                query = { _id: req.query.id }
            
            query = req.query
            let resposta = await receitasService.find(query)
            res.status(200).json(resposta)
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Erro interno'
            })
        }
    }
}

module.exports = ReceitasController