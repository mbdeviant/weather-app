import getWeatherData from "./data-fetch";
import updateUI from "./UI";

const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    console.log(searchBar.value);
    const weatherPromise = getWeatherData(searchBar.value); //check for empty input & 404
    updateUI(weatherPromise);
    searchBar.value = "";
});

searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const weatherPromise = getWeatherData(searchBar.value); //check for empty input & 404
        updateUI(weatherPromise);
        searchBar.value = "";
    }
});
