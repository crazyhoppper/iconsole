require('colors')

function wrap() {
    console._oldLog = console.log;
    console._prefix = '';
    console.log = function(msg) {
        console._oldLog.apply(this, [this._prefix + msg.white]);
    }

    console._oldWarn = console.warn;
    console.warn = function(msg) {
        console._oldWarn.apply(this, [this._prefix + msg.yellow]);
    }

    console._oldError = console.error;
    console.error = function(msg) {
        console._oldError.apply(this, [this._prefix + msg.red]);
    }

    console.config = function(config) {
        this._prefix = config.prefix || '';
    }

    console.ok = function(msg) {
        console._oldLog.apply(this, [this._prefix + msg.green]);
    }
}


wrap();