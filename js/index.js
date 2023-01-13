// API parameters
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59232e6ddcmsh1d0ad70d522ed9cp15163fjsn2176521e863f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
 
// Creating an object
let weather = {
    fetchWeather: function (city) {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city +'', options)
        .then(response => response.json())
        .then(response => this.displayweather(response, city))
        .catch(err => console.error(err));
    },
	
	// function to display weather
	displayweather: function (data, city) {
        const diff = data.max_temp - data.min_temp;
		document.querySelector(".city").innerText = "Weather in " + city;
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/03d.png"
		document.querySelector(".temp").innerText = data.temp + " °c";
		document.querySelector(".description").innerText = "Temp range: "  + diff;
		document.querySelector(".humidity").innerText = "Humidity: " + data.humidity + " %";
		document.querySelector(".wind").innerText = "Wind Speed: " + data.wind_speed + " km/hr";	
		document.querySelector(".weather").classList.remove("loading");
		document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ city +"')";
	},
	search: function () {
		this.fetchWeather(document.querySelector(".search-bar").value);
	}
};

// Fetching city from the user
document.querySelector(".search button").addEventListener(
	"click", 
	function () {
		weather.search();
});

// Adding event listener when the user clicks enter
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
	if(event.key == "Enter"){
		weather.search()
	}
});

//Data to be loaded when the page first loads
weather.fetchWeather("Eldoret");