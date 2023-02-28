(()=>{"use strict";const e="a97f91dc3154744c7757bda7928c308f";async function t(e){const t=document.getElementById("weather-container"),a=document.getElementById("searchbar");e.then((function(e){if(!e)return;if(t.querySelector("#weather-card")){const e=t.querySelector("#weather-card");t.removeChild(e)}const c=function(e){const t=document.createElement("div");t.setAttribute("id","weather-card");const a=document.createElement("div");a.classList.add("weather-card-header");const c=document.createElement("h2"),d=document.createElement("p");d.textContent="°C",d.classList.add("active");const s=document.createElement("p");s.textContent="/";const o=document.createElement("p");o.textContent="°F";const i=document.createElement("div");i.classList.add("temp-toggle"),i.appendChild(d),i.appendChild(s),i.appendChild(o),i.addEventListener("click",(()=>{if(d.classList.contains("active")){d.classList.remove("active"),o.classList.add("active");const t=n(e.temp.toFixed());l.textContent=` Temperature: ${t}°F`;const a=n(e.temp_feels_like.toFixed());m.textContent=`Feels like: ${a}°F`}else o.classList.contains("active")&&(o.classList.remove("active"),d.classList.add("active"),l.textContent=`Temperature: ${e.temp.toFixed()}°C`,m.textContent=`Feels like: ${e.temp_feels_like.toFixed()}°C`)}));const r=document.createElement("p");r.classList.add("capitalize");const l=document.createElement("p"),m=document.createElement("p");m.setAttribute("id","temp-feels-like");const u=document.createElement("p"),p=document.createElement("p");return c.textContent=`${e.city}`,r.textContent=`${e.desc}`,l.textContent=` Temperature: ${e.temp.toFixed()}°C`,m.textContent=`Feels like: ${e.temp_feels_like.toFixed()}°C`,u.textContent=`Humidity: ${e.humidity}%`,p.textContent=`Wind: ${e.wind}`,"clear sky"===(C=e.desc)&&(document.body.style.backgroundImage="url('assets/clearsky.jpg')"),C.includes("clouds")&&(document.body.style.backgroundImage="url('assets/clouds.jpg')"),C.includes("rain")&&(document.body.style.backgroundImage="url('assets/rain.jpg')"),C.includes("snow")&&(document.body.style.backgroundImage="url('assets/snow.jpg')"),"mist"===C&&(document.body.style.backgroundImage="url('assets/mist.jpg')"),"thunderstorm"===C&&(document.body.style.backgroundImage="url('assets/thunderstorm.jpg')"),a.appendChild(c),a.appendChild(i),t.appendChild(a),t.appendChild(r),t.appendChild(l),t.appendChild(m),t.appendChild(u),t.appendChild(p),t;var C}(e);t.appendChild(c),a.value=""}))}function n(e){return 9*e/5+32}async function a(t){const n=`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&APPID=${e}`,a=await fetch(n,{mode:"cors"});try{const e=await a.json();return{city:e.name,desc:e.weather[0].description,temp:e.main.temp,temp_feels_like:e.main.feels_like,humidity:e.main.humidity,wind:e.wind.speed}}catch(e){return void function(){const e=document.getElementById("searchbar"),t=document.getElementById("error-message");""===e.value.trim()?(t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.textContent="Please enter a city name!"):(t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.textContent="Location was not found"),setTimeout((function(){t.textContent="",t.style.backgroundColor="transparent",console.clear()}),2500)}()}}const c=document.getElementById("searchbar"),d=document.getElementById("search-button");document.addEventListener("DOMContentLoaded",(()=>{t(a("izmir"))})),d.addEventListener("click",(()=>{t(a(c.value))})),c.addEventListener("keypress",(e=>{"Enter"===e.key&&t(a(c.value))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRQyxPQUNaLEdBQytCLEtBQ25DLENDMUdRQyxFQUVKLENBQ0osQ0NuQkEsTUFBTTdELEVBQVlGLFNBQVNDLGVBQWUsYUFDcEMrRCxFQUFlaEUsU0FBU0MsZUFBZSxpQkFFN0NELFNBQVN1QixpQkFBaUIsb0JBQW9CLEtBRTFDMUIsRUFEb0IrQyxFQUFlLFNBQ2QsSUFHekJvQixFQUFhekMsaUJBQWlCLFNBQVMsS0FFbkMxQixFQUR1QitDLEVBQWUxQyxFQUFVeUMsT0FDeEIsSUFHNUJ6QyxFQUFVcUIsaUJBQWlCLFlBQWEwQyxJQUN0QixVQUFWQSxFQUFFQyxLQUVGckUsRUFEdUIrQyxFQUFlMUMsRUFBVXlDLE9BRXBELEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9iaWdnZXN0LXNlY3JldC1pbi10aGUtd29ybGQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0YS1mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSElEREVOX0FSVElGQUNUID0gXCJhOTdmOTFkYzMxNTQ3NDRjNzc1N2JkYTc5MjhjMzA4ZlwiO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVSShwcm9taXNlKSB7XHJcbiAgICBjb25zdCB3ZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xyXG5cclxuICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcclxuICAgICAgICBpZiAoIXdlYXRoZXJEYXRhKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh3ZWF0aGVyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjd2VhdGhlci1jYXJkXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkID0gd2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItY2FyZFwiKTtcclxuICAgICAgICAgICAgd2VhdGhlckNvbnRhaW5lci5yZW1vdmVDaGlsZChjdXJyZW50Q2FyZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJFbGVtZW50ID0gY3JlYXRlV2VhdGhlckNhcmQod2VhdGhlckRhdGEpO1xyXG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckVsZW1lbnQpO1xyXG4gICAgICAgIHNlYXJjaEJhci52YWx1ZSA9IFwiXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckNhcmQoZGF0YSkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItY2FyZFwiKTtcclxuXHJcbiAgICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRIZWFkZXIuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItY2FyZC1oZWFkZXJcIik7XHJcbiAgICBjb25zdCBjaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcblxyXG4gICAgY29uc3QgY2VsY2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY2VsY2l1cy50ZXh0Q29udGVudCA9IFwiwrBDXCI7XHJcbiAgICBjZWxjaXVzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICBjb25zdCBicmFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgYnJhY2UudGV4dENvbnRlbnQgPSBcIi9cIjtcclxuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGZhaHJlbmhlaXQudGV4dENvbnRlbnQgPSBcIsKwRlwiO1xyXG5cclxuICAgIGNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGVtcFRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwidGVtcC10b2dnbGVcIik7XHJcbiAgICB0ZW1wVG9nZ2xlLmFwcGVuZENoaWxkKGNlbGNpdXMpO1xyXG4gICAgdGVtcFRvZ2dsZS5hcHBlbmRDaGlsZChicmFjZSk7XHJcbiAgICB0ZW1wVG9nZ2xlLmFwcGVuZENoaWxkKGZhaHJlbmhlaXQpO1xyXG5cclxuICAgIHRlbXBUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoY2VsY2l1cy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgY2VsY2l1cy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wRiA9IGNvbnZlcnRUb0ZhaHJlbmhlaXQoZGF0YS50ZW1wLnRvRml4ZWQoKSk7XHJcbiAgICAgICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBgIFRlbXBlcmF0dXJlOiAke3RlbXBGfcKwRmA7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXBGZWVsc2xpa2VGID0gY29udmVydFRvRmFocmVuaGVpdChcclxuICAgICAgICAgICAgICAgIGRhdGEudGVtcF9mZWVsc19saWtlLnRvRml4ZWQoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0ZW1wRmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7dGVtcEZlZWxzbGlrZUZ9wrBGYDtcclxuICAgICAgICB9IGVsc2UgaWYgKGZhaHJlbmhlaXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIGZhaHJlbmhlaXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgY2VsY2l1cy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke2RhdGEudGVtcC50b0ZpeGVkKCl9wrBDYDtcclxuICAgICAgICAgICAgdGVtcEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2RhdGEudGVtcF9mZWVsc19saWtlLnRvRml4ZWQoKX3CsENgO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGRlc2MuY2xhc3NMaXN0LmFkZChcImNhcGl0YWxpemVcIik7XHJcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgY29uc3QgdGVtcEZlZWxzTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGVtcEZlZWxzTGlrZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXAtZmVlbHMtbGlrZVwiKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgY2l0eVRpdGxlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jaXR5fWA7XHJcbiAgICBkZXNjLnRleHRDb250ZW50ID0gYCR7ZGF0YS5kZXNjfWA7XHJcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gYCBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXAudG9GaXhlZCgpfcKwQ2A7XHJcbiAgICB0ZW1wRmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7ZGF0YS50ZW1wX2ZlZWxzX2xpa2UudG9GaXhlZCgpfcKwQ2A7XHJcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtkYXRhLmh1bWlkaXR5fSVgO1xyXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke2RhdGEud2luZH1gO1xyXG5cclxuICAgIHNldEJhY2tncm91bmQoZGF0YS5kZXNjKTtcclxuXHJcbiAgICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKGNpdHlUaXRsZSk7XHJcbiAgICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKHRlbXBUb2dnbGUpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRIZWFkZXIpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBGZWVsc0xpa2UpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0VG9GYWhyZW5oZWl0KHRlbXApIHtcclxuICAgIHJldHVybiAodGVtcCAqIDkpIC8gNSArIDMyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKHdlYXRoZXIpIHtcclxuICAgIGlmICh3ZWF0aGVyID09PSBcImNsZWFyIHNreVwiKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2Fzc2V0cy9jbGVhcnNreS5qcGcnKVwiO1xyXG4gICAgaWYgKHdlYXRoZXIuaW5jbHVkZXMoXCJjbG91ZHNcIikpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnYXNzZXRzL2Nsb3Vkcy5qcGcnKVwiO1xyXG4gICAgaWYgKHdlYXRoZXIuaW5jbHVkZXMoXCJyYWluXCIpKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2Fzc2V0cy9yYWluLmpwZycpXCI7XHJcbiAgICBpZiAod2VhdGhlci5pbmNsdWRlcyhcInNub3dcIikpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnYXNzZXRzL3Nub3cuanBnJylcIjtcclxuICAgIGlmICh3ZWF0aGVyID09PSBcIm1pc3RcIilcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdhc3NldHMvbWlzdC5qcGcnKVwiO1xyXG4gICAgaWYgKHdlYXRoZXIgPT09IFwidGh1bmRlcnN0b3JtXCIpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnYXNzZXRzL3RodW5kZXJzdG9ybS5qcGcnKVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yTWVzc2FnZSgpIHtcclxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvci1tZXNzYWdlXCIpO1xyXG5cclxuICAgIGlmIChzZWFyY2hCYXIudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjcpXCI7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgYSBjaXR5IG5hbWUhXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC43KVwiO1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gd2FzIG5vdCBmb3VuZFwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyRXJyb3JNZXNzYWdlcygpIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dChjbGVhckVycm9yTWVzc2FnZXMsIDI1MDApO1xyXG59XHJcbiIsImltcG9ydCB7IEhJRERFTl9BUlRJRkFDVCB9IGZyb20gXCIuL2JpZ2dlc3Qtc2VjcmV0LWluLXRoZS13b3JsZFwiOyAvL25vdCBtdWNoIG9mIGEgc2VjcmV0LCB1c2UgZG90ZW52IG5leHQgdGltZVxyXG5pbXBvcnQgeyBkaXNwbGF5RXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vVUlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XHJcbiAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz1tZXRyaWMmQVBQSUQ9JHtISURERU5fQVJUSUZBQ1R9YDtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyID0ge1xyXG4gICAgICAgICAgICBjaXR5OiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXHJcbiAgICAgICAgICAgIHRlbXBfZmVlbHNfbGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXHJcbiAgICAgICAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXHJcbiAgICAgICAgICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB3ZWF0aGVyO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgZ2V0V2VhdGhlckRhdGEgZnJvbSBcIi4vZGF0YS1mZXRjaFwiO1xyXG5pbXBvcnQgdXBkYXRlVUkgZnJvbSBcIi4vVUlcIjtcclxuXHJcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoYmFyXCIpO1xyXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsQ2l0eSA9IGdldFdlYXRoZXJEYXRhKFwiaXptaXJcIik7XHJcbiAgICB1cGRhdGVVSShpbml0aWFsQ2l0eSk7XHJcbn0pO1xyXG5cclxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB3ZWF0aGVyUHJvbWlzZSA9IGdldFdlYXRoZXJEYXRhKHNlYXJjaEJhci52YWx1ZSk7XHJcbiAgICB1cGRhdGVVSSh3ZWF0aGVyUHJvbWlzZSk7XHJcbn0pO1xyXG5cclxuc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyUHJvbWlzZSA9IGdldFdlYXRoZXJEYXRhKHNlYXJjaEJhci52YWx1ZSk7XHJcbiAgICAgICAgdXBkYXRlVUkod2VhdGhlclByb21pc2UpO1xyXG4gICAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbIkhJRERFTl9BUlRJRkFDVCIsImFzeW5jIiwidXBkYXRlVUkiLCJwcm9taXNlIiwid2VhdGhlckNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWFyY2hCYXIiLCJ0aGVuIiwid2VhdGhlckRhdGEiLCJxdWVyeVNlbGVjdG9yIiwiY3VycmVudENhcmQiLCJyZW1vdmVDaGlsZCIsIndlYXRoZXJFbGVtZW50IiwiZGF0YSIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjYXJkSGVhZGVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2l0eVRpdGxlIiwiY2VsY2l1cyIsInRleHRDb250ZW50IiwiYnJhY2UiLCJmYWhyZW5oZWl0IiwidGVtcFRvZ2dsZSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5zIiwicmVtb3ZlIiwidGVtcEYiLCJjb252ZXJ0VG9GYWhyZW5oZWl0IiwidGVtcCIsInRvRml4ZWQiLCJ0ZW1wRmVlbHNsaWtlRiIsInRlbXBfZmVlbHNfbGlrZSIsInRlbXBGZWVsc0xpa2UiLCJkZXNjIiwiaHVtaWRpdHkiLCJ3aW5kIiwiY2l0eSIsIndlYXRoZXIiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbmNsdWRlcyIsImNyZWF0ZVdlYXRoZXJDYXJkIiwidmFsdWUiLCJnZXRXZWF0aGVyRGF0YSIsImxvY2F0aW9uIiwiYXBpVXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFpbiIsImZlZWxzX2xpa2UiLCJzcGVlZCIsImVyciIsImVycm9yTWVzc2FnZSIsInRyaW0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImNsZWFyIiwiZGlzcGxheUVycm9yTWVzc2FnZSIsInNlYXJjaEJ1dHRvbiIsImUiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9