const weatherContainer = document.querySelector('#weather');
const weather = document.querySelector('#weather p');
const city = document.querySelector('#weather span:last-child');
const API_KEY = "cf77642be28ae0294ab62bd814717a89";

function onGeoOk(position) {
    const { latitude, longitude } = position.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    // weather : data.weather.main
    // weather icon : data.weather.icon
    // temperature : data.main.temp
    // city : data.name
    // wicon url : http://openweathermap.org/img/w/${weather icon}.png
    fetch(url).then(response => response.json()).then(data => {
        const weatherImg = document.createElement('img');
        const temperature = document.createElement('span');
        const iconStr = data.weather[0].icon;
        // 이게 <img></img> 에 추가가 안 되네?
        weatherImg.src = `http://openweathermap.org/img/w/${iconStr}.png`;
        temperature.innerText = `/ ${Math.ceil(data.main.temp)}°`;
        weather.appendChild(weatherImg);
        weather.appendChild(temperature);
        city.innerText = data.name;
    });
}

function onGeoError(error) {
    alert("Cannot find your current location!");
}

// 1st argument : callback fn (when approved) => get GeolocationPosition object as input
// 2nd argument : callback fn (when rejected) => error handling
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);