
/*
 * GET login page.
 */

var data = require('../data.json');

exports.view = function(req, res){
  res.render('login', {
  	data,
  	"title" : "Login | Ergo"
  });
};