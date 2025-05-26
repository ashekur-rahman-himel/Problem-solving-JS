const orderFood = new Promise((resolve, reject) => {
const foodReady = false;

if (foodReady) {
resolve("Food is ready!");
} else {
reject("Baap er hotel bondo.");
}
});

orderFood
    .then((message) => {
    console.log(message);
})
    .catch((error) => {
    console.log(error);
});


