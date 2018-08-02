var exports = module.exports = {}

exports.signup = function(req,res){
	res.render('signup');
}

exports.signin = function(req,res){
	res.render('signin');
}

exports.dashboard = function(req,res){
  res.render('dashboard', { emailaddress: req.user.email });
  var email = req.user.email;
  console.log('Testing from authcontroller file: ' + email);
}


exports.logout = function(req,res){
  req.session.destroy(function(err) {
  res.redirect('/');
  });

}