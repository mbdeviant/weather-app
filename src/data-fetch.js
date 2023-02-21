import { HIDDEN_ARTIFACT } from "./biggest-secret-in-the-world";

export default async function getWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${HIDDEN_ARTIFACT}`;

    try {
        const response = await fetch(apiUrl);
        // if (!response.ok) {
        //     throw new Error(`Error fetching the data :${response.status}`);
        // }
        const data = await response.json();
        const weather = {
            city: data.name,
            desc: data.weather[0].description,
            temp: data.main.temp,
            temp_feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            wind: data.wind.speed,
        };
        return weather;
    } catch (error) {
        return error;
    }
}
