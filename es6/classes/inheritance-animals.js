// Animal

class Animal {
    constructor(species, name) {
        this.species = species
        this.name = name
    }

    eat() {
        console.log(this.name + ' eating')
    }

    sleep() {
        console.log(this.name + ' sleeping')
    }

    pee() {
        console.log(this.name + ' peeping')
    }

    poo() {
        console.log(this.name + ' pooping')
    }
}

// Feline

class Feline extends Animal {
    constructor(name) {
        super('feline', name)
    }

    scratch() {
        console.log(this.name + ' scratching')
    }
}

// Cat

class Cat extends Feline {
    constructor(name) {
        super(name)
    }

    meow() {
        console.log(this.name + ' meowing')
    }
}

// Lion

class Lion extends Feline {
    constructor(name) {
        super(name)
    }

    roar() {
        console.log(this.name + ' roaring')
    }
}

// samples

var minino = new Cat('Minino')

// // inherited actions from Animal
// minino.eat();
// minino.sleep();
// minino.pee();
// minino.poo();
// // inherited actions from Feline
// minino.scratch();
// // inherited actions from Cat
// minino.meow();


var cecil = new Lion('Cecil')
cecil.name = 'James'
console.log(cecil.species)
cecil.eat()

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
        input.eat();

        if (input instanceof Cat)
            input.meow();
        else if (input instanceof Lion)
            input.roar();
    } else
        console.error('this is not a feline!');
}

//feedFeline(minino);
// feedFeline(cecil);