import getWeatherData from "./data-fetch";

const weatherPromimse = getWeatherData("madrid");

weatherPromimse.then(function (data) {
    console.log(data.desc);
});
