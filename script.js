// API Lists
// 1. https://random.dog/woof.json
// 2. https://cataas.com/cat
// 3. https://thispersondoesnotexist.com/
// 4. https://goweather.herokuapp.com/weather/toronto
// 5. http://universities.hipolabs.com/search?name=university&country=bangladesh
// 6. https://api.kanye.rest/

// Get Random Dog Image
async function getRandomDogImage() {
  const url = "https://random.dog/woof.json";
  const response = await fetch(url);
  const data = await response.json();

  const isVideo = data.url.endsWith(".mp4");

  if (isVideo) {
    document.getElementById("dogVideo").src = data.url;
    document.getElementById("dogImage").src = "";
  } else {
    document.getElementById("dogImage").src = data.url;
    document.getElementById("dogVideo").src = "";
  }
}

async function getRandomCatImage() {
  const data = "https://cataas.com/cat?" + Math.random() * 1000;
  document.getElementById("catImage").src = data;
}

async function getPersonDoesntExist() {
  const data = "https://thispersondoesnotexist.com/";
  document.getElementById("personImage").src = data;
}

async function kanyeQuote() {
  const url = "https://api.kanye.rest/";
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById("kanyeQuote").innerText = data.quote;
}

async function fetchUniversities() {
  const country = document.getElementById("country").value;
  const url = `http://universities.hipolabs.com/search?name=university&country=${country}`;
  console.log(country);
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById(
    "universityCount"
  ).innerText = `Total Universities of ${country} is ${data.length}`;
  const list = document.getElementById("universityList");
  list.innerHTML = data
    .map(
      (university) => `<li class="list-group-item my-1">${university.name}</li>`
    )
    .join("");
}

async function fetchWeather() {
  try {
    const location = document.getElementById("location").value;
    const url = `https://goweather.herokuapp.com/weather/${location}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Failed to fetch Weather Data");
    }
    
    const data = await response.json();
    console.log(data);

    if (data.temperature) {
        document.getElementById('weatherData').innerHTML = `
        <div class="alert alert-success">
        <h2>Weather in ${location}</h2>
        <p>Temperature <strong>${data.temperature}</strong></p>
        <p>Description <strong>${data.description}</strong></p>
    </div>
        `
    }
    else {
        document.getElementById('weatherData').innerHTML = `
        <div class="alert alert-danger">
        <h2>No Weather data found in ${location}</h2>
    </div>
        `
    }
  } catch (err) {
    document.getElementById('weatherData').innerHTML = `
        <div class="alert alert-danger">
        <h2>Error fetching weather data</h2>
        <p>Please try again later</p>
        <p>${err.message}</p>
    </div>
        `
  }
}

setInterval(getRandomDogImage, 2000);
setInterval(getRandomCatImage, 2000);
setInterval(getPersonDoesntExist, 2000);
setInterval(kanyeQuote, 2000);

window.onload = function () {
  getRandomDogImage();
  getRandomCatImage();
  getPersonDoesntExist();
  kanyeQuote();
};