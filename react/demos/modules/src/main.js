import helloWorld from './helloWorld'
import sum, { div, mul } from './math'

helloWorld()

console.log('sum(1, 2) = ' + sum(1, 2))
console.log('div(1, 2) = ' + div(1, 2))
console.log('mul(2, 3) = ' +  mul(2, 3))