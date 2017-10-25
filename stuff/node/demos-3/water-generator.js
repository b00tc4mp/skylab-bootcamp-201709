/*
Agua H2O
Cobre Cu 
Calcio Ca 
Potasio K 
Sodio Na 
Magnesio Mg
Hierro Fe 
Litio Li
Uranio U
Radón Rn

->
H2O
H2O
Cu
H2O
Fe
...

*/

const fs = require('fs')
const shuffleArray = require('./shuffle-array')

Array.prototype.clone = function() {
    return this.slice(0)
}

const elems = ['H2O', 'Cu', 'Ca', 'K', 'Na', 'Mg', 'Fe', 'Li', 'U', 'Rn']

const from = new Date().getTime()

let water = ''

while(new Date().getTime() - from < 100)
	water += shuffleArray(elems.clone()).join('\n') + '\n'

fs.writeFile('water.txt', water)

