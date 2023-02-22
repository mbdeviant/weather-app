export default async function updateUI(promise) {
    const weatherContainer = document.getElementById("weather-container");
    console.log(promise);
    promise.then(function (weatherData) {
        console.log(
            weatherData.city,
            weatherData.desc,
            weatherData.temp.toFixed(),
            weatherData.temp_feels_like.toFixed(),
            weatherData.wind,
            weatherData.humidity
        );
        if (weatherContainer.querySelector("#weather-card")) {
            const currentCard = weatherContainer.querySelector("#weather-card");
            weatherContainer.removeChild(currentCard);
        }
        const weatherElement = createWeatherCard(weatherData);
        weatherContainer.appendChild(weatherElement);
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
        celcius.classList.contains("active")
            ? celcius.classList.remove("active")
            : celcius.classList.add("active");
        fahrenheit.classList.contains("active")
            ? fahrenheit.classList.remove("active")
            : fahrenheit.classList.add("active");
    });

    //create a seperate function to deal with temp conversion
    //you will modify the data coming to promise, default C
    //highlight the current by adding removing class to it
    //in button event listener

    const desc = document.createElement("p");
    desc.classList.add("capitalize");
    const temp = document.createElement("p");
    temp.setAttribute("id", "temp");
    const tempFeelsLike = document.createElement("p");
    tempFeelsLike.setAttribute("id", "temp-feels-like");
    const humidity = document.createElement("p");
    const wind = document.createElement("p");

    cityTitle.textContent = `${data.city}`;
    desc.textContent = `${data.desc}`;
    temp.textContent = ` Temperature: ${data.temp.toFixed()}`;
    tempFeelsLike.textContent = `Feels like: ${data.temp_feels_like.toFixed()}`;
    humidity.textContent = `Humidity: ${data.humidity}%`;
    wind.textContent = `Wind: ${data.wind}`;

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

function toggleTempUnit() {}
