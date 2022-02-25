let info = document.querySelector('.info')
async function findCity(){
    let cityname = document.querySelector('.cityname').value
    let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.toLowerCase()}&appid=0c7a6c84617d7a03b44c40f49185f42c`)
    let res = await api.json()
    console.log(res.name);
    if(!res.name){
        info.innerHTML = `<h4>Erorr city name</h4>`
        return
    }else{
        cityname = ''
        info.innerHTML = `<h4>Weather of: ${res.name}</h4>
        <h4>Temprature: ${(res.main.temp - 273).toFixed(2)}</h4>
        <h4>Wind Speed: ${res.wind.speed} km/h</h4>
        <h4>Sky Condition: ${res.weather[0].description}</h4>`
        
    }
    

}