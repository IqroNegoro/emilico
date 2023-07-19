let fetchingWeather = async () => {
    let {data} = await axios.get('http://dataservice.accuweather.com/currentconditions/v1/202513?apikey=TADziGdDmLttfBFX2HAGTZGcSCKNJUvx');
    document.getElementById("weather").innerHTML = `${data[0].Temperature.Metric.Value}&deg;`
}

fetchingWeather();