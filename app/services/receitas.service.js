const mongoose = require('mongoose')
const Receitas = mongoose.model('Receitas')

class ReceitasService {

  constructor() { }

  insert(data) {
    let receita = new Call(data)
    return receita.save()
  }

  find(where) {
    return Receitas.find(where)
  }

  update(query, data) {
    return Receitas.findOneAndUpdate(query, data, { new: true })
  }

  remove(query) {
    return Receitas.remove(query)
  }

  count(query) {
    return Receitas.count(query)
  }

}

module.exports = ReceitasService