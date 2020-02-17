const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReceitasSchema = new Schema({
  nome: { type: String },
  descricao: { type: String },
  ingredientes: { type: Array },
  passos: { type: Array },
  tempoReceita:{ type: Number },
  imagempeq:{ type: String },
  imagemgrd:{ type: String }
})

module.exports = mongoose.model('Receitas', ReceitasSchema)