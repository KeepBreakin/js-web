//Check to see if script is linked properly.
console.log("This script is linked properly!");

//Write your JS code here...

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open("GET", "https://api.punkapi.com/v2/beers", true);

request.onload = function() {
  // Begin accessing JSON data here
  let data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400)
    data.forEach(beers => {
      // create const's to createElement or GET ID
      const row1 = document.getElementById("row-1");
      const card = document.createElement("div");
      const image = document.createElement("img");
      const cbody = document.createElement("div");
      const h3 = document.createElement("h3");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");

      // give some attributes to div's, images, etc.

      image.setAttribute("class", "card-img-top card-title pt-3 pb-3 rounded");
      cbody.setAttribute(
        "class",
        "card-body d-flex justify-content-center flex-column text-center"
      );
      card.setAttribute("class", "card shadow d-flex align-items-center mt-5");

      // connect element to data from API

      image.src = beers.image_url;
      h3.textContent = beers.name;
      h4.textContent = beers.tagline;
      p.textContent = beers.description;

      // example: make image child of card, make cbody child of card
      card.appendChild(image);
      card.appendChild(cbody);
      row1.appendChild(card);
      cbody.appendChild(h3);
      cbody.appendChild(h4);
      cbody.appendChild(p);
    });
  else {
    console.log("error");
  }
};

// Send request
request.send();
