let apiKey = "904e246e07c988e876a470a2e6a71750";
let button = document.getElementById("getWeather");

button.addEventListener("click", getWeather);

async function getWeather() {

    let city = document.getElementById("cityInput").value;

    let url = "https://api.openweathermap.org/data/2.5/weather?q="
        + city +
        "&units=metric&appid=" + apiKey;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.getElementById("cityName").innerText = data.name;

    document.getElementById("temperature").innerText =
"Temperature: " + data.main.temp + " °C";

    document.getElementById("description").innerText =
        "Weather: " + data.weather[0].description;

}
