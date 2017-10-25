const fs = require('fs')

const ws = fs.createWriteStream('stdin.txt')

process.stdin.pipe(ws)