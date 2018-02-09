function salute(salutation = 'hello world') {
    console.log(salutation)
}

salute()
salute('hola mundo')


function sum(x, y, z = 0) {
    return x + y + z
}

console.log(sum(1, 2))
console.log(sum(1, 2, 3))