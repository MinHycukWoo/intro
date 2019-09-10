const weather = document.querySelector(".Weather")
const weather2 = document.querySelector(".Weather2")

const API_KEY="60a4d846a72ac1c2c35fb0da5606c7ac";
const COORDS = "coords";

function getWeather(lat,lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
).then(function(response){
    //console.log(response);
    //console.log(response.json());
    return response.json();
}).then(function(json){
    /*console.log(resp);
                console.log("현재온도 : "+ (resp.main.temp- 273.15) );
                console.log("현재습도 : "+ resp.main.humidity);
                console.log("날씨 : "+ resp.weather[0].main );
                console.log("상세날씨설명 : "+ resp.weather[0].description );
                console.log("날씨 이미지 : "+ resp.weather[0].icon );
                console.log("바람   : "+ resp.wind.speed );
                console.log("나라   : "+ resp.sys.country );
                console.log("도시이름  : "+ resp.name );
                console.log("구름  : "+ (resp.clouds.all) +"%" ); 
                */ 
    console.log(json);
    //console.log(json.weather);
    console.log(json.weather[0].main);
    console.log(json.weather[0].description);
    console.log(json.sys.country)
    //const temperature = json.main.temp;
    const temperature = json.main.temp + "℃";
    const place = json.name;
    const weather_main = json.weather[0].main;
    const weather_description = json.weather[0].description;
    const country = json.sys.country;
    weather.innerText = `${weather_main}  ${temperature}    ${place}  ${country}`
})
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}



function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords()
}

init()