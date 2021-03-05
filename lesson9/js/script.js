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

        p_name.textContent = towns[5].name;
        p_motto.textContent = towns[5].motto;
        p_founded.textContent = "Year Founded: " + towns[5].yearFounded;
        p_pop.textContent = "Population: " + towns[5].currentPopulation;
        p_rain.textContent = "Average Rainfall: " + towns[5].averageRainfall;
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

        s_name.textContent = towns[6].name;
        s_motto.textContent = towns[6].motto;
        s_founded.textContent = "Year Founded: " + towns[6].yearFounded;
        s_pop.textContent = "Population: " + towns[6].currentPopulation;
        s_rain.textContent = "Average Rainfall: " + towns[6].averageRainfall;
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

        f_name.textContent = towns[1].name;
        f_motto.textContent = towns[1].motto;
        f_founded.textContent = "Year Founded: " + towns[1].yearFounded;
        f_pop.textContent = "Population: " + towns[1].currentPopulation;
        f_rain.textContent = "Average Rainfall: " + towns[1].averageRainfall;
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

        document.querySelector('div.towns').appendChild(town);
    });