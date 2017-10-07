class Person {
    constructor(public name: string) {
        console.log('haha')
    }

    eat() {
        console.log(this.name + 'is eating')
    }
}

class Employee extends Person{
    constructor(name: string, age: string) {
        super(name)
        this.age = age
    }

    age: string

    work() {
        super.eat()
        console.log(this.name + 'is working')
    }
}

var worker1 = new Employee('Changer', '111')
worker1.work()