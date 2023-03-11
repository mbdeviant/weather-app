export default async function updateUI(promise) {
    const weatherContainer = document.getElementById("weather-container");
    const searchBar = document.getElementById("searchbar");

    promise.then(function (weatherData) {
        if (!weatherData) return;

        if (weatherContainer.querySelector("#weather-card")) {
            const currentCard = weatherContainer.querySelector("#weather-card");
            weatherContainer.removeChild(currentCard);
        }
        const weatherElement = createWeatherCard(weatherData);
        weatherContainer.appendChild(weatherElement);
        searchBar.value = "";
    });
}

function createWeatherCard(data) {
    const container = document.createElement("div");
    container.setAttribute("id", "weather-card");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("weather-card-header");
    const cityTitle = document.createElement("h2");

    const celcius = document.createElement("p");
    celcius.textContent = "°C";
    celcius.classList.add("active");
    const brace = document.createElement("p");
    brace.textContent = "/";
    const fahrenheit = document.createElement("p");
    fahrenheit.textContent = "°F";

    const tempToggle = document.createElement("div");
    tempToggle.classList.add("temp-toggle");
    tempToggle.appendChild(celcius);
    tempToggle.appendChild(brace);
    tempToggle.appendChild(fahrenheit);

    tempToggle.addEventListener("click", () => {
        if (celcius.classList.contains("active")) {
            celcius.classList.remove("active");
            fahrenheit.classList.add("active");

            const tempF = convertToFahrenheit(data.temp.toFixed());
            temp.textContent = ` Temperature: ${tempF}°F`;
            const tempFeelslikeF = convertToFahrenheit(
                data.temp_feels_like.toFixed()
            );
            tempFeelsLike.textContent = `Feels like: ${tempFeelslikeF}°F`;
        } else if (fahrenheit.classList.contains("active")) {
            fahrenheit.classList.remove("active");
            celcius.classList.add("active");
            temp.textContent = `Temperature: ${data.temp.toFixed()}°C`;
            tempFeelsLike.textContent = `Feels like: ${data.temp_feels_like.toFixed()}°C`;
        }
    });

    const desc = document.createElement("p");
    desc.classList.add("capitalize");
    const temp = document.createElement("p");

    const tempFeelsLike = document.createElement("p");
    tempFeelsLike.setAttribute("id", "temp-feels-like");
    const humidity = document.createElement("p");
    const wind = document.createElement("p");

    cityTitle.textContent = `${data.city}`;
    desc.textContent = `${data.desc}`;
    temp.textContent = ` Temperature: ${data.temp.toFixed()}°C`;
    tempFeelsLike.textContent = `Feels like: ${data.temp_feels_like.toFixed()}°C`;
    humidity.textContent = `Humidity: ${data.humidity}%`;
    wind.textContent = `Wind: ${data.wind} m/s`;

    setBackground(data.desc);

    cardHeader.appendChild(cityTitle);
    cardHeader.appendChild(tempToggle);
    container.appendChild(cardHeader);
    container.appendChild(desc);
    container.appendChild(temp);
    container.appendChild(tempFeelsLike);
    container.appendChild(humidity);
    container.appendChild(wind);

    return container;
}

function convertToFahrenheit(temp) {
    return (temp * 9) / 5 + 32;
}

function setBackground(weather) {
    if (weather === "clear sky")
        document.body.style.backgroundImage = "url('assets/clearsky.jpg')";
    if (weather.includes("clouds"))
        document.body.style.backgroundImage = "url('assets/clouds.jpg')";
    if (weather.includes("rain"))
        document.body.style.backgroundImage = "url('assets/rain.jpg')";
    if (weather.includes("snow"))
        document.body.style.backgroundImage = "url('assets/snow.jpg')";
    if (weather === "mist")
        document.body.style.backgroundImage = "url('assets/mist.jpg')";
    if (weather === "thunderstorm")
        document.body.style.backgroundImage = "url('assets/thunderstorm.jpg')";
}

export function displayErrorMessage() {
    const searchBar = document.getElementById("searchbar");
    const errorMessage = document.getElementById("error-message");

    if (searchBar.value.trim() === "") {
        errorMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        errorMessage.textContent = "Please enter a city name!";
    } else {
        errorMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        errorMessage.textContent = "Location was not found";
    }

    function clearErrorMessages() {
        errorMessage.textContent = "";
        errorMessage.style.backgroundColor = "transparent";
        console.clear();
    }
    setTimeout(clearErrorMessages, 2500);
}
