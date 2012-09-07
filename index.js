
/**
 * Module dependencies.
 */

var Notification = require('notification').Notification
  , Progress = require('progress')
  , inherit = require('inherit')
  , o = require('jquery');

/**
 * Expose `notify`.
 */

exports = module.exports = notify;

/**
 * Return a new `ProgressNotification` with the given 
 * (optional) `title` and `msg`. Either combination
 * may pass a callback.
 *
 * @param {String} title or msg
 * @param {Function} msg
 * @return {Dialog}
 * @api public
 */

function notify(title, msg){
  if ('string' == typeof msg) {
    return new ProgressNotification({ title: title, message: msg })
      .show();
  } else {
    return new ProgressNotification({ message: title })
      .show();
  }
}

/**
 * Initialize a new `ProgressNotification`.
 *
 * Options:
 *
 *    - `title` dialog title
 *    - `message` a message to display
 *
 * @param {Object} options
 * @api public
 */

function ProgressNotification(options) {
  options = options || {};
  var self = this;
  var msg = options.message;
  this.progress = new Progress;
  this.content = o(require('./template'));
  options.message = this.content;
  options.classname = 'progress-notification';
  Notification.call(this, options);
  this.size(40);
  this.content.find('.progress-notification-canvas').append(this.progress.render());
  this.message(msg);
};

/**
 * Inherit from `Notification.prototype`.
 */

inherit(ProgressNotification, Notification);

/**
 * Set progress indicator size to `n`.
 *
 * @param {Number} n
 * @return {ProgressNotification}
 * @api public
 */

ProgressNotification.prototype.size = function(n){
  this.progress.size(n);
  return this;
};

/**
 * Set progress `msg`.
 *
 * @param {String} msg
 * @return {ProgressNotification}
 * @api public
 */

ProgressNotification.prototype.message = function(msg){
  this.content.find('.progress-notification-message').text(msg);
  return this;
};

/**
 * Set progress percentage to `n`.
 *
 * @param {Number} n
 * @return {ProgressNotification}
 * @api public
 */

ProgressNotification.prototype.update = function(n){
  this.progress.update(n);
  return this;
};
