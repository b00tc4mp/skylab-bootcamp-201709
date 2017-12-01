function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		const x = arr[i]
		arr[i] = arr[j]
		arr[j] = x
 	}

 	return arr
}

module.exports = shuffle