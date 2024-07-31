class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

export default Person;