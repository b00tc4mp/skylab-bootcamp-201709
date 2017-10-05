function sum(x, y, z) {
    return x + y + z
}

//var arr = [1, 2, 3]
var arr = 'abc'

console.log(sum(...arr))

var arr2 = [0, ...arr, 4, 5, 6, 7]

console.log(arr2)