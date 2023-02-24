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

function displayErrorMessage() {
    const searchBar = document.getElementById("searchbar");
    const errorMessage = document.getElementById("error-message");

    if (searchBar.value.trim() === "") {
        errorMessage.textContent = "no empty input";
    } else errorMessage.textContent = "city not found";

    function clearErrorMessages() {
        errorMessage.textContent = "";
        console.clear();
    }
    setTimeout(clearErrorMessages, 3000);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxNQUFNO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxlQUFlO0FBQ3RFLFVBQVU7QUFDVjtBQUNBO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRSx1REFBdUQsK0JBQStCO0FBQ3RGO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekMsMEJBQTBCLFVBQVU7QUFDcEMsd0NBQXdDLG9CQUFvQjtBQUM1RCwrQ0FBK0MsK0JBQStCO0FBQzlFLHdDQUF3QyxjQUFjO0FBQ3RELGdDQUFnQyxVQUFVO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BHTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUQ7QUFDckI7QUFDM0M7QUFDZTtBQUNmLHdFQUF3RSxTQUFTLHNCQUFzQix5RUFBZSxDQUFDO0FBQ3ZILDJDQUEyQyxjQUFjO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixRQUFRLHdEQUFtQjtBQUMzQjtBQUNBO0FBQ0E7Ozs7Ozs7VUN0QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDZDtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdURBQWMsbUJBQW1CO0FBQzVELElBQUksK0NBQVE7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFjLG1CQUFtQjtBQUNoRSxRQUFRLCtDQUFRO0FBQ2hCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2JpZ2dlc3Qtc2VjcmV0LWluLXRoZS13b3JsZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLWZldGNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVUkocHJvbWlzZSkge1xyXG4gICAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1jb250YWluZXJcIik7XHJcbiAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHdlYXRoZXJEYXRhKSB7XHJcbiAgICAgICAgaWYgKCF3ZWF0aGVyRGF0YSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAod2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItY2FyZFwiKSkge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FyZCA9IHdlYXRoZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLWNhcmRcIik7XHJcbiAgICAgICAgICAgIHdlYXRoZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudENhcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB3ZWF0aGVyRWxlbWVudCA9IGNyZWF0ZVdlYXRoZXJDYXJkKHdlYXRoZXJEYXRhKTtcclxuICAgICAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJFbGVtZW50KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyQ2FyZChkYXRhKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlci1jYXJkXCIpO1xyXG5cclxuICAgIGNvbnN0IGNhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jYXJkLWhlYWRlclwiKTtcclxuICAgIGNvbnN0IGNpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHJcbiAgICBjb25zdCBjZWxjaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjZWxjaXVzLnRleHRDb250ZW50ID0gXCLCsENcIjtcclxuICAgIGNlbGNpdXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGNvbnN0IGJyYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBicmFjZS50ZXh0Q29udGVudCA9IFwiL1wiO1xyXG4gICAgY29uc3QgZmFocmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZmFocmVuaGVpdC50ZXh0Q29udGVudCA9IFwiwrBGXCI7XHJcblxyXG4gICAgY29uc3QgdGVtcFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0ZW1wVG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLXRvZ2dsZVwiKTtcclxuICAgIHRlbXBUb2dnbGUuYXBwZW5kQ2hpbGQoY2VsY2l1cyk7XHJcbiAgICB0ZW1wVG9nZ2xlLmFwcGVuZENoaWxkKGJyYWNlKTtcclxuICAgIHRlbXBUb2dnbGUuYXBwZW5kQ2hpbGQoZmFocmVuaGVpdCk7XHJcblxyXG4gICAgdGVtcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChjZWxjaXVzLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICBjZWxjaXVzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBGID0gY29udmVydFRvRmFocmVuaGVpdChkYXRhLnRlbXAudG9GaXhlZCgpKTtcclxuICAgICAgICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGAgVGVtcGVyYXR1cmU6ICR7dGVtcEZ9wrBGYDtcclxuICAgICAgICAgICAgY29uc3QgdGVtcEZlZWxzbGlrZUYgPSBjb252ZXJ0VG9GYWhyZW5oZWl0KFxyXG4gICAgICAgICAgICAgICAgZGF0YS50ZW1wX2ZlZWxzX2xpa2UudG9GaXhlZCgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRlbXBGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHt0ZW1wRmVlbHNsaWtlRn3CsEZgO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmFocmVuaGVpdC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgZmFocmVuaGVpdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBjZWxjaXVzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgVGVtcGVyYXR1cmU6ICR7ZGF0YS50ZW1wLnRvRml4ZWQoKX3CsENgO1xyXG4gICAgICAgICAgICB0ZW1wRmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7ZGF0YS50ZW1wX2ZlZWxzX2xpa2UudG9GaXhlZCgpfcKwQ2A7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwiY2FwaXRhbGl6ZVwiKTtcclxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBjb25zdCB0ZW1wRmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0ZW1wRmVlbHNMaWtlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcC1mZWVscy1saWtlXCIpO1xyXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICBjaXR5VGl0bGUudGV4dENvbnRlbnQgPSBgJHtkYXRhLmNpdHl9YDtcclxuICAgIGRlc2MudGV4dENvbnRlbnQgPSBgJHtkYXRhLmRlc2N9YDtcclxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgIFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcC50b0ZpeGVkKCl9wrBDYDtcclxuICAgIHRlbXBGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtkYXRhLnRlbXBfZmVlbHNfbGlrZS50b0ZpeGVkKCl9wrBDYDtcclxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEuaHVtaWRpdHl9JWA7XHJcbiAgICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7ZGF0YS53aW5kfWA7XHJcblxyXG4gICAgY2FyZEhlYWRlci5hcHBlbmRDaGlsZChjaXR5VGl0bGUpO1xyXG4gICAgY2FyZEhlYWRlci5hcHBlbmRDaGlsZCh0ZW1wVG9nZ2xlKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkSGVhZGVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRmVlbHNMaWtlKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eSk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2luZCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFRvRmFocmVuaGVpdCh0ZW1wKSB7XHJcbiAgICByZXR1cm4gKHRlbXAgKiA5KSAvIDUgKyAzMjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlFcnJvck1lc3NhZ2UoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGJhclwiKTtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3ItbWVzc2FnZVwiKTtcclxuXHJcbiAgICBpZiAoc2VhcmNoQmFyLnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwibm8gZW1wdHkgaW5wdXRcIjtcclxuICAgIH0gZWxzZSBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcImNpdHkgbm90IGZvdW5kXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJFcnJvck1lc3NhZ2VzKCkge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChjbGVhckVycm9yTWVzc2FnZXMsIDMwMDApO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBISURERU5fQVJUSUZBQ1QgPSBcImE5N2Y5MWRjMzE1NDc0NGM3NzU3YmRhNzkyOGMzMDhmXCI7XHJcbiIsImltcG9ydCB7IEhJRERFTl9BUlRJRkFDVCB9IGZyb20gXCIuL2JpZ2dlc3Qtc2VjcmV0LWluLXRoZS13b3JsZFwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5RXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XHJcbiAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz1tZXRyaWMmQVBQSUQ9JHtISURERU5fQVJUSUZBQ1R9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyID0ge1xyXG4gICAgICAgICAgICBjaXR5OiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXHJcbiAgICAgICAgICAgIHRlbXBfZmVlbHNfbGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXHJcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB3ZWF0aGVyO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tIFwiLi9kYXRhLWZldGNoXCI7XHJcbmltcG9ydCB1cGRhdGVVSSBmcm9tIFwiLi9VSVwiO1xyXG5cclxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hiYXJcIik7XHJcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ1dHRvblwiKTtcclxuXHJcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc2VhcmNoQmFyLnZhbHVlKTtcclxuICAgIGNvbnN0IHdlYXRoZXJQcm9taXNlID0gZ2V0V2VhdGhlckRhdGEoc2VhcmNoQmFyLnZhbHVlKTsgLy9jaGVjayBmb3IgZW1wdHkgaW5wdXQgJiA0MDRcclxuICAgIHVwZGF0ZVVJKHdlYXRoZXJQcm9taXNlKTtcclxufSk7XHJcblxyXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJQcm9taXNlID0gZ2V0V2VhdGhlckRhdGEoc2VhcmNoQmFyLnZhbHVlKTsgLy9jaGVjayBmb3IgZW1wdHkgaW5wdXQgJiA0MDRcclxuICAgICAgICB1cGRhdGVVSSh3ZWF0aGVyUHJvbWlzZSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=