'use strict';
const weather = document.querySelector(".weather");

const API_KEY = "21e0c58c82402dfa6a70784c876ee95b",
    COORDS_LC = "coords";

function saveCoords(data) {
    localStorage.setItem(COORDS_LC, JSON.stringify(data));
}
function getWeather(lat, lon) {
    const api_call = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(api_call)
    .then(response => response.json())
    .then(myJson => {
        weather.innerText = `${myJson.main.temp} @ ${myJson.name}`;
    });
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}
function handleSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleError() {
    console.log("Can't access");
}
function loadCoords() {
    const currentCoords = localStorage.getItem(COORDS_LC);
    if(currentCoords !== null) {
        const parsedCoords = JSON.parse(currentCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
    else {
        askForCoords();
    }
}
function init() {
    loadCoords();
}

init();