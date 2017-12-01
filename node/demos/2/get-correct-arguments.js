// $ node get-correct-arguments --a --b --c ... x y z

/* example
$ node get-correct-arguments.js 1 2 3 4 5 6 7 8 a b c

a b c
*/

const [x, y, z] = process.argv.slice(process.argv.length - 3)

console.log(x, y, z)