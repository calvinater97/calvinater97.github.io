window.addEventListener('load', ()=>{
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=> {mainnav.classList.toggle('responsive')},false);

    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');};

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

//Creates the date at the bottom of the site.
    var mydate = new Date();
    var year = mydate.getFullYear();
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    var myDate = document.getElementById("date");
    myDate.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;

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

        for (let i = 0; i < towns.length; i++) {
            let town = document.createElement('section');
            let data = document.createElement('div')
            let name = document.createElement('h2');
            let motto = document.createElement('h5');
            let founded = document.createElement('p');
            let pop = document.createElement('p');
            let rain = document.createElement('p');
            let image = document.createElement('img');

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            founded.textContent = "Year Founded: " + towns[i].yearFounded;
            pop.textContent = "Population: " + towns[i].currentPopulation;
            rain.textContent = "Average Rainfall: " + towns[i].averageRainfall;
            image.setAttribute('src', 'https://source.unsplash.com/random');

            data.appendChild(name);
            data.appendChild(motto);
            data.appendChild(founded);
            data.appendChild(pop);
            data.appendChild(rain);
            town.appendChild(data)
            town.appendChild(image);

            document.querySelector('div.towns').appendChild(town);}
    });
