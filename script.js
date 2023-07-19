let fetchingWeather = async () => {
    let {data} = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=-6.7063&longitude=108.557&current_weather=true');
    console.log(data)
    document.getElementById("weather").innerHTML = `${data.current_weather.temperature}&deg;`
}

fetchingWeather();