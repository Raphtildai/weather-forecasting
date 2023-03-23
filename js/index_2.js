// Creating object to store our results
let weather = {
	"apiKey": "84c4f226f62b4e0ec609d578d340e5e9",
	fetchWeather: function (city) {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey 
		).then((response) => response.json())
		.then((data) => this.displayweather(data));
	},
	
	// function to display weather
	displayweather: function (data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity}	= data.main;
		const { speed } = data.wind;
		console.log(name, icon, description, temp, humidity, speed);
		document.querySelector(".city").innerText = "Weather in " + name;
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
		document.querySelector(".temp").innerText = temp + " °c";
		document.querySelector(".description").innerText = "Description: "  + description;
		document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
		document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/hr";	
		document.querySelector(".weather").classList.remove("loading");
		document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')"
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


// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nairobi",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "59232e6ddcmsh1d0ad70d522ed9cp15163fjsn2176521e863f",
// 		"X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	// document.getElementById("temp").value = response.temp;
// 	console.log(response);
// });