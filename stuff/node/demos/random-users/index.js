const getRandomUsers = require('./getRandomUsers')

const n = parseInt(process.argv[2])

console.log(getRandomUsers(n))