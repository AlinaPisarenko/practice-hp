const charactersList = document.querySelector(".list");
let eachImg = document.querySelector(".detail-image")


fetch("http://localhost:3000/characters")
    .then((response) => response.json())
    .then((data) => {
      renderCharacter(data);
    })
    .catch((err) => console.log(err));


function renderCharacter(characters) {
    characters.forEach((character) => {

        let img = document.createElement("img");
        img.src = character.image;
        charactersList.appendChild(img);
    
        // adding event listener to each photo
        img.addEventListener("click", () => {
          eachImg.src = character.image;
         
        });
    })
}