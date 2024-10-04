// WEATHER DATA USING API
// html variables
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const town = document.querySelector("#town");
const graphic = document.querySelector("#graphic");
// api variables
const key = "da3fbbafa71ee39f7376397f62170a04"
const lat = "7.37599198723924"
const long = "3.9373109397276584"
const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`

async function apiFetch() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

//   Display results
function displayResults(data) {
    console.log("hello world");
    town.innerHTML = data.name
    description.innerHTML = data.weather[0].description
    temperature.innerHTML = `${data.main.temp}&deg;C`
    graphic.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    graphic.setAttribute("alt", "weather")
}
  
  apiFetch();