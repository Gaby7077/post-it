var exports = module.exports = {}

exports.signup = function(req,res){
	res.render('signup');
}

exports.signin = function(req,res){
	res.render('signin');
}

exports.tracking = function(req,res){
  res.render('tracking', {name: req.user.firstname, last: req.user.lastname, id1:req.user.id});
  var id = req.user.id;
  console.log('Testing from authcontroller file: ' + id);
  module.exports = id;
}


exports.logout = function(req,res){
  req.session.destroy(function(err) {
  res.redirect('/');
  });

}
