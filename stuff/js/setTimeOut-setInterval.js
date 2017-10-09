// finite timer

var timeout = setTimeout(function() {
    console.log(new Date().toLocaleTimeString())
}, 1000);

clearTimeout(timeout);

// cyclic timer repeats

var interval = setInterval(function() {
    console.log(new Date().toLocaleTimeString())
}, 1000);

clearInterval(interval);

// mix

var interval = setInterval(function() {
    console.log(new Date().toLocaleTimeString())
}, 1000);

var timeout = setTimeout(function() {
    clearInterval(interval);
}, 10000);



