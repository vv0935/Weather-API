const weatherForm = document.querySelector(".weatherForm");
const cityname = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "6c30a7152a8484a1bf576304df72830b";

async function getWeather(cityname) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`;
    const response = await fetch(apiurl);
    if (!response.ok) {
        console.error("api error");
        displayError("api error");
    }
    else {
        return await response.json();

    }

}

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    city = cityname.value;
    if (city) {
        try {
            const weatherData = await getWeather(city);
            console.log(weatherData);
            displayWeather(weatherData);
        }
        catch (err) {
            console.error(err);
            displayError(err);
        }
    }
    else {
        displayError("please enter a value of city");
    }

})



function displayWeather(data) {
    // card.style.display="flex"
    // document.querySelector(".cityDisplay").innerText=data.name;
    // // document.querySelector(".tempDisplay").innerText=data.main['temp'];
    // const temp=data.main['temp'];
    // document.querySelector(".tempDisplay").innerText=celsius(temp);
    // document.querySelector(".humidityDisplay").innerText=data.main['humidity'];
    // document.querySelector(".descDisplay").innerText=data.weather[0]['description']
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description, id }]
    } = data;
    card.textContent = "";
    card.style.display = "flex";
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    const errorDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}ºC`;
    humidityDisplay.textContent = `humidity: ${humidity}%`;
    descDisplay.textContent = `description: ${description}`;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji")

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(id) {
    switch (true) {
        case (id >= 200 && id < 300):
            return "⛈️";
        case (id >= 300 && id < 400):
            return "🌧️";
        case (id >= 500 && id < 600):
            return "🌧️";
        case (id >= 600 && id < 700):
            return "❄️";
        case (id >= 700 && id < 800):
            return "🌫️";
        case (id == 800):
            return "☀️";
        case (id >= 801 && id<810):
            return "☁️";
        default:
            return "❓";

    }
}

function displayError(msg) {
    const errordis = document.createElement("p");
    errordis.textContent = msg;
    errordis.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex"
    card.appendChild(errordis);

}












