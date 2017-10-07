export class Hello {

}

var myname: any = 'aa'

myname = 11

class Person {
    name: string
    age: number
}

var Changer: Person = new Person()
Changer.name = "Changer"
Changer.age = 11


function test(a: string, b?: string, c: string = "xx") {
    console.log(a)
    console.log(b)
    console.log(c)
}

test('aa')

function getScode() {
    return {
        code: 'IBM',
        price: {
            price1: 300,
            price2: 200
        }
    }
}

var {code, price} = getScode()

console.log(code)
console.log(price)

function getName(name: string) {
    this.name = name
    setInterval(() => {
        console.log(this.name)
    }, 1000)
}

new getName('aaa')

function timer() {
    for(var a = 0; a < 5; a++) {
        setInterval(() => {
            console.log(a)
        }, 1000)
    }
}

timer()

class Person1 {
    constructor(name: string) {
        console.log(this.name)
    }

    eat() {
        console.log(this.name)
    }
}

var p1 = new Person1()
p1.name = 'Batman'
p1.eat()
