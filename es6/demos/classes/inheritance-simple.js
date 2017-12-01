class Animal {
    eat() {
        console.log('eating')
    }

    sleep() {
        console.log('sleeping')
    }
}

// ES5
// function Animal() {
// }

class Human extends Animal {
    speak() {
        console.log('speaking')
    }
}

const animal = new Animal()
animal.eat()

const human = new Human()
human.eat()
human.speak()