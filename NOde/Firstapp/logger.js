const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    //Send an Http Request
    console.log(message);
    //emit raises events,emit means making a noise-signalling
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}

module.exports = Logger;
