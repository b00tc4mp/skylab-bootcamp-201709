// Animal

function Animal(species, name) {
    this.species = species;
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log(this.name + ' eating');
};

Animal.prototype.sleep = function () {
    console.log(this.name + ' sleeping');
};

Animal.prototype.pee = function () {
    console.log(this.name + ' peeping');
};

Animal.prototype.poo = function () {
    console.log(this.name + ' pooping');
};

// Feline

function Feline(name) {
    Animal.call(this, 'feline', name);
}

Feline.prototype = new Animal();

Feline.prototype.scratch = function () {
    console.log(this.name + ' scratching');
};

// Cat

function Cat(name) {
    Feline.call(this, name);
}

Cat.prototype = new Feline();

Cat.prototype.meow = function () {
    console.log(this.name + ' meowing')
};

// Lion

function Lion(name) {
    Feline.call(this, name);
}

Lion.prototype = new Feline();

Lion.prototype.roar = function () {
    console.log(this.name + ' roaring');
};

// samples

var minino = new Cat('Minino');

// // inherited actions from Animal
// minino.eat();
// minino.sleep();
// minino.pee();
// minino.poo();
// // inherited actions from Feline
// minino.scratch();
// // inherited actions from Cat
// minino.meow();


var cecil = new Lion('Cecil');

// // inherited actions from Animal
// cecil.eat();
// cecil.sleep();
// cecil.pee();
// cecil.poo();
// // inherited actions from Feline
// cecil.scratch();
// // inherited actions from Lion
// cecil.roar();


function feedFeline(input) {
    if (input instanceof Feline) {
        if (input instanceof Cat)
            input.meow();
        else if (input instanceof Lion)
            input.roar();

        input.eat();
    } else
        console.error('this is not a feline!');
}

feedFeline(minino);

feedFeline(cecil);

// Human

function Human(name) {
    Animal.call(this, 'human', name);
}

Human.prototype = new Animal();

Human.prototype.speak = function () {
    console.log(this.name + ' speaking');
};

// examples

var max = new Human('Max');
max.eat();
max.sleep();
max.speak();

