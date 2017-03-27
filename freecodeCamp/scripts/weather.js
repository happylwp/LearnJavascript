var keys = "53314765b56d4c36bd49035c7345bbbc";
var baseUrl = "https://free-api.heweather.com/v5/now?";

var country = document.getElementById("countryPosition");
var city = document.getElementById("cityPosition");
var currentTime = document.getElementById("time");
var temperature = document.getElementById("temperature");
var forecast = document.getElementById("forecast");

$.getJSON("http://ipinfo.io", function(data) {
    var dataIp = data.ip;
    getweather(dataIp);
});

function getweather(Ip) {
    $.getJSON(baseUrl + "city" + "=" + Ip + "&key=" + keys, function(datas) {
        // console.log(datas.HeWeather5[0].basic);
        country.innerText = datas.HeWeather5[0].basic["cnty"];
        city.innerText = datas.HeWeather5[0].basic["city"];
        currentTime.innerHTML = datas.HeWeather5[0].basic.update["loc"].split(" ")[1];
        var Dates = datas.HeWeather5[0].now;
        temperature.innerText = Dates.tmp + "°C";
        forecast.innerText = Dates.cond["txt"];
    });
}

function change(text) {
    var tempText = text.innerText;
    if (tempText.indexOf("F") === -1) {
        text.innerText = tempText.split("°C")[0] * 1.8 + 32 + "°F";
    } else {
        text.innerText = parseFloat((tempText.split("°F")[0] - 32) / 1.8 + "°C");
    }
}