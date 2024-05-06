const apikey = "15f91b01768e9ec87ebc96b011818e9d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox  = document.querySelector(".search input");
const searchbtn  = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main=="Clouds"){
           weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "images/clear.png"
        }
        
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src = "images/rain.png"
        
        }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.src = "images/mist.png"
        }
        
        document.querySelector(".weather").style.display = "block";  
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    
    
}
//checkWeather();
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
searchbox.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        checkWeather(searchbox.value);
    }
})