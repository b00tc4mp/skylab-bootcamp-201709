Array.prototype.shuffle = function() {
	for (let i = this.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		const x = this[i]
		this[i] = this[j]
		this[j] = x
 	}

 	return this
}

console.log([1, 2, 3].shuffle())