let x = 10;
let y = 20;
let z = x + y;

class Customer{
    name;
    age
    address;

    // Customer(name, age, address){
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // }
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    setName (name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

let customer01 = new Customer("John", 20, "244, Elm st")
console.log(customer01.setName("Jane"));
console.log(customer01.getName());