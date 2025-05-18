
// // even number from array

// const numbers = [7, 10, 15, 8, 13, 18, 6];
// const evens = [];
// for (const num of numbers) {
//   if (num % 2 === 0) {
//     evens.push(num);
//   }
// }

// console.log(" the even number is [" + evens + "]");

// function isPrime(num) { 

//   if (num <= 1) return false; 

//   for (let i = 2; i <= Math.sqrt(num); i++) { 

//     if (num % i === 0) return false; 

//   } 

//   return true; 

// } 
  //loop

  // for(var i = 1; i<=10; i++){
  //   console.log(i);

  // }
  // console.log(i);

  // let i = 10;
  // while(i--){
  //   console.log(i);
  // }
  // javascript program that displays the largest integer among two integers
// var num1 = 32;
// var num2 = 32;

// if(num1>num2){
//   console.log("num1 is largest number");
// }else if(num1 < num2){
//   console.log("Num2 is a largest number");
// }else{
//   console.log("thay equal");
  
// }

//Sort Numbers
// var arr = [1,2,-1,0];

// var sort = arr.sort().reverse();
// console.log(sort);

// var larg = [-5, -2, -6, 0, -1];



// console.log(Math.max(...larg));


/* 
for(let i = 0; i <= 15; i++){
  if(i % 2 ===0){
    console.log(i +  "  even number");
  }else{
    console.log(i +  "  odd number");
  }
  
} */


/*   function addNum(a,b) {
    return a*b;
    
  }
  var a = addNum(40,5);
  console.log(a); */

/*   function user(name, age,loc){
    return{
      name:name,
      age: age,
      loc:loc
    }
  }
  var person = user("Himel" , 26, "Dhaka");
  console.log("your name " + person.name +" and your age " + person.age); */

/*   function user(name, age, loc) {
    return {
      name: name,
      age: age,
      loc: loc
    };
  }
  
  const users = [];
  
  users.push(user("Himel", 26, "Dhaka"));
  users.push(user("Sadia", 30, "Chittagong"));
  
  users.forEach(u => {
    console.log(`নাম: ${u.name}, বয়স: ${u.age}, লোকেশন: ${u.loc}`);
  }); */

 /*  const person = {
    name: "John",
   age: 30,
    city: "New York"
   };
  
   Build a Text
 let text = "";
  for (let x in person) {
    text += person[x] + " ";
  };

  console.log(text); */

// call back function

/* function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

function sayBye() {
  console.log("Hi Abid!");
}

greet("Rahim", sayBye); */

// Synchronous

/* function greet(name){
  console.log("Hello " +  name);
  
}

function sayBey(){
  console.log("Good Bye");
  
}

greet("Himel");
sayBey(); */


/* Asynchronous 

function greet(name, callback) {
  console.log("Hello " + name);
  setTimeout(callback, 2000); // 2 seconds after calling callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Rahim", sayBye); */


/* function sample (a, b, cb) {
  var c = a + b
  var d = a - b
  var result = cb(c,d)
  return result
}

function sum(a, b) {
  return a + b
}

var result = sample(12, 40, sum)
console.log(result); */


/* const fruits = ["apple", "Banana", "mango"];

fruits.forEach((element, index) => {

  console.log(index + ":" + element);
  
}); */


/* const users = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

users.forEach(user => {
  console.log(`${user.name} is ${user.age} years old`);
  

}) */

 // Closure

 /*function say(){
  var msg = "Hello How are you today"

  /* function sayHello(){
    console.log(msg); */

    /*return function(){
      console.log(msg);
    

  }
  //sayHello()   
  
 }

 var Option = say();

 Option(); */ 




/*  const arr = [3, 1, 4, 2];

 arr.sort()
 console.log(arr); */

/*  const arr = ['apple', 'banana'];

var arrToUp = String.prototype.toUpperCase.apply(arr).split(",");

 console.log(arrToUp); */


// Destructuring
 
/* let person = {
  name : "Himel",
  email : "himalhossin@yahoo.com" ,
  adderss: {
    city: "Dhaka",
    country: "Bangladesh"
  }
}

let {name, email , adderss : { city, country }} = person;

console.log(name, email, city, country);
 */

// object to array

/* let obj = {
  a: 10,
  b: 20
}
 console.log(Object.entries(obj)); */
 
//  array to object

/* let objArr = [
  ['a', 10],
  ['b' , 20]
]
 console.log(Object.fromEntries(objArr)); */

/*  try {
  let result = 10 / 0;
  let name = undefined;
  console.log(name.toUpperCase()); // 
} catch (err) {
  console.log("Error caught:", err.message);
}
 */
/* try {
  let age = -5;
  if (age < 0) {
    throw new Error("Age can't be negative");
  }
} catch (e) {
  console.log(e.message);
}
 */
 
/* 
async function fetchData() {
  try {
    let res = await fetch("https://api.example.com/data");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Failed to fetch:", err.message);
  }
} */

/* 
  function submitForm(data) {
    try {
      if (!data.name) throw new Error("Name is required");
      if (!data.email.includes("@")) throw new Error("Invalid email");
      console.log("Form submitted!");
    } catch (err) {
      console.warn("Form error:", err.message);
    }
  } */

    // Data received! 1 sec

/*     function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

fetchData((data) => {
  console.log(data); // "Data received!"
}); */

// Callback older system

/* function doSomethingAsync(callback) {
  console.log("Starting task...");

  setTimeout(() => {
    console.log("Task complete!");
    callback("Here is your result");
  }, 2000); 
}

// Call the function with a callback
doSomethingAsync(function(result) {
  console.log("Callback received:", result);
});
 */

// Promise

/* function getIphone(IsPassed){
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(IsPassed){
        resolve("I have Iphone")
        
      }else{
        reject(new Error("You Faild"))
      }
      
    }, 2000);
  })
  return promise
}

getIphone(false).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err)
}) */

/*   const arr = [1, "Himel", "Dhaka"]
    const del = delete arr[2]
    const result = arr.length
    console.log(result); */  // output =  3

/*     function getDate(){
      a = 500;
      console.log(a);
      
    }

    getDate()
    let a   

    output : ReferenceError: Cannot access 'a' before initialization */

/*     async function quiz1() {
  return "Done!";
}

const result = quiz1();
console.log(result); */

/* async function getValue() {
  return 42;
}

async function main() {
  const val = await getValue();
  console.log(val);
}

main(); */
    
/* function test(){
  console.log(arguments);
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
    
  }
  
}
test();
test(10,20,30);
 */

/* function time(seconds){
  let promise = new Promise((resolve) => {
    setTimeout(resolve,seconds)

  })
  return promise;
}
 */
/* const time = (seconds) => new Promise((resolve) => setTimeout(resolve,seconds));

time(1000).then(() =>{
  console.log(" 1 second");
  
}) */

// Simple GET Request

/* fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => 

    response.json()

  ).then(data => 

    console.log(data)
    ).catch(error => 

    console.error("Custom Error: Something went wrong")
    ); */

//POST Request

/*     fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'My Title',
    body: 'This is the content',
    id : 1,
    userId: 2
  })
})
  .then(response => response.json())
  .then(data => console.log('Created:', data))
  .catch(error => console.error('Error:', error));
 */

/*   console.log(num);
   num = 100; */


/*    let run = 5;
   if(run >= 5){
    console.log("coclate");
    
   }else{
    console.log("vuri");
    
   } */

/*     let result = 80;
    if(result > 80){
      console.log("bike");
      
    }else{
      console.log(" No Bike");
      
    }
 */
  
/* 
    let time = 5;
    if(time < 9){
      console.log("Show Movie");
      

    }else{
      console.log("Sleep");
      
    } */


   /*    let temp = 40

      if( temp >= 30){
        console.log("AC ");
        
      }else{
        console.log("sleep");
        
      } */

  /*   const profile = { 
    name: "Rahim", 
    age: 28, 
    city: "Dhaka" 
  };

  for (const key in profile) {
   const value = profile[key];
   console.log(key, value);
  } */

function length(str){
  let size = str.length
  console.log(size , str);
  
}

length("bangladesh")