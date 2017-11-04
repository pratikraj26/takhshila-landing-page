/**
 * Main application routes
 */

'use strict';

var config = require('./config/environment');
var errors = require('./components/errors');
var path = require('path');

module.exports = function(app, server) {
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.route('/success')
    .post(function(req, res) {
      console.log(req.body);
      res.redirect('/success');
      // res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
