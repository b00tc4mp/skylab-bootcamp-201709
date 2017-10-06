// set

let set = new Set()

set.add('hello').add('world')

console.log(set.has('hello'))

for (let key of set.values()) {
    console.log(key)
}

console.log(set.size)


// array

var arr = [1, 2, 3]

arr.length = 0


// map

let map = new Map()

map.set('en', 'hello')
map.set('es', 'hola')
map.set('it', 'ciao')

const lang = 'it'

console.log(map.get(lang))

//

const trans = new Map()

trans.set('title-en', 'Hello World')
trans.set('title-es', 'Hola Mundo')
trans.set('title-it', 'Ciao Mondo')

trans.set('description-en', 'This is the place i live')
trans.set('description-es', 'Este es el lugar en el que vivo')
trans.set('description-it', 'Blah blah blah')

$('h1').text(trans.get('title-' + lang))
$('p').text(trans.get('description-' + lang))



