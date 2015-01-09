var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;

var user = new Schema({
  _id: String,
  name: String,
  email: String,
  office: String,
  phone: String,
  mobile: String,
  roles: [String],
  lastVisitedOn: Date,
  forms: [ObjectId],
  travelers: [ObjectId],
  subscribe: {
    type: Boolean,
    default: false
  }
});

var group = new Schema({
  _id: String,
  name: String,
  forms: [ObjectId],
  travelers: [ObjectId]
});

var User = mongoose.model('User', user);
module.exports = {
  User: User
};
