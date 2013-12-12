var models = require('./models'),
    bcrypt = require('bcrypt');
exports.signup = function(req, res){
  if(req.session.current_user) return res.redirect('/#/getting-started');
  var salt = bcrypt.genSaltSync(10);
  var password = bcrypt.hashSync(req.body.password, salt)
  var user = new models.User({
      name: req.body.name,
      email: req.body.email,
      password_hash: password
  });

  user.save( function( err ) {
    if( !err ) {
      req.session.current_user = user.name;
      res.send({user: user.toJSON()})
    } else {
      // check against mongo's error codes
      if (err.code == 11000) res.send({error: "user already exists"});
    }
  });
}
