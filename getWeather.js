async function getWeatherByZip(apiKey, zip, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    try {
        const res = await fetch(path)
        const json = await res.json()
        console.log(json)
        return {
            name: json.name,
            temp: json.main.temp,
            feels_like: json.main.feels_like,
            weather: json.weather[0].description
        } 
    } catch(error) {
        console.log(error.message)
    }
}

async function getWeatherByCity(apiKey, city, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?city=${city}&appid=${apiKey}&units=${units}`
    try {
        const res = await fetch(path)
        const json = await res.json()
        console.log(json)
        return {
            name: json.name,
            temp: json.main.temp,
            feels_like: json.main.feels_like,
            weather: json.weather[0].description
        } 
    } catch(error) {
        console.log(error.message)
    }
}

async function getWeatherByGeo(apiKey, lat, lon, units = 'imperial') {
    const path = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`
    try {
        const res = await fetch(path)
        const json = await res.json()
        console.log(json)
        return {
            name: json.name,
            temp: json.main.temp,
            feels_like: json.main.feels_like,
            weather: json.weather[0].description
        } 
    } catch(error) {
        console.log(error.message)
    }
}

export { getWeatherByZip, getWeatherByCity, getWeatherByGeo }