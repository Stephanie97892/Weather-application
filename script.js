const apiKey= "00361bf70d0ddd1afaf09597c7bcf4eb";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";  // 

        const searchBox = document.querySelector(".search input"); // targeting data from searchbox 
        const searchBtn = document.querySelector(".search button"); // pseudo element , they dont have a class but we 
        const weatherIcon = document.querySelector(".weather-icon");  // targets the main weather picture whihc will change


        async function checkWeather(city){    // it required the city as an argument  
            const Response = await fetch(apiUrl + city +  `&appid=${apiKey}`); // concatenate the URL, also with a template literal 
            if(Response.status === 404){   // code for error
                document.querySelector(".error").style.display="block"; // if error is true display as block 
                document.querySelector(".weather").style.display="none"; // don't display weather 
            }
            else{
                var data  = await Response.json(); 

            console.log(data);
             // to see object with weather data 

            // 1.the function is building the url based on what city is sent as the argument  
            // 2. Response is the variable that fetches data from a server waiting for it. 
            // 3. Data variable - waits for the varibale 'response' and converts it using json to a usable JS subject which you see in the console. 
            // 4. using console.log helps us see how to target and use the data in the object

            
            document.querySelector(".weather_decs").innerHTML = data.weather[0].description
            document.querySelector(".city").innerHTML = data.name; // check the api object and retireve data using .notation  
            document.querySelector(".temp").innerHTML = Math.round (data.main.temp) + "°C ";  // math.round keeps the integer whole
            document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";  // getting the data from the object 
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";

            // 5. Here we use query selectors to target the clases and add the new data
            // 6. the new data come from the object using .notation , like a library key search name, then names with A, then so on.
            // 7. now to change the main image depending on the weather 

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "assets/cloud12.png";
                document.body.style.backgroundColor = "( hwb(185 54% 33%), #575568)"; // Light Steel Blue
                                           
            }
            else if(data.weather[0].main == "Clear"){ 
                weatherIcon.src = "assets/clear_sky.png"; 
                document.querySelector('.card').style.background = "linear-gradient( hwb(181 12% 35%), #e5e5e5)"; // Light Steel Blue gradient           
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "assets/rain.png"; 
                document.querySelector('.card').style.background = "linear-gradient(hwb(181 12% 35%), #b0c4de)";            
            }
            else if(data.weather[0].main == "Drizzle"){  
                weatherIcon.src = "assets/drizzle2.png"; 
                document.querySelector('.card').style.background = "linear-gradient( hwb(186 51% 22%), #908ca3)";            
            }
            else if(data.weather[0].main == "Mist"){   
                weatherIcon.src = "assets/mist.png";    
                document.querySelector('.card').style.background = "linear-gradient( hwb(186 53% 43%), #dad9df)";         
            }
            document.querySelector(".weather").style.display = "block"; // it will show the weather info 
            document.querySelector(".error").style.display="none"; // it will hide the error message 
             } 
    }
        searchBtn.addEventListener("click",()=>{
            checkWeather(searchBox.value);   // calls the function to console log data to use. 
        }) 
        // 1. added an event listener to the search button variable
        // 2. when clicked run the asyn function checkWeather using the searchbox value
