var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.on('求安慰', function(who) {
    console.log('给' + who + ' 到水吧');
});

life.emit('求安慰', '汉子');