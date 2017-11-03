Array.prototype.clone = function() {
    return this.slice(0)
}

const arr1 = [1, 2, 3]
const arr2 = arr1.clone()

console.log(arr1 === arr2)