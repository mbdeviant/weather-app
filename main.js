(()=>{"use strict";const e="a97f91dc3154744c7757bda7928c308f";async function t(e){const t=document.getElementById("weather-container"),a=document.getElementById("searchbar");e.then((function(e){if(!e)return;if(t.querySelector("#weather-card")){const e=t.querySelector("#weather-card");t.removeChild(e)}const s=function(e){const t=document.createElement("div");t.setAttribute("id","weather-card");const a=document.createElement("div");a.classList.add("weather-card-header");const s=document.createElement("h1");s.classList.add("city-title");const d=document.createElement("p");d.textContent="°C",d.classList.add("active");const c=document.createElement("p");c.textContent="/";const o=document.createElement("p");o.textContent="°F";const i=document.createElement("div");i.classList.add("temp-toggle"),i.appendChild(d),i.appendChild(c),i.appendChild(o),i.addEventListener("click",(()=>{if(d.classList.contains("active")){d.classList.remove("active"),o.classList.add("active");const t=n(e.temp.toFixed());l.textContent=` Temperature: ${t}°F`;const a=n(e.temp_feels_like.toFixed());m.textContent=`Feels like: ${a}°F`}else o.classList.contains("active")&&(o.classList.remove("active"),d.classList.add("active"),l.textContent=`Temperature: ${e.temp.toFixed()}°C`,m.textContent=`Feels like: ${e.temp_feels_like.toFixed()}°C`)}));const r=document.createElement("h2");r.classList.add("capitalize"),r.classList.add("weather-info");const l=document.createElement("h2");l.classList.add("weather-info");const m=document.createElement("h2");m.setAttribute("id","temp-feels-like"),m.classList.add("weather-info");const u=document.createElement("h2");u.classList.add("weather-info");const p=document.createElement("h2");return p.classList.add("weather-info"),s.textContent=`${e.city}`,r.textContent=`${e.desc}`,l.textContent=` Temperature: ${e.temp.toFixed()}°C`,m.textContent=`Feels like: ${e.temp_feels_like.toFixed()}°C`,u.textContent=`Humidity: ${e.humidity}%`,p.textContent=`Wind: ${e.wind} m/s`,"clear sky"===(h=e.desc)&&(document.body.style.backgroundImage="url('assets/clearsky.jpg')"),h.includes("clouds")&&(document.body.style.backgroundImage="url('assets/clouds.jpg')"),h.includes("rain")&&(document.body.style.backgroundImage="url('assets/rain.jpg')"),h.includes("snow")&&(document.body.style.backgroundImage="url('assets/snow.jpg')"),"mist"===h&&(document.body.style.backgroundImage="url('assets/mist.jpg')"),"thunderstorm"===h&&(document.body.style.backgroundImage="url('assets/thunderstorm.jpg')"),a.appendChild(s),a.appendChild(i),t.appendChild(a),t.appendChild(r),t.appendChild(l),t.appendChild(m),t.appendChild(u),t.appendChild(p),t;var h}(e);t.appendChild(s),a.value=""}))}function n(e){return 9*e/5+32}async function a(t){const n=`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&APPID=${e}`,a=await fetch(n,{mode:"cors"});try{const e=await a.json();return{city:e.name,desc:e.weather[0].description,temp:e.main.temp,temp_feels_like:e.main.feels_like,humidity:e.main.humidity,wind:e.wind.speed}}catch(e){return void function(){const e=document.getElementById("searchbar"),t=document.getElementById("error-message");""===e.value.trim()?(t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.textContent="Please enter a city name!"):(t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.textContent="Location was not found"),setTimeout((function(){t.textContent="",t.style.backgroundColor="transparent",console.clear()}),2500)}()}}const s=document.getElementById("searchbar"),d=document.getElementById("search-button");document.addEventListener("DOMContentLoaded",(()=>{t(a("Ortahisar"))})),d.addEventListener("click",(()=>{t(a(s.value))})),s.addEventListener("keypress",(e=>{"Enter"===e.key&&t(a(s.value))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU1lLFFBQ2xCRCxFQUFhbEIsTUFBTW9CLGdCQUFrQixxQkFDckNGLEVBQWF2QyxZQUFjLDhCQUUzQnVDLEVBQWFsQixNQUFNb0IsZ0JBQWtCLHFCQUNyQ0YsRUFBYXZDLFlBQWMsMEJBUTdCMEMsWUFMQSxXQUNFSCxFQUFhdkMsWUFBYyxHQUMzQnVDLEVBQWFsQixNQUFNb0IsZ0JBQWtCLGNBQ3JDRSxRQUFRQyxPQUNWLEdBQytCLEtBQ2pDLENDL0dRQyxFQUVKLENBQ0osQ0NuQkEsTUFBTTdELEVBQVlGLFNBQVNDLGVBQWUsYUFDcEMrRCxFQUFlaEUsU0FBU0MsZUFBZSxpQkFFN0NELFNBQVN1QixpQkFBaUIsb0JBQW9CLEtBRTFDMUIsRUFEb0IrQyxFQUFlLGFBQ2QsSUFHekJvQixFQUFhekMsaUJBQWlCLFNBQVMsS0FFbkMxQixFQUR1QitDLEVBQWUxQyxFQUFVeUMsT0FDeEIsSUFHNUJ6QyxFQUFVcUIsaUJBQWlCLFlBQWEwQyxJQUN0QixVQUFWQSxFQUFFQyxLQUVGckUsRUFEdUIrQyxFQUFlMUMsRUFBVXlDLE9BRXBELEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9iaWdnZXN0LXNlY3JldC1pbi10aGUtd29ybGQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0YS1mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSElEREVOX0FSVElGQUNUID0gXCJhOTdmOTFkYzMxNTQ3NDRjNzc1N2JkYTc5MjhjMzA4ZlwiO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVSShwcm9taXNlKSB7XHJcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1jb250YWluZXJcIik7XHJcbiAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hiYXJcIik7XHJcblxyXG4gIHByb21pc2UudGhlbihmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcclxuICAgIGlmICghd2VhdGhlckRhdGEpIHJldHVybjtcclxuXHJcbiAgICBpZiAod2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXItY2FyZFwiKSkge1xyXG4gICAgICBjb25zdCBjdXJyZW50Q2FyZCA9IHdlYXRoZXJDb250YWluZXIucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLWNhcmRcIik7XHJcbiAgICAgIHdlYXRoZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoY3VycmVudENhcmQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd2VhdGhlckVsZW1lbnQgPSBjcmVhdGVXZWF0aGVyQ2FyZCh3ZWF0aGVyRGF0YSk7XHJcbiAgICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJFbGVtZW50KTtcclxuICAgIHNlYXJjaEJhci52YWx1ZSA9IFwiXCI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJDYXJkKGRhdGEpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItY2FyZFwiKTtcclxuXHJcbiAgY29uc3QgY2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1jYXJkLWhlYWRlclwiKTtcclxuICBjb25zdCBjaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgY2l0eVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjaXR5LXRpdGxlXCIpO1xyXG5cclxuICBjb25zdCBjZWxjaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2VsY2l1cy50ZXh0Q29udGVudCA9IFwiwrBDXCI7XHJcbiAgY2VsY2l1cy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGNvbnN0IGJyYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYnJhY2UudGV4dENvbnRlbnQgPSBcIi9cIjtcclxuICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZmFocmVuaGVpdC50ZXh0Q29udGVudCA9IFwiwrBGXCI7XHJcblxyXG4gIGNvbnN0IHRlbXBUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRlbXBUb2dnbGUuY2xhc3NMaXN0LmFkZChcInRlbXAtdG9nZ2xlXCIpO1xyXG4gIHRlbXBUb2dnbGUuYXBwZW5kQ2hpbGQoY2VsY2l1cyk7XHJcbiAgdGVtcFRvZ2dsZS5hcHBlbmRDaGlsZChicmFjZSk7XHJcbiAgdGVtcFRvZ2dsZS5hcHBlbmRDaGlsZChmYWhyZW5oZWl0KTtcclxuXHJcbiAgdGVtcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGNlbGNpdXMuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICAgIGNlbGNpdXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgZmFocmVuaGVpdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgY29uc3QgdGVtcEYgPSBjb252ZXJ0VG9GYWhyZW5oZWl0KGRhdGEudGVtcC50b0ZpeGVkKCkpO1xyXG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gYCBUZW1wZXJhdHVyZTogJHt0ZW1wRn3CsEZgO1xyXG4gICAgICBjb25zdCB0ZW1wRmVlbHNsaWtlRiA9IGNvbnZlcnRUb0ZhaHJlbmhlaXQoXHJcbiAgICAgICAgZGF0YS50ZW1wX2ZlZWxzX2xpa2UudG9GaXhlZCgpXHJcbiAgICAgICk7XHJcbiAgICAgIHRlbXBGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHt0ZW1wRmVlbHNsaWtlRn3CsEZgO1xyXG4gICAgfSBlbHNlIGlmIChmYWhyZW5oZWl0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgICBmYWhyZW5oZWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGNlbGNpdXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgdGVtcC50ZXh0Q29udGVudCA9IGBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXAudG9GaXhlZCgpfcKwQ2A7XHJcbiAgICAgIHRlbXBGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtkYXRhLnRlbXBfZmVlbHNfbGlrZS50b0ZpeGVkKCl9wrBDYDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJjYXBpdGFsaXplXCIpO1xyXG4gIGRlc2MuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItaW5mb1wiKTtcclxuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHRlbXAuY2xhc3NMaXN0LmFkZChcIndlYXRoZXItaW5mb1wiKTtcclxuICBjb25zdCB0ZW1wRmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIHRlbXBGZWVsc0xpa2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0ZW1wLWZlZWxzLWxpa2VcIik7XHJcbiAgdGVtcEZlZWxzTGlrZS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlci1pbmZvXCIpO1xyXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWluZm9cIik7XHJcbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICB3aW5kLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyLWluZm9cIik7XHJcblxyXG4gIGNpdHlUaXRsZS50ZXh0Q29udGVudCA9IGAke2RhdGEuY2l0eX1gO1xyXG4gIGRlc2MudGV4dENvbnRlbnQgPSBgJHtkYXRhLmRlc2N9YDtcclxuICB0ZW1wLnRleHRDb250ZW50ID0gYCBUZW1wZXJhdHVyZTogJHtkYXRhLnRlbXAudG9GaXhlZCgpfcKwQ2A7XHJcbiAgdGVtcEZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2RhdGEudGVtcF9mZWVsc19saWtlLnRvRml4ZWQoKX3CsENgO1xyXG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2RhdGEuaHVtaWRpdHl9JWA7XHJcbiAgd2luZC50ZXh0Q29udGVudCA9IGBXaW5kOiAke2RhdGEud2luZH0gbS9zYDtcclxuXHJcbiAgc2V0QmFja2dyb3VuZChkYXRhLmRlc2MpO1xyXG5cclxuICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKGNpdHlUaXRsZSk7XHJcbiAgY2FyZEhlYWRlci5hcHBlbmRDaGlsZCh0ZW1wVG9nZ2xlKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZEhlYWRlcik7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2MpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcEZlZWxzTGlrZSk7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5KTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2luZCk7XHJcblxyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRUb0ZhaHJlbmhlaXQodGVtcCkge1xyXG4gIHJldHVybiAodGVtcCAqIDkpIC8gNSArIDMyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKHdlYXRoZXIpIHtcclxuICBpZiAod2VhdGhlciA9PT0gXCJjbGVhciBza3lcIilcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2Fzc2V0cy9jbGVhcnNreS5qcGcnKVwiO1xyXG4gIGlmICh3ZWF0aGVyLmluY2x1ZGVzKFwiY2xvdWRzXCIpKVxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnYXNzZXRzL2Nsb3Vkcy5qcGcnKVwiO1xyXG4gIGlmICh3ZWF0aGVyLmluY2x1ZGVzKFwicmFpblwiKSlcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2Fzc2V0cy9yYWluLmpwZycpXCI7XHJcbiAgaWYgKHdlYXRoZXIuaW5jbHVkZXMoXCJzbm93XCIpKVxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnYXNzZXRzL3Nub3cuanBnJylcIjtcclxuICBpZiAod2VhdGhlciA9PT0gXCJtaXN0XCIpXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdhc3NldHMvbWlzdC5qcGcnKVwiO1xyXG4gIGlmICh3ZWF0aGVyID09PSBcInRodW5kZXJzdG9ybVwiKVxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnYXNzZXRzL3RodW5kZXJzdG9ybS5qcGcnKVwiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUVycm9yTWVzc2FnZSgpIHtcclxuICBjb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGJhclwiKTtcclxuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yLW1lc3NhZ2VcIik7XHJcblxyXG4gIGlmIChzZWFyY2hCYXIudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNylcIjtcclxuICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIGEgY2l0eSBuYW1lIVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNylcIjtcclxuICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiTG9jYXRpb24gd2FzIG5vdCBmb3VuZFwiO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJFcnJvck1lc3NhZ2VzKCkge1xyXG4gICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVycm9yTWVzc2FnZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICBjb25zb2xlLmNsZWFyKCk7XHJcbiAgfVxyXG4gIHNldFRpbWVvdXQoY2xlYXJFcnJvck1lc3NhZ2VzLCAyNTAwKTtcclxufVxyXG4iLCJpbXBvcnQgeyBISURERU5fQVJUSUZBQ1QgfSBmcm9tIFwiLi9iaWdnZXN0LXNlY3JldC1pbi10aGUtd29ybGRcIjsgLy9ub3QgbXVjaCBvZiBhIHNlY3JldCwgdXNlIGRvdGVudiBuZXh0IHRpbWVcclxuaW1wb3J0IHsgZGlzcGxheUVycm9yTWVzc2FnZSB9IGZyb20gXCIuL1VJXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9bWV0cmljJkFQUElEPSR7SElEREVOX0FSVElGQUNUfWA7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IHtcclxuICAgICAgICAgICAgY2l0eTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxyXG4gICAgICAgICAgICB0ZW1wX2ZlZWxzX2xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxyXG4gICAgICAgICAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxyXG4gICAgICAgICAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gd2VhdGhlcjtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGdldFdlYXRoZXJEYXRhIGZyb20gXCIuL2RhdGEtZmV0Y2hcIjtcclxuaW1wb3J0IHVwZGF0ZVVJIGZyb20gXCIuL1VJXCI7XHJcblxyXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGJhclwiKTtcclxuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbENpdHkgPSBnZXRXZWF0aGVyRGF0YShcIk9ydGFoaXNhclwiKTtcclxuICAgIHVwZGF0ZVVJKGluaXRpYWxDaXR5KTtcclxufSk7XHJcblxyXG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IHdlYXRoZXJQcm9taXNlID0gZ2V0V2VhdGhlckRhdGEoc2VhcmNoQmFyLnZhbHVlKTtcclxuICAgIHVwZGF0ZVVJKHdlYXRoZXJQcm9taXNlKTtcclxufSk7XHJcblxyXG5zZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJQcm9taXNlID0gZ2V0V2VhdGhlckRhdGEoc2VhcmNoQmFyLnZhbHVlKTtcclxuICAgICAgICB1cGRhdGVVSSh3ZWF0aGVyUHJvbWlzZSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiSElEREVOX0FSVElGQUNUIiwiYXN5bmMiLCJ1cGRhdGVVSSIsInByb21pc2UiLCJ3ZWF0aGVyQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlYXJjaEJhciIsInRoZW4iLCJ3ZWF0aGVyRGF0YSIsInF1ZXJ5U2VsZWN0b3IiLCJjdXJyZW50Q2FyZCIsInJlbW92ZUNoaWxkIiwid2VhdGhlckVsZW1lbnQiLCJkYXRhIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNhcmRIZWFkZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaXR5VGl0bGUiLCJjZWxjaXVzIiwidGV4dENvbnRlbnQiLCJicmFjZSIsImZhaHJlbmhlaXQiLCJ0ZW1wVG9nZ2xlIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGFpbnMiLCJyZW1vdmUiLCJ0ZW1wRiIsImNvbnZlcnRUb0ZhaHJlbmhlaXQiLCJ0ZW1wIiwidG9GaXhlZCIsInRlbXBGZWVsc2xpa2VGIiwidGVtcF9mZWVsc19saWtlIiwidGVtcEZlZWxzTGlrZSIsImRlc2MiLCJodW1pZGl0eSIsIndpbmQiLCJjaXR5Iiwid2VhdGhlciIsImJvZHkiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImluY2x1ZGVzIiwiY3JlYXRlV2VhdGhlckNhcmQiLCJ2YWx1ZSIsImdldFdlYXRoZXJEYXRhIiwibG9jYXRpb24iLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImpzb24iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJtYWluIiwiZmVlbHNfbGlrZSIsInNwZWVkIiwiZXJyIiwiZXJyb3JNZXNzYWdlIiwidHJpbSIsImJhY2tncm91bmRDb2xvciIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwiY2xlYXIiLCJkaXNwbGF5RXJyb3JNZXNzYWdlIiwic2VhcmNoQnV0dG9uIiwiZSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=