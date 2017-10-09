//import add from './math'
import add, { div }  from './math'
import $ from './jquery'
import Calc from './Calculator'

console.log(add(1, 2))
console.log(div(2, 3))

const calc = new Calc()

console.log(calc.sum(4, 5))

$('body').addClass('yay');
