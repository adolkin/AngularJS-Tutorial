var express = require('express');
var app = express();  // initialize app
var jwt = require('express-jwt');
var cors = require('cors');

app.use(cors()); // tell app to use cors 

// Middleware allows us to provide the layer of protection that request who jwt endpoints have to pass
// through in order to get at what they are looking for. And this is useful for us because it allows 
// us to set up some checks before the request is able to pass throught to the resource.

// authCheck: name of Middleware
// jwt: Middleware package
var authCheck = jwt({
  secret: new Buffer('5uRjGiycLHpUd5vikL7TA8Lt3m1DuuUBgh2rmsRnmAic0phPQ2JT50GdfSIslHd3', 'base64'),
  audience: 'Pp92iXYQvyu22x_3h30simBZZVKhmivx'
});

app.get('/api/public', function(req, res) {
  res.json({message: "Hello from a public endpoint! You don't need to be authenticated to see this"});
});

// app.get('/api/private', authCheck, function(req, res) {
  app.get('/api/private', function(req, res) {
  res.json({message: "Hello from a private endpoint! You DO need to be authenticated to see this"});
});

app.listen(3001);
console.log('Listening on http://localhost:3001');