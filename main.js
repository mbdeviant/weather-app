/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateUI),
/* harmony export */   "displayErrorMessage": () => (/* binding */ displayErrorMessage)
/* harmony export */ });
async function updateUI(promise) {
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
    wind.textContent = `Wind: ${data.wind}`;

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
        document.body.style.backgroundImage =
            "url('../dist/assets/clearsky.jpg')";
    if (weather.includes("clouds"))
        document.body.style.backgroundImage =
            "url('../dist/assets/clouds.jpg')";
    if (weather.includes("rain"))
        document.body.style.backgroundImage = "url('../dist/assets/rain.jpg')";
    if (weather.includes("snow"))
        document.body.style.backgroundImage = "url('../dist/assets/snow.jpg')";
    if (weather === "mist")
        document.body.style.backgroundImage = "url('../dist/assets/mist.jpg')";
    if (weather === "thunderstorm")
        document.body.style.backgroundImage =
            "url('../dist/assets/thunderstorm.jpg')";
}

function displayErrorMessage() {
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


/***/ }),

/***/ "./src/biggest-secret-in-the-world.js":
/*!********************************************!*\
  !*** ./src/biggest-secret-in-the-world.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HIDDEN_ARTIFACT": () => (/* binding */ HIDDEN_ARTIFACT)
/* harmony export */ });
const HIDDEN_ARTIFACT = "a97f91dc3154744c7757bda7928c308f";


/***/ }),

/***/ "./src/data-fetch.js":
/*!***************************!*\
  !*** ./src/data-fetch.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _biggest_secret_in_the_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biggest-secret-in-the-world */ "./src/biggest-secret-in-the-world.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");



async function getWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${_biggest_secret_in_the_world__WEBPACK_IMPORTED_MODULE_0__.HIDDEN_ARTIFACT}`;
    const response = await fetch(apiUrl, { mode: "cors" });

    try {
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
    } catch (err) {
        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.displayErrorMessage)();
        return;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-fetch */ "./src/data-fetch.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");



const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("search-button");

document.addEventListener("DOMContentLoaded", () => {
    const initialCity = (0,_data_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])("izmir");
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])(initialCity);
});

searchButton.addEventListener("click", () => {
    const weatherPromise = (0,_data_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(searchBar.value);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherPromise);
});

searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const weatherPromise = (0,_data_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(searchBar.value);
        (0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherPromise);
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxNQUFNO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxlQUFlO0FBQ3RFLFVBQVU7QUFDVjtBQUNBO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRSx1REFBdUQsK0JBQStCO0FBQ3RGO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekMsMEJBQTBCLFVBQVU7QUFDcEMsd0NBQXdDLG9CQUFvQjtBQUM1RCwrQ0FBK0MsK0JBQStCO0FBQzlFLHdDQUF3QyxjQUFjO0FBQ3RELGdDQUFnQyxVQUFVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaElPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5RDtBQUNyQjtBQUMzQztBQUNlO0FBQ2Ysd0VBQXdFLFNBQVMsc0JBQXNCLHlFQUFlLENBQUM7QUFDdkgsMkNBQTJDLGNBQWM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFFBQVEsd0RBQW1CO0FBQzNCO0FBQ0E7QUFDQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNkO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQWM7QUFDdEMsSUFBSSwrQ0FBUTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFjO0FBQ3pDLElBQUksK0NBQVE7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFjO0FBQzdDLFFBQVEsK0NBQVE7QUFDaEI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYmlnZ2VzdC1zZWNyZXQtaW4tdGhlLXdvcmxkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEtZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVSShwcm9taXNlKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xyXG5cclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcclxuICAgICAgICBpZiAoIXdlYXRoZXJEYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh3ZWF0aGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlci1jYXJkXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gd2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItY2FyZFwiKTtcclxuICAgICAgICAgICAgd2VhdGhlckNvbnRhaW5lci5yZW1vdmVDaGlsZChjdXJyZW50Q2FyZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJFbGVtZW50ID0gY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckRhdGEpO1xyXG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckVsZW1lbnQpO1xyXG4gICAgICAgIHNlYXJjaEJhci52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNhcmQoZGF0YSkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItY2FyZFwiKTtcclxuXHJcbiAgICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItY2FyZC1oZWFkZXJcIik7XHJcbiAgICBjb25zdCBjaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblxyXG4gICAgY29uc3QgY2VsY2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2VsY2l1cy50ZXh0Q29udGVudCA9IFwiwrBDXCI7XHJcbiAgICBjZWxjaXVzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBjb25zdCBicmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYnJhY2UudGV4dENvbnRlbnQgPSBcIi9cIjtcclxuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGZhaHJlbmhlaXQudGV4dENvbnRlbnQgPSBcIsKwRlwiO1xyXG5cclxuICAgIGNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGVtcFRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwidGVtcC10b2dnbGVcIik7XHJcbiAgICB0ZW1wVG9nZ2xlLmFwcGVuZENoaWxkKGNlbGNpdXMpO1xyXG4gICAgdGVtcFRvZ2dsZS5hcHBlbmRDaGlsZChicmFjZSk7XHJcbiAgICB0ZW1wVG9nZ2xlLmFwcGVuZENoaWxkKGZhaHJlbmhlaXQpO1xyXG5cclxuICAgIHRlbXBUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoY2VsY2l1cy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgY2VsY2l1cy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wRiA9IGNvbnZlcnRUb0ZhaHJlbmhlaXQoZGF0YS50ZW1wLnRvRml4ZWQoKSk7XHJcbiAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgIFRlbXBlcmF0dXJlOiAke3RlbXBGfcKwRmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBGZWVsc2xpa2VGID0gY29udmVydFRvRmFocmVuaGVpdChcclxuICAgICAgICAgICAgICAgIGRhdGEudGVtcF9mZWVsc19saWtlLnRvRml4ZWQoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZW1wRmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7dGVtcEZlZWxzbGlrZUZ9wrBGYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZhaHJlbmhlaXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgY2VsY2l1cy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcC50b0ZpeGVkKCl9wrBDYDtcclxuICAgICAgICAgICAgdGVtcEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2RhdGEudGVtcF9mZWVsc19saWtlLnRvRml4ZWQoKX3CsENgO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2MuY2xhc3NMaXN0LmFkZChcImNhcGl0YWxpemVcIik7XHJcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgY29uc3QgdGVtcEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGVtcEZlZWxzTGlrZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXAtZmVlbHMtbGlrZVwiKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgY2l0eVRpdGxlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jaXR5fWA7XHJcbiAgICBkZXNjLnRleHRDb250ZW50ID0gYCR7ZGF0YS5kZXNjfWA7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXAudG9GaXhlZCgpfcKwQ2A7XHJcbiAgICB0ZW1wRmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7ZGF0YS50ZW1wX2ZlZWxzX2xpa2UudG9GaXhlZCgpfcKwQ2A7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fSVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke2RhdGEud2luZH1gO1xyXG5cclxuICAgIHNldEJhY2tncm91bmQoZGF0YS5kZXNjKTtcclxuXHJcbiAgICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKGNpdHlUaXRsZSk7XHJcbiAgICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKHRlbXBUb2dnbGUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRIZWFkZXIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBGZWVsc0xpa2UpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9GYWhyZW5oZWl0KHRlbXApIHtcclxuICAgIHJldHVybiAodGVtcCAqIDkpIC8gNSArIDMyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKHdlYXRoZXIpIHtcclxuICAgIGlmICh3ZWF0aGVyID09PSBcImNsZWFyIHNreVwiKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4uL2Rpc3QvYXNzZXRzL2NsZWFyc2t5LmpwZycpXCI7XHJcbiAgICBpZiAod2VhdGhlci5pbmNsdWRlcyhcImNsb3Vkc1wiKSlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuLi9kaXN0L2Fzc2V0cy9jbG91ZHMuanBnJylcIjtcclxuICAgIGlmICh3ZWF0aGVyLmluY2x1ZGVzKFwicmFpblwiKSlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9kaXN0L2Fzc2V0cy9yYWluLmpwZycpXCI7XHJcbiAgICBpZiAod2VhdGhlci5pbmNsdWRlcyhcInNub3dcIikpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vZGlzdC9hc3NldHMvc25vdy5qcGcnKVwiO1xyXG4gICAgaWYgKHdlYXRoZXIgPT09IFwibWlzdFwiKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL2Rpc3QvYXNzZXRzL21pc3QuanBnJylcIjtcclxuICAgIGlmICh3ZWF0aGVyID09PSBcInRodW5kZXJzdG9ybVwiKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID1cclxuICAgICAgICAgICAgXCJ1cmwoJy4uL2Rpc3QvYXNzZXRzL3RodW5kZXJzdG9ybS5qcGcnKVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yTWVzc2FnZSgpIHtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1tZXNzYWdlXCIpO1xyXG5cclxuICAgIGlmIChzZWFyY2hCYXIudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjcpXCI7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgYSBjaXR5IG5hbWUhXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC43KVwiO1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gd2FzIG5vdCBmb3VuZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyRXJyb3JNZXNzYWdlcygpIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChjbGVhckVycm9yTWVzc2FnZXMsIDI1MDApO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBISURERU5fQVJUSUZBQ1QgPSBcImE5N2Y5MWRjMzE1NDc0NGM3NzU3YmRhNzkyOGMzMDhmXCI7XHJcbiIsImltcG9ydCB7IEhJRERFTl9BUlRJRkFDVCB9IGZyb20gXCIuL2JpZ2dlc3Qtc2VjcmV0LWluLXRoZS13b3JsZFwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5RXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XHJcbiAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz1tZXRyaWMmQVBQSUQ9JHtISURERU5fQVJUSUZBQ1R9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyID0ge1xyXG4gICAgICAgICAgICBjaXR5OiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXHJcbiAgICAgICAgICAgIHRlbXBfZmVlbHNfbGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXHJcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB3ZWF0aGVyO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tIFwiLi9kYXRhLWZldGNoXCI7XHJcbmltcG9ydCB1cGRhdGVVSSBmcm9tIFwiLi9VSVwiO1xyXG5cclxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hiYXJcIik7XHJcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ1dHRvblwiKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxDaXR5ID0gZ2V0V2VhdGhlckRhdGEoXCJpem1pclwiKTtcclxuICAgIHVwZGF0ZVVJKGluaXRpYWxDaXR5KTtcclxufSk7XHJcblxyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IHdlYXRoZXJQcm9taXNlID0gZ2V0V2VhdGhlckRhdGEoc2VhcmNoQmFyLnZhbHVlKTtcclxuICAgIHVwZGF0ZVVJKHdlYXRoZXJQcm9taXNlKTtcclxufSk7XHJcblxyXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJQcm9taXNlID0gZ2V0V2VhdGhlckRhdGEoc2VhcmNoQmFyLnZhbHVlKTtcclxuICAgICAgICB1cGRhdGVVSSh3ZWF0aGVyUHJvbWlzZSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=