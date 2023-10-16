let lon;
let lat;
let temperature = document.querySelector(".temp")
let summary = document.querySelector(".summary")
let loc = document.querySelector(".location")
let icon = document.querySelector(".icon")
const kelvin = 273.15;

window.addEventListener("load",() => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            lon = position.coords.longitude;
            lat = position.coords.longitude;
            const appid = "e96eb0e778e257d89231bddc0716d584";
            const url_base = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e96eb0e778e257d89231bddc0716d584';
            
            fetch(url_base)
            .then((response) => {
                return response.json();
            })

            .then((data) => {
                console.log("Esta es la data")
                console.log(data);
            temperature.textContent = 
                Math.floor(data.main.temp - kelvin) + "°C";

            summary.textContent = data.weather[0].description;
            loc.textContent = data.name + ", " + data.sys.country;    
            });
        });
    };
});