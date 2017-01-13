/**
 * @Stake v3
 * Developed by Engagement Lab, 2015
 * ==============
 * Game entry view controller.
 *
 * Help: http://keystonejs.com/docs/getting-started/#routesviews-firstview
 *
 * @class game
 * @static
 * @author Johnny Richardson
 *
 * ==========
 */

var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently loaded view
  locals.section = 'login';

  // Save host to allow path specification for socket.io
  locals.socketHost = req.headers.host;

  // Enable debugging on staging/dev only
  if(req.params.debug === 'debug' && process.env.NODE_ENV !== 'production')
	  locals.debug = true;

  view.on('init', function(next) {
        next();
  });

  // Render the view
  view.render('game/player');

};