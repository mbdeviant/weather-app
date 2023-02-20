import getWeatherData from "./data-fetch";
import updateUI from "./UI";

const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    console.log(searchBar.value);
    const weatherPromise = getWeatherData(searchBar.value); //check for empty input & 404
    console.log(updateUI(weatherPromise));
});
// const weatherPromise = getWeatherData("talin");
//404 not found
// weatherPromise.then(function (data) {
//     console.log(data.desc);
// });

//default unit is kelvin, display it as celcius first
// make it convertable to fahrenheit too.
