
# Weather API Application

## Overview

This is a simple weather application that retrieves and displays the current weather conditions for a given city using the OpenWeatherMap API. The project demonstrates asynchronous JavaScript concepts and dynamic DOM manipulation to render weather data in real-time.

## Features

- Input a city name to fetch current weather details.
- Displays city name, temperature (in Celsius), humidity, weather description, and an appropriate weather emoji.
- Error handling for invalid API responses or missing input.

![image]("![image](https://github.com/user-attachments/assets/c5fbfe68-52de-4830-8a71-f4be61fa7193)
"))

## Technologies Used

- **HTML**: For structuring the application.
- **CSS**: For styling the application.
- **JavaScript**: For logic and DOM manipulation.
- **OpenWeatherMap API**: To fetch real-time weather data.

## Project Structure

```
project-folder/
|-- index.html          # The main HTML file.
|-- style.css           # The CSS file for styling.
|-- callbacks.js        # JavaScript file containing logic.
|-- README.md           # Documentation file (this file).
```

## Installation

1. Clone the repository or download the project files.
2. Open the `index.html` file in any modern browser.

## Usage

1. Enter a city name in the input field.
2. Click the "Get Weather" button.
3. The weather details, including temperature, humidity, description, and an emoji representing the weather condition, will be displayed below.
4. If an error occurs (e.g., invalid city name or network issue), an error message will be displayed.

## Code Explanation

### 1. **HTML**

The form includes an input field for entering the city name and a button to submit the query:

```html
<form class="weatherForm">
    <input type="text" placeholder="enter city" class="cityInput">
    <button type="submit">Get weather</button>
</form>
<div class="card" style="display: none;"></div>
```

### 2. **CSS**

Styling for the form, card, and weather data display:

```css
.weatherForm {
    margin: 20px;
}
.card {
    background: linear-gradient(180deg, rgba(0, 157, 255, 0.322), rgba(255, 166, 0, 0.628));
    padding: 50px;
    border-radius: 1rem;
}
```

### 3. **JavaScript**

#### Fetching Weather Data:

The `getWeather` function uses the Fetch API to retrieve weather data from OpenWeatherMap:

```javascript
async function getWeather(cityname) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`;
    const response = await fetch(apiurl);
    if (!response.ok) {
        displayError("API error");
    } else {
        return await response.json();
    }
}
```

#### Displaying Weather Data:

The `displayWeather` function dynamically creates and appends DOM elements for displaying city, temperature, humidity, description, and a weather emoji:

```javascript
function displayWeather(data) {
    const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;
    // Manipulate the DOM to display weather data
}
```

#### Weather Emoji Mapping:

Weather condition codes from the API are mapped to corresponding emojis:

```javascript
function getWeatherEmoji(id) {
    switch (true) {
        case (id >= 200 && id < 300): return "⛈️";
        case (id >= 300 && id < 400): return "🌧️";
        case (id >= 800): return "☀️";
        default: return "❓";
    }
}
```

## API Key

This project uses the OpenWeatherMap API. Replace the placeholder `apikey` with your actual API key:

```javascript
const apikey = "your_api_key_here";
```

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the API.
