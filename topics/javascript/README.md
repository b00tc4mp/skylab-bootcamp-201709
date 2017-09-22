# Arrays

![from f to a boom!](images/from-f-to-a-boom.jpg)

```javascript
function f1() { console.log(1) }
function f2() { console.log(2) }
function f3() { console.log(3) }

var a = [f1, f2, f3];

a.f1(); // err!

a[0].f1(); // err!

a[0](); // correct!

var b = [a];

b.length;

b[0][1](); // f2 in a from b

var c = [{ d: b }];

c.d[0][2](); // f3 in a from c --> but error!

c[0].d[0][2](); // good!

var f = { g: { h: c } };

f.g.h[0].d[0][0](); // f1 in a from f
```

## Array.prototype.reduce()

```javascript
var cart = [{ item: 'camiseta', price: 10.5 },
            { item: 'jeans', price: 23.95 },
            { item: 'zapatos', price: 45 }];


cart.reduce(function(accum, v) {
   console.log(accum, v)
   return accum + v.price;
}, cart[0].price); // 89.95 wrong!!!! error!!! this store is stealing my money!!! (richy's store)

cart.reduce(function(accum, v) {
   console.log(accum, v)
   return accum + v.price;
}, 0); // 79.45 correct!!!  
```

# Polyfill

```javascript
Array.prototype.clone = function() { // provides a new function to arrays
    return this.slice(0); // creates a copy of the array
};
```

# Hoisting

```javascript
function fun() {
    x = 1;
    console.log(x);
    var x;
}

fun(); // prints 1 and x only exists inside fun (despite being declared at the end)
console.log(x); // raises an error, as x is not in a global context.
```

```javascript
function fun() {
    print();

    function print() {
        console.log('hello world');
    }
}

fun(); // prints 'hello world' as print is declared and inside fun
```

# call vs apply

```javascript
function salute(name, name2) {
    console.log(this.hello + ' ' + name + ', ' + name2);
}

var english = {
    hello: 'hello'
};

var german = {
    hello: 'hallo'
};

var catalan = {
    hello: 'hola'
};

var italian = {
    hello: 'ciao'
};

salute.call(english, 'ana', 'max');
salute.apply(german, ['ana', 'max']);
salute.call(catalan, 'ana', 'max');
salute.apply(italian, ['ana', 'max']);
```

# Prototyping

```javascript

// Animal

function Animal(species, name) {
    this.species = species;
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(this.name + ' eating');
};

Animal.prototype.sleep = function() {
    console.log(this.name + ' sleeping');
};

// Lion

function Lion(name) {
    Animal.call(this, 'feline', name);
}

Lion.prototype = new Animal();

Lion.prototype.roar = function() {
    console.log(this.name + ' roaring');
};

// Human

function Human(name) {
    Animal.call(this, 'human', name);
}

Human.prototype = new Animal();

Human.prototype.speak = function() {
    console.log(this.name + ' speaking');
};

// examples

var max = new Human('max');
max.eat();
max.sleep();
max.speak();

var cecil = new Lion('cecil');
cecil.eat();
cecil.sleep();
cecil.roar();
```

# var vs scope and block

```javascript
function fun() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }

    console.log('here! ' + i); // WARN! i exists here! ... 10!
}

fun();
```
