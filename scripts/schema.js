var mongoose = require( 'mongoose' );
mongoose.connect('mongodb://localhost/summarizr');
var User = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

exports.User = mongoose.model('User', User);
