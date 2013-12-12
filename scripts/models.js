var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/summarizr');
var User = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password_hash: String
});
User.methods.toJSON = function() {
  return {
    name: this.name,
    email: this.email
  }
}
User.path('email').unique(true);

exports.User = mongoose.model('User', User);
