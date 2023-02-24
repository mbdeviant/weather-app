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
    promise.then(function (weatherData) {
        if (!weatherData) return;

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
    if (weather === "snow")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxNQUFNO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxlQUFlO0FBQ3RFLFVBQVU7QUFDVjtBQUNBO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRSx1REFBdUQsK0JBQStCO0FBQ3RGO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekMsMEJBQTBCLFVBQVU7QUFDcEMsd0NBQXdDLG9CQUFvQjtBQUM1RCwrQ0FBK0MsK0JBQStCO0FBQzlFLHdDQUF3QyxjQUFjO0FBQ3RELGdDQUFnQyxVQUFVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0hPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5RDtBQUNyQjtBQUMzQztBQUNlO0FBQ2Ysd0VBQXdFLFNBQVMsc0JBQXNCLHlFQUFlLENBQUM7QUFDdkgsMkNBQTJDLGNBQWM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLFFBQVEsd0RBQW1CO0FBQzNCO0FBQ0E7QUFDQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wQztBQUNkO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQWM7QUFDdEMsSUFBSSwrQ0FBUTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0EsMkJBQTJCLHVEQUFjO0FBQ3pDLElBQUksK0NBQVE7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFjO0FBQzdDLFFBQVEsK0NBQVE7QUFDaEI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYmlnZ2VzdC1zZWNyZXQtaW4tdGhlLXdvcmxkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEtZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVSShwcm9taXNlKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWNvbnRhaW5lclwiKTtcclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcclxuICAgICAgICBpZiAoIXdlYXRoZXJEYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh3ZWF0aGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlci1jYXJkXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gd2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItY2FyZFwiKTtcclxuICAgICAgICAgICAgd2VhdGhlckNvbnRhaW5lci5yZW1vdmVDaGlsZChjdXJyZW50Q2FyZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJFbGVtZW50ID0gY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckRhdGEpO1xyXG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJDYXJkKGRhdGEpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLWNhcmRcIik7XHJcblxyXG4gICAgY29uc3QgY2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWNhcmQtaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNlbGNpdXMudGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xyXG4gICAgY2VsY2l1cy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgY29uc3QgYnJhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGJyYWNlLnRleHRDb250ZW50ID0gXCIvXCI7XHJcbiAgICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBmYWhyZW5oZWl0LnRleHRDb250ZW50ID0gXCLCsEZcIjtcclxuXHJcbiAgICBjb25zdCB0ZW1wVG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRlbXBUb2dnbGUuY2xhc3NMaXN0LmFkZChcInRlbXAtdG9nZ2xlXCIpO1xyXG4gICAgdGVtcFRvZ2dsZS5hcHBlbmRDaGlsZChjZWxjaXVzKTtcclxuICAgIHRlbXBUb2dnbGUuYXBwZW5kQ2hpbGQoYnJhY2UpO1xyXG4gICAgdGVtcFRvZ2dsZS5hcHBlbmRDaGlsZChmYWhyZW5oZWl0KTtcclxuXHJcbiAgICB0ZW1wVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNlbGNpdXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIGNlbGNpdXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVtcEYgPSBjb252ZXJ0VG9GYWhyZW5oZWl0KGRhdGEudGVtcC50b0ZpeGVkKCkpO1xyXG4gICAgICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCBUZW1wZXJhdHVyZTogJHt0ZW1wRn3CsEZgO1xyXG4gICAgICAgICAgICBjb25zdCB0ZW1wRmVlbHNsaWtlRiA9IGNvbnZlcnRUb0ZhaHJlbmhlaXQoXHJcbiAgICAgICAgICAgICAgICBkYXRhLnRlbXBfZmVlbHNfbGlrZS50b0ZpeGVkKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGVtcEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke3RlbXBGZWVsc2xpa2VGfcKwRmA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmYWhyZW5oZWl0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGNlbGNpdXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXAudG9GaXhlZCgpfcKwQ2A7XHJcbiAgICAgICAgICAgIHRlbXBGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtkYXRhLnRlbXBfZmVlbHNfbGlrZS50b0ZpeGVkKCl9wrBDYDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJjYXBpdGFsaXplXCIpO1xyXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIGNvbnN0IHRlbXBGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRlbXBGZWVsc0xpa2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wLWZlZWxzLWxpa2VcIik7XHJcbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIGNpdHlUaXRsZS50ZXh0Q29udGVudCA9IGAke2RhdGEuY2l0eX1gO1xyXG4gICAgZGVzYy50ZXh0Q29udGVudCA9IGAke2RhdGEuZGVzY31gO1xyXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAgVGVtcGVyYXR1cmU6ICR7ZGF0YS50ZW1wLnRvRml4ZWQoKX3CsENgO1xyXG4gICAgdGVtcEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2RhdGEudGVtcF9mZWVsc19saWtlLnRvRml4ZWQoKX3CsENgO1xyXG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5odW1pZGl0eX0lYDtcclxuICAgIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHtkYXRhLndpbmR9YDtcclxuXHJcbiAgICBzZXRCYWNrZ3JvdW5kKGRhdGEuZGVzYyk7XHJcblxyXG4gICAgY2FyZEhlYWRlci5hcHBlbmRDaGlsZChjaXR5VGl0bGUpO1xyXG4gICAgY2FyZEhlYWRlci5hcHBlbmRDaGlsZCh0ZW1wVG9nZ2xlKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkSGVhZGVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRmVlbHNMaWtlKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2luZCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvRmFocmVuaGVpdCh0ZW1wKSB7XHJcbiAgICByZXR1cm4gKHRlbXAgKiA5KSAvIDUgKyAzMjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QmFja2dyb3VuZCh3ZWF0aGVyKSB7XHJcbiAgICBpZiAod2VhdGhlciA9PT0gXCJjbGVhciBza3lcIilcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuLi9kaXN0L2Fzc2V0cy9jbGVhcnNreS5qcGcnKVwiO1xyXG4gICAgaWYgKHdlYXRoZXIuaW5jbHVkZXMoXCJjbG91ZHNcIikpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxyXG4gICAgICAgICAgICBcInVybCgnLi4vZGlzdC9hc3NldHMvY2xvdWRzLmpwZycpXCI7XHJcbiAgICBpZiAod2VhdGhlci5pbmNsdWRlcyhcInJhaW5cIikpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi4vZGlzdC9hc3NldHMvcmFpbi5qcGcnKVwiO1xyXG4gICAgaWYgKHdlYXRoZXIgPT09IFwic25vd1wiKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4uL2Rpc3QvYXNzZXRzL3Nub3cuanBnJylcIjtcclxuICAgIGlmICh3ZWF0aGVyID09PSBcIm1pc3RcIilcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuLi9kaXN0L2Fzc2V0cy9taXN0LmpwZycpXCI7XHJcbiAgICBpZiAod2VhdGhlciA9PT0gXCJ0aHVuZGVyc3Rvcm1cIilcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XHJcbiAgICAgICAgICAgIFwidXJsKCcuLi9kaXN0L2Fzc2V0cy90aHVuZGVyc3Rvcm0uanBnJylcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFcnJvck1lc3NhZ2UoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGJhclwiKTtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3ItbWVzc2FnZVwiKTtcclxuXHJcbiAgICBpZiAoc2VhcmNoQmFyLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC43KVwiO1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIGEgY2l0eSBuYW1lIVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNylcIjtcclxuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uIHdhcyBub3QgZm91bmRcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhckVycm9yTWVzc2FnZXMoKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoY2xlYXJFcnJvck1lc3NhZ2VzLCAyNTAwKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgSElEREVOX0FSVElGQUNUID0gXCJhOTdmOTFkYzMxNTQ3NDRjNzc1N2JkYTc5MjhjMzA4ZlwiO1xyXG4iLCJpbXBvcnQgeyBISURERU5fQVJUSUZBQ1QgfSBmcm9tIFwiLi9iaWdnZXN0LXNlY3JldC1pbi10aGUtd29ybGRcIjtcclxuaW1wb3J0IHsgZGlzcGxheUVycm9yTWVzc2FnZSB9IGZyb20gXCIuL1VJXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9bWV0cmljJkFQUElEPSR7SElEREVOX0FSVElGQUNUfWA7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IHtcclxuICAgICAgICAgICAgY2l0eTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxyXG4gICAgICAgICAgICB0ZW1wX2ZlZWxzX2xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxyXG4gICAgICAgICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxyXG4gICAgICAgICAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gd2VhdGhlcjtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vZGF0YS1mZXRjaFwiO1xyXG5pbXBvcnQgdXBkYXRlVUkgZnJvbSBcIi4vVUlcIjtcclxuXHJcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsQ2l0eSA9IGdldFdlYXRoZXJEYXRhKFwiaXptaXJcIik7XHJcbiAgICB1cGRhdGVVSShpbml0aWFsQ2l0eSk7XHJcbn0pO1xyXG5cclxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB3ZWF0aGVyUHJvbWlzZSA9IGdldFdlYXRoZXJEYXRhKHNlYXJjaEJhci52YWx1ZSk7XHJcbiAgICB1cGRhdGVVSSh3ZWF0aGVyUHJvbWlzZSk7XHJcbn0pO1xyXG5cclxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyUHJvbWlzZSA9IGdldFdlYXRoZXJEYXRhKHNlYXJjaEJhci52YWx1ZSk7XHJcbiAgICAgICAgdXBkYXRlVUkod2VhdGhlclByb21pc2UpO1xyXG4gICAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9