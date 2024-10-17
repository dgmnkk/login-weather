export async function getCurrentCityForecast() {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(async (position) => {
                try {
                    const currentCityLat = position.coords.latitude;
                    const currentCityLon = position.coords.longitude;

                    const apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${currentCityLat}&lon=${currentCityLon}&appid=8ce29ba35de34247ca262c0969688068`;
                    const weatherResponse = await fetch(apiWeather);
                    const weatherData = await weatherResponse.json();
                    
                    const cityValue = weatherData.name;

                    const apiForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=8ce29ba35de34247ca262c0969688068`;
                    const forecastResponse = await fetch(apiForecast);
                    const forecastData = await forecastResponse.json();
                    resolve({data: forecastData });
                } catch (error) {
                    console.error('Error: ', error);
                    reject(error);
                }
            }, (error) => {
                console.error('Geolocation error: ', error);
                reject(error);
            });
        });
    } else {
        console.log('Error: geolocation not supported');
        return Promise.reject('Geolocation not supported');
    }
}

export async function getKyivForecast() {
    const defaultCity = 'Kyiv';
    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${defaultCity}&appid=8ce29ba35de34247ca262c0969688068`;
    
    try {
        const response = await fetch(api);
        const data = await response.json();
        return { data: data };
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}
