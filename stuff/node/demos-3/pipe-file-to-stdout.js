const fs = require('fs')

const rs = fs.createReadStream('stdin.txt')

rs.pipe(process.stdout)