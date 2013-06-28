// dependencies go here
var domain = require('domain');


module.exports = function totallyUseless(req, res, next) {
  //
  // your domain-enhanced error-handling code goes here:
  //
  var d = domain.create();
  d.on('error', function(error){
      return res.send(500, {'error': error.message});
  });

  d.run(next);

};
