
// CLASS


/* class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  
  const person1 = new Person("John", 30);
  person1.greet(); */

//   Inheritance 

/* class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }

  class Dog extends Animal {
    constructor(name, breed) {
      super(name); 
      this.breed = breed;
    }
  
    bark() {
      console.log(`${this.name} barks. It is a ${this.breed}.`);
    }
  }

const dog1 = new Dog("Tommy", "Labrador");

dog1.speak(); 
dog1.bark();   */

// method override 

/* class Vehicle {
    move() {
      console.log("moving");
    }
  }
  
  class Car extends Vehicle {
    move() {
      console.log("Car is driving on the road");
    }
  }

  let a = new Car();

  a.move(); */

//   super.method()   parent method


/* class Bird {
    fly() {
      console.log("Bird is flying");
    }
  }
  
  class Eagle extends Bird {
    fly() {
      super.fly(); // Parent class method call
      console.log("Eagle soars high in the sky");
    }
  }
  
  const e = new Eagle();
  e.fly(); */


/* function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Data received!"
});
   */


/* function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

const dog = new Animal("Rex");
dog.sayHello(); */

/* function Animal(name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties
  this.breed = breed;
}

// Inherit methods
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Labrador");
myDog.sayHello(); // Hello, I'm Buddy
myDog.bark();    */  // Woof!

  