"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiKey = '9dce43d6f9c9dd0aa623390f1f7343c8';
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
searchBtn.addEventListener('click', () => {
    if (cityInput.value) {
        getWeather(cityInput.value);
    }
});
function getWeather(city) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            const data = yield response.json();
            if (data.cod === 200) {
                cityName.textContent = data.name;
                weatherDescription.textContent = data.weather[0].description;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
            }
            else {
                cityName.textContent = 'City not found';
                weatherDescription.textContent = '';
                temperature.textContent = '';
                humidity.textContent = '';
            }
        }
        catch (error) {
            console.error('Error fetching weather data:', error);
            cityName.textContent = 'Error fetching data';
            weatherDescription.textContent = '';
            temperature.textContent = '';
            humidity.textContent = '';
        }
    });
}
