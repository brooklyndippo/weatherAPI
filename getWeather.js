async function getWeather(apiKey, zip) {
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    try {
        const res = await fetch(path)
        const json = await res.json()
        return json 
    } catch(error) {
        console.log(error.message)
    }
}

export { getWeather }