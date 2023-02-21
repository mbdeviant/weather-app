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

    const c = "°C";
    const f = "°F";
    const tempToggleButton = document.createElement("button");
    tempToggleButton.classList.add("temp-toggle-button");
    tempToggleButton.textContent = `${c} / ${f} `;

    //create a seperate function to deal with temp conversion
    //you will modify the data coming to promise, default C
    //highlight the current by adding removing class to it
    //in button event listener

    const desc = document.createElement("p");
    desc.classList.add("capitalize");
    const temp = document.createElement("p");
    const tempFeelsLike = document.createElement("p");
    const humidity = document.createElement("p");
    const wind = document.createElement("p");

    cityTitle.textContent = `${data.city}`;
    desc.textContent = `${data.desc}`;
    temp.textContent = ` Temperature: ${data.temp.toFixed()}`;
    tempFeelsLike.textContent = `Feels like: ${data.temp_feels_like.toFixed()}`;
    humidity.textContent = `Humidity: ${data.humidity}%`;
    wind.textContent = `Wind: ${data.wind}`;

    cardHeader.appendChild(cityTitle);
    cardHeader.appendChild(tempToggleButton);
    container.appendChild(cardHeader);
    container.appendChild(desc);
    container.appendChild(temp);
    container.appendChild(tempFeelsLike);
    container.appendChild(humidity);
    container.appendChild(wind);

    return container;
}
