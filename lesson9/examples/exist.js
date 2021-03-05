const requestURL = "https://www.ahfx.com/person.php";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const person = jsonObject['person'];

        console.table(jsonObject); // temporary checking for valid response and data parsing

        let card = document.createElement('section');
        let name = document.createElement('h2');
        let password = document.createElement('p');
        let email = document.createElement('p');
        let eye = document.createElement('p');
        let citycountry = document.createElement('p');
        let children = document.createElement('p');
        let ip = document.createElement('p');
        let image = document.createElement('img');

        name.innerHTML = '<strong>Name: </strong>' + person.personal.name + ' ' + person.personal.last_name;
        password.innerHTML = '<strong>Password: </strong>' + person.online_info.password;
        email.innerHTML = '<strong>Email: </strong>' + person.online_info.email;
        eye.innerHTML = '<strong>Eye Color: </strong>' + person.personal.eye_color;
        citycountry.innerHTML = '<strong>City, Country: </strong>' + person.personal.city + ', ' + person.personal.country;
        children.innerHTML = '<strong>Children: </strong>' + person.marriage.children;
        ip.innerHTML = '<strong>IP Address: </strong>' + person.online_info.ip_address; 

        
        // if (person.marriage.children < 0)
        // {
        //     children.removeChild('p');
        // }
        

        image.setAttribute('src', "https://thispersondoesnotexist.com/image");
            
        card.appendChild(name);
        card.appendChild(password);
        card.appendChild(email);
        card.appendChild(eye);
        card.appendChild(citycountry);
        card.appendChild(children);
        card.appendChild(ip);
        card.appendChild(image);

        document.querySelector('div.dont-exist').appendChild(card);}
    );