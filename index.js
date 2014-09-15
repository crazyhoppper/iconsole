var util = require('util')
require('colors')

var slice = Array.prototype.slice

function format(args) {
  var msg
  if (args.length == 1) {
    msg = args[0]
  } else {
    args = slice.call(args)
    msg = util.format.apply(null, args)
  }
  return msg
}

function wrap() {
  console._oldLog = console.log
  console._prefix = ''
  console.log = function() {
      var msg = format(arguments)
      console._oldLog.apply(this, [this._prefix + msg.white])
  }

  console._oldWarn = console.warn
  console.warn = function() {
      var msg = format(arguments)
      console._oldWarn.apply(this, [this._prefix + msg.yellow])
  }

  console._oldError = console.error
  console.error = function() {
      var msg = format(arguments)
      console._oldError.apply(this, [this._prefix + msg.red])
  }

  console.dir = function() {
    var obj = arguments[0]
    if (!obj) {
      return
    }
    var msg = JSON.stringify(obj, null, 2);
    msg = msg.replace(/(\n\s*)("\w+")(\s*:)/g, function(msg, msg2, msg3, msg4) {
      return msg2 + msg3.green + msg4;
    })
    console._oldLog(msg)
  }
  console.config = function(config) {
      this._prefix = config.prefix || ''
  }
}


wrap()
