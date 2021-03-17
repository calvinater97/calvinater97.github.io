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