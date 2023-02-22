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
/* harmony export */   "default": () => (/* binding */ updateUI)
/* harmony export */ });
async function updateUI(promise) {
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


async function getWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${_biggest_secret_in_the_world__WEBPACK_IMPORTED_MODULE_0__.HIDDEN_ARTIFACT}`;

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

searchButton.addEventListener("click", () => {
    console.log(searchBar.value);
    const weatherPromise = (0,_data_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(searchBar.value); //check for empty input & 404
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherPromise);
});

searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const weatherPromise = (0,_data_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(searchBar.value); //check for empty input & 404
        (0,_UI__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherPromise);
    }
});

//default unit is kelvin, display it as celcius first
// make it convertable to fahrenheit too.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QywwQkFBMEIsVUFBVTtBQUNwQyx3Q0FBd0Msb0JBQW9CO0FBQzVELCtDQUErQywrQkFBK0I7QUFDOUUsd0NBQXdDLGNBQWM7QUFDdEQsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckZPOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXlEO0FBQ2hFO0FBQ2U7QUFDZix3RUFBd0UsU0FBUyxzQkFBc0IseUVBQWUsQ0FBQztBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDZDtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWMsbUJBQW1CO0FBQzVELElBQUksK0NBQVE7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFjLG1CQUFtQjtBQUNoRSxRQUFRLCtDQUFRO0FBQ2hCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2JpZ2dlc3Qtc2VjcmV0LWluLXRoZS13b3JsZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLWZldGNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVUkocHJvbWlzZSkge1xyXG4gICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1jb250YWluZXJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9taXNlKTtcclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgd2VhdGhlckRhdGEuY2l0eSxcclxuICAgICAgICAgICAgd2VhdGhlckRhdGEuZGVzYyxcclxuICAgICAgICAgICAgd2VhdGhlckRhdGEudGVtcC50b0ZpeGVkKCksXHJcbiAgICAgICAgICAgIHdlYXRoZXJEYXRhLnRlbXBfZmVlbHNfbGlrZS50b0ZpeGVkKCksXHJcbiAgICAgICAgICAgIHdlYXRoZXJEYXRhLndpbmQsXHJcbiAgICAgICAgICAgIHdlYXRoZXJEYXRhLmh1bWlkaXR5XHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAod2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItY2FyZFwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FyZCA9IHdlYXRoZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLWNhcmRcIik7XHJcbiAgICAgICAgICAgIHdlYXRoZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudENhcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB3ZWF0aGVyRWxlbWVudCA9IGNyZWF0ZVdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcclxuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJFbGVtZW50KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyQ2FyZChkYXRhKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlci1jYXJkXCIpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jYXJkLWhlYWRlclwiKTtcclxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHJcbiAgICBjb25zdCBjZWxjaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjZWxjaXVzLnRleHRDb250ZW50ID0gXCLCsENcIjtcclxuICAgIGNlbGNpdXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGNvbnN0IGJyYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBicmFjZS50ZXh0Q29udGVudCA9IFwiL1wiO1xyXG4gICAgY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZmFocmVuaGVpdC50ZXh0Q29udGVudCA9IFwiwrBGXCI7XHJcblxyXG4gICAgY29uc3QgdGVtcFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZW1wVG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLXRvZ2dsZVwiKTtcclxuICAgIHRlbXBUb2dnbGUuYXBwZW5kQ2hpbGQoY2VsY2l1cyk7XHJcbiAgICB0ZW1wVG9nZ2xlLmFwcGVuZENoaWxkKGJyYWNlKTtcclxuICAgIHRlbXBUb2dnbGUuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdCk7XHJcblxyXG4gICAgdGVtcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNlbGNpdXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgID8gY2VsY2l1cy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgIDogY2VsY2l1cy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgID8gZmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgIDogZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jcmVhdGUgYSBzZXBlcmF0ZSBmdW5jdGlvbiB0byBkZWFsIHdpdGggdGVtcCBjb252ZXJzaW9uXHJcbiAgICAvL3lvdSB3aWxsIG1vZGlmeSB0aGUgZGF0YSBjb21pbmcgdG8gcHJvbWlzZSwgZGVmYXVsdCBDXHJcbiAgICAvL2hpZ2hsaWdodCB0aGUgY3VycmVudCBieSBhZGRpbmcgcmVtb3ZpbmcgY2xhc3MgdG8gaXRcclxuICAgIC8vaW4gYnV0dG9uIGV2ZW50IGxpc3RlbmVyXHJcblxyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwiY2FwaXRhbGl6ZVwiKTtcclxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wXCIpO1xyXG4gICAgY29uc3QgdGVtcEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGVtcEZlZWxzTGlrZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXAtZmVlbHMtbGlrZVwiKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgY2l0eVRpdGxlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jaXR5fWA7XHJcbiAgICBkZXNjLnRleHRDb250ZW50ID0gYCR7ZGF0YS5kZXNjfWA7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXAudG9GaXhlZCgpfWA7XHJcbiAgICB0ZW1wRmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7ZGF0YS50ZW1wX2ZlZWxzX2xpa2UudG9GaXhlZCgpfWA7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fSVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke2RhdGEud2luZH1gO1xyXG5cclxuICAgIGNhcmRIZWFkZXIuYXBwZW5kQ2hpbGQoY2l0eVRpdGxlKTtcclxuICAgIGNhcmRIZWFkZXIuYXBwZW5kQ2hpbGQodGVtcFRvZ2dsZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEhlYWRlcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcCk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEZlZWxzTGlrZSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmQpO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVRlbXBVbml0KCkge31cclxuIiwiZXhwb3J0IGNvbnN0IEhJRERFTl9BUlRJRkFDVCA9IFwiYTk3ZjkxZGMzMTU0NzQ0Yzc3NTdiZGE3OTI4YzMwOGZcIjtcclxuIiwiaW1wb3J0IHsgSElEREVOX0FSVElGQUNUIH0gZnJvbSBcIi4vYmlnZ2VzdC1zZWNyZXQtaW4tdGhlLXdvcmxkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9bWV0cmljJkFQUElEPSR7SElEREVOX0FSVElGQUNUfWA7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XHJcbiAgICAgICAgLy8gaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIHRoZSBkYXRhIDoke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyID0ge1xyXG4gICAgICAgICAgICBjaXR5OiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXHJcbiAgICAgICAgICAgIHRlbXBfZmVlbHNfbGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXHJcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB3ZWF0aGVyO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vZGF0YS1mZXRjaFwiO1xyXG5pbXBvcnQgdXBkYXRlVUkgZnJvbSBcIi4vVUlcIjtcclxuXHJcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIik7XHJcblxyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNlYXJjaEJhci52YWx1ZSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyUHJvbWlzZSA9IGdldFdlYXRoZXJEYXRhKHNlYXJjaEJhci52YWx1ZSk7IC8vY2hlY2sgZm9yIGVtcHR5IGlucHV0ICYgNDA0XHJcbiAgICB1cGRhdGVVSSh3ZWF0aGVyUHJvbWlzZSk7XHJcbn0pO1xyXG5cclxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyUHJvbWlzZSA9IGdldFdlYXRoZXJEYXRhKHNlYXJjaEJhci52YWx1ZSk7IC8vY2hlY2sgZm9yIGVtcHR5IGlucHV0ICYgNDA0XHJcbiAgICAgICAgdXBkYXRlVUkod2VhdGhlclByb21pc2UpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vZGVmYXVsdCB1bml0IGlzIGtlbHZpbiwgZGlzcGxheSBpdCBhcyBjZWxjaXVzIGZpcnN0XHJcbi8vIG1ha2UgaXQgY29udmVydGFibGUgdG8gZmFocmVuaGVpdCB0b28uXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==