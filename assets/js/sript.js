// Weather api key and query url
const APIKey = "7df12cb46de7a3afe299788affb9ac22";
const queryURL = `api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`

const form = document.getElementById ('searchBar');
const input = document.querySelector('input[type="search"]');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const cityName = input.value.trim();

    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;

    fetch(queryURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function displayWeather(weatherData) {
    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const windSpeed = weatherData.wind.speed;
    const humidity = weatherData.main.humidity;

    const weatherInfoHtml = `
        <h5 class="card-title">${cityName}</h5>
        <p class="card-text">
            <ul>
                <li>Temperature: ${temperature}°C</li>
                <li>Wind: ${windSpeed} m/s</li>
                <li>Humidity: ${humidity}%</li>
            </ul>
        </p>
    `;
    weatherInfo.innerHTML = weatherInfoHtml;
}



/* form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Submit');
    const city = input.value;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        const temperature = data.main.temp;
        const humidity = datay.main.humidity;

        weatherInfo.innerHTML = `Temperature: ${temperature} K, Humidity: ${humidity}%`;
    } catch (error) { 
        console.error ('Error Fetching weather data:', error);
        weatherInfo.innerHTML = 'Failed to fetch weather data. Please try again.';
    }
});*/

