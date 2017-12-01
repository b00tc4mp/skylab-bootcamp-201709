class HelloWorld {
    salute() {
        console.log('Hello, World!')
    }
}

const Riact = {
    HelloWorld
}

const helloWorld = new Riact.HelloWorld()

helloWorld.salute()

//

class HolaMundo extends Riact.HelloWorld {
    salute() {
        console.log('Hola, Mundo!')
    }
}

const holaMundo = new HolaMundo()

holaMundo.salute()