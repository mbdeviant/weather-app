import getWeatherData from "./data-fetch";
import updateUI from "./UI";

const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

document.addEventListener("DOMContentLoaded", () => {
  const initialCity = getWeatherData("Rize");
  updateUI(initialCity);
});

searchButton.addEventListener("click", () => {
  const weatherPromise = getWeatherData(searchBar.value);
  updateUI(weatherPromise);
});

searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const weatherPromise = getWeatherData(searchBar.value);
    updateUI(weatherPromise);
  }
});
