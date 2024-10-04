const apiKey = '9dce43d6f9c9dd0aa623390f1f7343c8'; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById('search-btn') as HTMLButtonElement;
const cityInput = document.getElementById('city-input') as HTMLInputElement;
const cityName = document.getElementById('city-name') as HTMLElement;
const weatherDescription = document.getElementById('weather-description') as HTMLElement;
const temperature = document.getElementById('temperature') as HTMLElement;
const humidity = document.getElementById('humidity') as HTMLElement;

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
    }
});

async function getWeather(city: string) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            cityName.textContent = data.name;
            weatherDescription.textContent = data.weather[0].description;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            humidity.textContent = `Humidity: ${data.main.humidity}%`;
        } else {
            cityName.textContent = 'City not found';
            weatherDescription.textContent = '';
            temperature.textContent = '';
            humidity.textContent = '';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        cityName.textContent = 'Error fetching data';
        weatherDescription.textContent = '';
        temperature.textContent = '';
        humidity.textContent = '';
    }
}
