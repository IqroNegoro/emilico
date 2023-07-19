let weather;
let fetchingWeather = async () => {
    let data = await fetch('http://dataservice.accuweather.com/currentconditions/v1/202513?apikey=TADziGdDmLttfBFX2HAGTZGcSCKNJUvx').then(res => res.json()).then(res => weather = res);
    document.getElementById("weather").innerHTML = `${weather[0].Temperature.Metric.Value}&deg;`
}

fetchingWeather();