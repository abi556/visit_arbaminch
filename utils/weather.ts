/**
 * Utility to fetch weather from OpenWeatherMap
 * Falls back to Open-Meteo if OpenWeatherMap fails (e.g., new API key not yet active)
 */

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

export async function fetchArbaMinchWeather() {
    const lat = 6.0333;
    const lon = 37.55;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    try {
        if (!OPENWEATHER_API_KEY) {
            console.warn('OpenWeatherMap API Key missing. Falling back to Open-Meteo.');
            return fetchOpenMeteoFallback();
        }

        const response = await fetch(url);
        const data = await response.json();

        // OpenWeatherMap specifically returns 401 for inactive/invalid keys
        if (data.cod !== 200) {
            console.warn(`OpenWeatherMap error (${data.cod}): ${data.message}. Falling back to Open-Meteo.`);
            return fetchOpenMeteoFallback();
        }

        const temp = Math.round(data.main.temp);
        const description = data.weather[0].main;
        const icon = data.weather[0].icon;

        return {
            temp,
            description,
            icon,
            formatted: `${temp}°C ${description}`
        };
    } catch (error) {
        console.error('Failed to fetch from OpenWeatherMap, falling back:', error);
        return fetchOpenMeteoFallback();
    }
}

async function fetchOpenMeteoFallback() {
    try {
        const response = await fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=6.0333&longitude=37.55&current_weather=true'
        );
        const data = await response.json();

        if (!data.current_weather) {
            throw new Error('Open-Meteo data missing');
        }

        const temp = Math.round(data.current_weather.temperature);
        // Simple mapping for fallback description
        const description = 'Partly Cloudy';
        const icon = '02d'; // Standard OpenWeatherMap code for partly cloudy

        return {
            temp,
            description,
            icon,
            formatted: `${temp}°C ${description}`
        };
    } catch (e) {
        console.error('Weather fallback also failed:', e);
        return {
            temp: 25,
            description: 'Partly Cloudy',
            icon: '02d',
            formatted: '25°C Partly Cloudy'
        };
    }
}
