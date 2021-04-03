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


function buildTempleCard(temple, temp) {
    console.log(temple);

    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                     <img src="${temple.imageurl}" alt="${temple.name}">
                     <p>Address: <b>${temple.address}</b></p>
                     <p>Phone: <b>${temple.phone}</b></p>
                     <p>Email: <b>${temple.phone}</b></p>
                     <p>Servies: <b>${temple.services}</b></p>
                     <p>History: <b>${temple.history}</b></p>
                     <p>Schedule: <b>${temple.schedule}</b></p>
                     <p>Closed: <b>${temple.closed}</b></p>`;
    document.querySelector("#temples").appendChild(card);

}
//COME BACK TO THIS SECTION TO GET THE WEATHER WORKING RIGHT, RIGHT NOW IT DISPLAYS PRESTON TEMP TO CONSOLE!!!!!!!
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=edbff4ca4ebeb5d7d5278629c0ac7bb4&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var temp = document.createElement('div');
        temp = jsObject.list[0].main.temp;
        console.log(temp);
        templeCard = document.getElementById('temples');
        templeCard.appendChild(temp);

        //document.getElementById('temples').appendChild = jsObject.list[0].main.temp;
        //const temp = jsObject.list[0].main.temp;
    });