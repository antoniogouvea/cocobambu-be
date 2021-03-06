const ReceitasService = require('../services/receitas.service')
const receitasService = new ReceitasService()

class ReceitasController {


    async getReceitas(req, res) {
        try {
            let query = req.query

            if (req.query.id)
                query = {
                    _id: req.query.id
                }

            if (req.query.nome) {
                let nome = req.query.nome
                query = {
                    nome: {
                        $regex: nome,
                        $options: 'i'
                    }
                }
            }

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