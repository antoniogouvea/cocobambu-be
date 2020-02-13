const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReceitasSchema = new Schema({
  id: { type: String },
  nome: { type: String },
  descricao: { type: String },
  ingredientes: { type: Array },
  passos: { type: Object },
  tempoReceita:{ type: Number }
})



module.exports = mongoose.model('Receitas', ReceitasSchema)