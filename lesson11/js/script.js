window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    window.onresize = () => {
        if (window.innerWidth > 760) mainnav.classList.remove('responsive');
    };

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

    //Creates the date at the bottom of the site.
    var mydate = new Date();
    var year = mydate.getFullYear();
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,");
    var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

    var myDate = document.getElementById("date");
    myDate.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year;

    //Make the banner appear and dissapear depending if it is friday.
    const parkfood = document.querySelector('#banner');

    if (day != 5) {
        parkfood.classList.toggle("nobanner");
    } else {
        parkfood.classList.remove("nobanner");
    }

})

//Adjusts the rating in the form.
function adjustRange(severity) {
    document.getElementById("rangevalue").innerHTML = severity;
}

//Index page.
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        let town = document.createElement('section');
        let data = document.createElement('div');
        data.className = 'data';

        let preston = document.createElement('div');
        preston.className = 'card';
        let p_elements = document.createElement('div');
        p_elements.className = 'elements';
        let p_name = document.createElement('h2');
        let p_motto = document.createElement('h5');
        let p_founded = document.createElement('p');
        let p_pop = document.createElement('p');
        let p_rain = document.createElement('p');
        let p_image = document.createElement('img');

        p_name.textContent = towns[6].name;
        p_motto.textContent = towns[6].motto;
        p_founded.textContent = "Year Founded: " + towns[6].yearFounded;
        p_pop.textContent = "Population: " + towns[6].currentPopulation;
        p_rain.textContent = "Average Rainfall: " + towns[6].averageRainfall;
        p_image.setAttribute('src', 'images/preston.jpg');

        p_elements.appendChild(p_name);
        p_elements.appendChild(p_motto);
        p_elements.appendChild(p_founded);
        p_elements.appendChild(p_pop);
        p_elements.appendChild(p_rain);
        preston.appendChild(p_elements);
        data.appendChild(preston);
        preston.appendChild(p_image);


        let soda = document.createElement('div');
        soda.className = 'card';
        let s_elements = document.createElement('div');
        s_elements.className = 'elements'
        let s_name = document.createElement('h2');
        let s_motto = document.createElement('h5');
        let s_founded = document.createElement('p');
        let s_pop = document.createElement('p');
        let s_rain = document.createElement('p');
        let s_image = document.createElement('img');

        s_name.textContent = towns[0].name;
        s_motto.textContent = towns[0].motto;
        s_founded.textContent = "Year Founded: " + towns[0].yearFounded;
        s_pop.textContent = "Population: " + towns[0].currentPopulation;
        s_rain.textContent = "Average Rainfall: " + towns[0].averageRainfall;
        s_image.setAttribute('src', 'images/soda.jpg');

        s_elements.appendChild(s_name);
        s_elements.appendChild(s_motto);
        s_elements.appendChild(s_founded);
        s_elements.appendChild(s_pop);
        s_elements.appendChild(s_rain);
        soda.appendChild(s_elements);
        data.appendChild(soda);
        soda.appendChild(s_image);


        let fish = document.createElement('div');
        fish.className = 'card';
        let f_elements = document.createElement('div');
        f_elements.className = 'elements'
        let f_name = document.createElement('h2');
        let f_motto = document.createElement('h5');
        let f_founded = document.createElement('p');
        let f_pop = document.createElement('p');
        let f_rain = document.createElement('p');
        let f_image = document.createElement('img');

        f_name.textContent = towns[2].name;
        f_motto.textContent = towns[2].motto;
        f_founded.textContent = "Year Founded: " + towns[2].yearFounded;
        f_pop.textContent = "Population: " + towns[2].currentPopulation;
        f_rain.textContent = "Average Rainfall: " + towns[2].averageRainfall;
        f_image.setAttribute('src', 'images/fish.jpg');

        f_elements.appendChild(f_name);
        f_elements.appendChild(f_motto);
        f_elements.appendChild(f_founded);
        f_elements.appendChild(f_pop);
        f_elements.appendChild(f_rain);
        fish.appendChild(f_elements);
        data.appendChild(fish);
        fish.appendChild(f_image);

        town.appendChild(data);

        document.querySelector('.towns').appendChild(town);

    });

//Events

const requestURLa = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURLa)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (var i = 0; i < towns[6].events.length; i++){
            let box = document.createElement("div");
            let event = document.createElement("p");
        
            event.textContent = towns[6].events[i];
        
            box.appendChild(event);
        
            document.querySelector('#events').appendChild(box);


}});

//API - Preston

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=edbff4ca4ebeb5d7d5278629c0ac7bb4&units=imperial";
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