
 var city = "Riyadh"; 

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=7d724d28afd81d8bfcc1baad54edeb46", function(data){
console.log(data);
var name = data.name;
var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp = Math.floor(data.main.temp);
var weathername = data.weather[0].main;
$(".name").append(name);
$(".icon").attr('src', icon);
$(".weather").append(weathername)
$(".temp").append(temp);
});
