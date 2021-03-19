//API - Fish Haven

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=edbff4ca4ebeb5d7d5278629c0ac7bb4&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('type').textContent = jsObject.list[0].weather[0].main;
        document.getElementById('current-temp').textContent = ~~jsObject.list[0].main.temp_max;
        document.getElementById('humid').textContent = ~~jsObject.list[0].main.humidity;
        document.getElementById('speed').textContent = ~~jsObject.list[0].wind.speed;


        const days = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,");
        const day1 = new Date(jsObject.list[0].dt_txt);
        document.getElementById('firstDay').textContent = days[day1.getDay()];
        const day2 = new Date(jsObject.list[8].dt_txt);
        document.getElementById('secondDay').textContent = days[day2.getDay()];
        const day3 = new Date(jsObject.list[16].dt_txt);
        document.getElementById('thirdDay').textContent = days[day3.getDay()];
        const day4 = new Date(jsObject.list[24].dt_txt);
        document.getElementById('fourthDay').textContent = days[day4.getDay()];
        const day5 = new Date(jsObject.list[32].dt_txt);
        document.getElementById('fifthDay').textContent = days[day5.getDay()];

        const day1Img = 'https://openweathermap.org/img/w/' + jsObject.list[6].weather[0].icon + '.png';
        document.getElementById('firstImg').setAttribute('src', day1Img);
        document.getElementById('firstTemp').textContent = ~~jsObject.list[6].main.temp;

        const day2Img = 'https://openweathermap.org/img/w/' + jsObject.list[14].weather[0].icon + '.png';
        document.getElementById('secondImg').setAttribute('src', day2Img);
        document.getElementById('secondTemp').textContent = ~~jsObject.list[14].main.temp;

        const day3Img = 'https://openweathermap.org/img/w/' + jsObject.list[22].weather[0].icon + '.png';
        document.getElementById('thirdImg').setAttribute('src', day3Img);
        document.getElementById('thirdTemp').textContent = ~~jsObject.list[22].main.temp;

        const day4Img = 'https://openweathermap.org/img/w/' + jsObject.list[30].weather[0].icon + '.png';
        document.getElementById('fourthImg').setAttribute('src', day4Img);
        document.getElementById('fourthTemp').textContent = ~~jsObject.list[30].main.temp;

        const day5Img = 'https://openweathermap.org/img/w/' + jsObject.list[38].weather[0].icon + '.png';
        document.getElementById('fifthImg').setAttribute('src', day5Img);
        document.getElementById('fifthTemp').textContent = ~~jsObject.list[38].main.temp;


      
    });