

/* const friends = [4, 5, 87, 9];
const sonkha = [...friends, 9999];
console.log(sonkha); */
/* 
const set = new Set([1, 1, 2, 2, 3, 3]);


console.log(set.size);


 */

/* const players = [50, 57, 60, 71, 55, 59];
const selected = players.find(player => player > 60);
console.log(selected); */

/* every method 

const scores = [60, 70, 45, 80, 90];
const allPassed = scores.every(score => score >= 50);
console.log(allPassed); */

/* const products = [
{id: 1, name: 'lenovo', price: 65000},
{id: 2, name: 'dell', price: 45000},
{id: 3, name: 'hp', price: 40000},
{id: 4, name: 'mac', price: 165000},
];
const total = products.reduce((accumolator, current) => accumolator + current.price, 0);
console.log(total); */

/* 
const movies = ['Jaws', 'Rocky', 'Alien', 'Avatar', 'Coco', 'Up', 'It'];
const removed = movies.splice(2,3);
console.log(removed);
console.log(movies); */


function takeOrder (customer, callback){
    console.log(`Take Order From ${customer}`);
    callback(customer)
};
function processOrder (customer, callback ){
    console.log(`Processing order for ${customer}`);
   
    setTimeout(()=>{
        console.log('Coocking done!');
        console.log(`Processed order for ${customer}` );
        callback(customer)
    }, 3000); 
      
}


function completeOrder (customer){
    console.log(`Completed order for ${customer}`);
};
takeOrder ('customer 1', (customer)=>{
    processOrder (customer, ()=>{
        completeOrder(customer); 
    })
})







