// WEATHER DATA USING API
// html variables
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const city = document.querySelector("#city");
const weatherIcon = document.querySelector("#weatherIcon");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const forecastContainer = document.querySelector("#forecast");

// api variables
const key = "da3fbbafa71ee39f7376397f62170a04"
const lat = "7.37599198723924"
const long = "3.9373109397276584"
const cnt = "3"
const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&cnt=${cnt}&appid=${key}`

async function apiFetch() {
    try {
      const response = await fetch(weatherUrl);
      if (response.ok) {
        const data = await response.json();
        displayWeather(data);
        console.log(data);
      } else {
          throw Error(await response.text());
      }

      const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            console.log(forecastData);
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }

    } catch (error) {
        console.log(error);
    }
  }

//   Display weather
function displayWeather(data) {
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute("alt", "weatherIcon")
    city.innerHTML = data.name
    temperature.innerHTML = `${data.main.temp}&deg;C`
    description.innerHTML = data.weather[0].description
    high.innerHTML = `High: ${data.main.temp_max}&deg;C`
    low.innerHTML = `Low: ${data.main.temp_min}&deg;C`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    sunrise.innerHTML = `Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    sunset.innerHTML = `Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

// Display forecast
function displayForecast(data) {
  for (let i = 0; i < 3; i++) {
      const date = new Date(data.list[i].dt * 1000);
      const dayName = i === 0 ? 'Today' : date.toLocaleDateString(undefined, { weekday: 'long' });

      if (i === 0) {
          today.innerHTML = `Today: ${Math.round(data.list[i].temp.day)}°C`;
      } else if (i === 1) {
          day1.innerHTML = `${dayName}: ${Math.round(data.list[i].temp.day)}°C`;
      } else if (i === 2) {
          day2.innerHTML = `${dayName}: ${Math.round(data.list[i].temp.day)}°C`;
      }
  }
}


// Call the API fetch function
apiFetch();