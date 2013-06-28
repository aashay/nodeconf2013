var five = require('johnny-five'), button, led;

var exec = require('child_process').exec;

// five.Board().on('ready', function(){
//     five.Led(13).strobe(100);
// });

five.Board().on('ready', function(){
    button = new five.Button(8);
    led = new five.Led(13);
    
    button.on('down', function(){
        led.on();
        exec('say yay!');
    });
    
    button.on('up', function(){
        led.off();
    });
});