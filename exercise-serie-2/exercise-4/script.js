//Check to see if script is linked properly.
console.log("This script is linked properly!");

// Create request

let request = new XMLHttpRequest();

request.open("GET", "https://character-database.becode.xyz/characters", true);

// functions

function modal () {

}

request.onload = function() {
  let data = JSON.parse(this.response);

  data.forEach(characters => {
    // create const's to createElement or GET ID

    const row1 = document.getElementById("row-1");
    const card = document.createElement("div");
    const h1 = document.createElement("h1");
    const cbody = document.createElement("div");
    const image = document.createElement("img");
    const desc = document.createElement("p");

    card.setAttribute("class", "card shadow d-flex align-items-center mt-5");
    cbody.setAttribute(
      "class",
      "card-body d-flex justify-content-center flex-column text-center"
    );
    image.setAttribute("class", "card-img-top card-title pt-3 pb-3 rounded");

    h1.textContent = characters.name;
    image.src = "data:image/gif;base64," + characters.image;
    desc.textContent = characters.shortDescription;

    row1.appendChild(card);
    cbody.appendChild(h1);
    card.appendChild(image);
    card.appendChild(cbody);
    cbody.appendChild(desc);
  });
};

request.send();
