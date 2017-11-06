/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');

// Setup server
var app = express();
var fs = require('fs');

var server = null;

if(config.sslServer){
	var options = {
	  key: fs.readFileSync(config.root + '/server/cert/takhshila.key'),
	  cert: fs.readFileSync(config.root + '/server/cert/364063541ec1b67e.crt'),
	  ca: fs.readFileSync(config.root + '/server/cert/gd_bundle-g2-g1.crt')
	};
	server = require('https').createServer(options, app);
}else{
	server = require('http').createServer(app);
}

require('./config/express')(app);
require('./routes')(app, server);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;