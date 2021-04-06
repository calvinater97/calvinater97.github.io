window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    const requestURL = "json/temples.json"
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key, temple]) => {
                buildTempleCard(temple);
            });
        });
})


function buildTempleCard(temple) {
    console.log(temple);

    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                     <img src="${temple.imageurl}" alt="${temple.name}">
                     <p>Address: <b>${temple.address}</b></p>
                     <p>Phone: <b>${temple.phone}</b></p>
                     <p>Email: <b>${temple.email}</b></p>
                     <p>Servies: <b>${temple.services}</b></p>
                     <p>History: <b>${temple.history}</b></p>
                     <p>Schedule: <b>${temple.schedule}</b></p>
                     <p>Closed: <b>${temple.closed}</b></p>`;
    document.querySelector("#temples").appendChild(card);

}
//Idaho Falls
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5596475&appid=edbff4ca4ebeb5d7d5278629c0ac7bb4&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var temp = document.createElement('div');
        temper = ~~jsObject.list[0].main.temp;
        temp.innerHTML = `<p>Current Temperature in Idaho Fall: ${temper}&deg;F<p>`;
        //console.log(temp);

        document.querySelector("#tem").appendChild(temp);
    });

//Rexburg
const apiURL1 = "https://api.openweathermap.org/data/2.5/forecast?id=5605242&appid=edbff4ca4ebeb5d7d5278629c0ac7bb4&units=imperial";
fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var temp = document.createElement('div');
        temper = ~~jsObject.list[0].main.temp;
        temp.innerHTML = `<p>Current Temperature in Rexburg: ${temper}&deg;F<p>`;
        //console.log(temp);

        document.querySelector("#tem").appendChild(temp);
    });

//Kansas City
const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=4393217&appid=edbff4ca4ebeb5d7d5278629c0ac7bb4&units=imperial";
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var temp = document.createElement('div');
        temper = ~~jsObject.list[0].main.temp;
        temp.innerHTML = `<p>Current Temperature in Kansas City: ${temper}&deg;F<p>`;
        //console.log(temp);

        document.querySelector("#tem").appendChild(temp);
    });

//Oklahoma City
const apiURL3 = "https://api.openweathermap.org/data/2.5/forecast?id=4544349&appid=edbff4ca4ebeb5d7d5278629c0ac7bb4&units=imperial";
fetch(apiURL3)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var temp = document.createElement('div');
        temper = ~~jsObject.list[0].main.temp;
        temp.innerHTML = `<p>Current Temperature in Oklahoma City: ${temper}&deg;F<p>`;
        //console.log(temp);

        document.querySelector("#tem").appendChild(temp);
    });