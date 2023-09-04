class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.greet = function (greeting) {
            this.greeting = greeting;
            return greeting;
        };

    }
}
// creating objects

let person1=new person("sneha",24);
let person2=new person("neha",25);

//accessing properties

console.log(person1.name,person1.age,person1.greet("hello"));
console.log(person2.name,person2.age,person2.greet("Hi"));





