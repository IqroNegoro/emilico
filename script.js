let fetchingWeather = async () => {
    let {current_weather} = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.7063&longitude=108.557&current_weather=true').then(res => res.json());
    document.getElementById("weather").innerHTML = `${current_weather.temperature}&deg;`
}

fetchingWeather();

let date = new Intl.DateTimeFormat("id", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: 'Asia/Jakarta'
}).format(+new Date())

document.getElementById("date").textContent = date;