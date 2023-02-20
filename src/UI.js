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

    const cityTitle = document.createElement("h2");
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

    container.appendChild(cityTitle);
    container.appendChild(desc);
    container.appendChild(temp);
    container.appendChild(tempFeelsLike);
    container.appendChild(humidity);
    container.appendChild(wind);

    return container;
}
