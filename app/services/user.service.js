const mongoose = require('mongoose')
const User = mongoose.model('User')

class UserService {

  constructor() { }

  // insert(data) {
  //   let call = new Call(data)
  //   return call.save()
  // }

  find(query) {
    return User.find(query)
  }

  findOne(query, fields) {
    return User.findOne(query, fields)
  }

  update(query, data) {
    return User.findOneAndUpdate(query, data, { new: true })
  }

  remove(query) {
    return User.remove(query)
  }

  count(query) {
    return User.count(query)
  }

}

module.exports = UserService