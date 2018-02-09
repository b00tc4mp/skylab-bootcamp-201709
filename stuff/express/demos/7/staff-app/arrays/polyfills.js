Array.prototype.clone = function() {
    return require('./clone')(this)
}

Array.prototype.shuffle = function() {
 	return require('./shuffle')(this)
}