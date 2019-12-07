var weatherConditions = new XMLHttpRequest();
var cObj;
var tempNum;
var celsius;
var fahrenheit;
var isFahrenheit;
var newTemp;

weatherConditions.open('GET', "http://api.openweathermap.org/data/2.5/forecast?zip=83254,us&units=imperial&cnt=40&appid=b672d8e86004b2a981b233ddf9dc4ea2", true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        tempNum = Math.round(cObj.list[0].main.temp);
        document.getElementById("location").innerHTML = cObj.city.name + ", ID";
        var date_raw = cObj.list[0].dt_txt;
        date_raw = date_raw.substring(5,11);
        document.getElementById("day").innerHTML = date_raw;
        document.getElementById("weather").innerHTML = cObj.list[0].weather[0].description;
        document.getElementById("temperature").innerHTML = tempNum + "&deg" + "F";
        document.getElementById("desc").innerHTML = "Wind Speed " +cObj.list[0].wind.speed;
        document.getElementById("icon").src;

        var date_raw = cObj.list[8].dt_txt;
        date_raw = date_raw.substring(5,11);
        document.getElementById("r1c1").innerHTML = date_raw;
        document.getElementById("r1c2").src;
        document.getElementById("r1c3").innerHTML = Math.round(cObj.list[8].main.temp) + "&deg";
        document.getElementById("r1c4").innerHTML = cObj.list[8].wind.speed;

        var date_raw = cObj.list[16].dt_txt;
        date_raw = date_raw.substring(5,11);
        document.getElementById("r2c1").innerHTML = date_raw;
        document.getElementById("r2c2").src;
        document.getElementById("r2c3").innerHTML = Math.round(cObj.list[16].main.temp) + "&deg";
        document.getElementById("r2c4").innerHTML = cObj.list[16].wind.speed;

        var date_raw = cObj.list[24].dt_txt;
        date_raw = date_raw.substring(5,11);
        document.getElementById("r3c1").innerHTML = date_raw;
        document.getElementById("r3c2").src;
        document.getElementById("r3c3").innerHTML = Math.round(cObj.list[24].main.temp) + "&deg";
        document.getElementById("r3c4").innerHTML = cObj.list[24].wind.speed;

        var date_raw = cObj.list[32].dt_txt;
        date_raw = date_raw.substring(5,11);
        document.getElementById("r4c1").innerHTML = date_raw;
        document.getElementById("r4c2").src;
        document.getElementById("r4c3").innerHTML = Math.round(cObj.list[32].main.temp) + "&deg";
        document.getElementById("r4c4").innerHTML = cObj.list[32].wind.speed;
    }
};

function toggleTempUnit(divElement) {
    if(isFahrenheit) {
        isFahrenheit = false;
        let celsius = Math.round((5 / 9) * (tempNum - 32));
        divElement.innerHTML = celsius + "&deg" + "C";
        
    } else {
        let newTemp = celsius;
        isFahrenheit = true;
        let fahrenheit = Math.round((9 / 5) * (newTemp + 32));
        divElement.innerHTML = fahrenheit + "&deg" + "F"
    }  
};

