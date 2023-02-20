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
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${_biggest_secret_in_the_world__WEBPACK_IMPORTED_MODULE_0__.HIDDEN_ARTIFACT}`;

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

//default unit is kelvin, display it as celcius first
// make it convertable to fahrenheit too.

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekMsMEJBQTBCLFVBQVU7QUFDcEMsd0NBQXdDLG9CQUFvQjtBQUM1RCwrQ0FBK0MsK0JBQStCO0FBQzlFLHdDQUF3QyxjQUFjO0FBQ3RELGdDQUFnQyxVQUFVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRE87Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUQ7QUFDaEU7QUFDZTtBQUNmLHdFQUF3RSxTQUFTLFNBQVMseUVBQWUsQ0FBQztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0I7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDZDtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWMsbUJBQW1CO0FBQzVELElBQUksK0NBQVE7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYmlnZ2VzdC1zZWNyZXQtaW4tdGhlLXdvcmxkLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEtZmV0Y2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVSShwcm9taXNlKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnNvbGUubG9nKHByb21pc2UpO1xyXG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh3ZWF0aGVyRGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICB3ZWF0aGVyRGF0YS5jaXR5LFxyXG4gICAgICAgICAgICB3ZWF0aGVyRGF0YS5kZXNjLFxyXG4gICAgICAgICAgICB3ZWF0aGVyRGF0YS50ZW1wLnRvRml4ZWQoKSxcclxuICAgICAgICAgICAgd2VhdGhlckRhdGEudGVtcF9mZWVsc19saWtlLnRvRml4ZWQoKSxcclxuICAgICAgICAgICAgd2VhdGhlckRhdGEud2luZCxcclxuICAgICAgICAgICAgd2VhdGhlckRhdGEuaHVtaWRpdHlcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICh3ZWF0aGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlci1jYXJkXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gd2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItY2FyZFwiKTtcclxuICAgICAgICAgICAgd2VhdGhlckNvbnRhaW5lci5yZW1vdmVDaGlsZChjdXJyZW50Q2FyZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJFbGVtZW50ID0gY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckRhdGEpO1xyXG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJDYXJkKGRhdGEpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLWNhcmRcIik7XHJcblxyXG4gICAgY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwiY2FwaXRhbGl6ZVwiKTtcclxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHRlbXBGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgY2l0eVRpdGxlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jaXR5fWA7XHJcbiAgICBkZXNjLnRleHRDb250ZW50ID0gYCR7ZGF0YS5kZXNjfWA7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXAudG9GaXhlZCgpfWA7XHJcbiAgICB0ZW1wRmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7ZGF0YS50ZW1wX2ZlZWxzX2xpa2UudG9GaXhlZCgpfWA7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fSVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke2RhdGEud2luZH1gO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaXR5VGl0bGUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBGZWVsc0xpa2UpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBISURERU5fQVJUSUZBQ1QgPSBcImE5N2Y5MWRjMzE1NDc0NGM3NzU3YmRhNzkyOGMzMDhmXCI7XHJcbiIsImltcG9ydCB7IEhJRERFTl9BUlRJRkFDVCB9IGZyb20gXCIuL2JpZ2dlc3Qtc2VjcmV0LWluLXRoZS13b3JsZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcclxuICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPSR7SElEREVOX0FSVElGQUNUfWA7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCk7XHJcbiAgICAgICAgLy8gaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIHRoZSBkYXRhIDoke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyID0ge1xyXG4gICAgICAgICAgICBjaXR5OiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXHJcbiAgICAgICAgICAgIHRlbXBfZmVlbHNfbGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXHJcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB3ZWF0aGVyO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vZGF0YS1mZXRjaFwiO1xyXG5pbXBvcnQgdXBkYXRlVUkgZnJvbSBcIi4vVUlcIjtcclxuXHJcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIik7XHJcblxyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNlYXJjaEJhci52YWx1ZSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyUHJvbWlzZSA9IGdldFdlYXRoZXJEYXRhKHNlYXJjaEJhci52YWx1ZSk7IC8vY2hlY2sgZm9yIGVtcHR5IGlucHV0ICYgNDA0XHJcbiAgICB1cGRhdGVVSSh3ZWF0aGVyUHJvbWlzZSk7XHJcbn0pO1xyXG5cclxuLy9kZWZhdWx0IHVuaXQgaXMga2VsdmluLCBkaXNwbGF5IGl0IGFzIGNlbGNpdXMgZmlyc3RcclxuLy8gbWFrZSBpdCBjb252ZXJ0YWJsZSB0byBmYWhyZW5oZWl0IHRvby5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9