//fetching the data
fetch("http://localhost:3000/characters")
.then(response => response.json())
.then (data => renderList(data))


//selecting all elements from the dom 
const list = document.querySelector('.list')
const eachImage = document.querySelector('.detail-image')
const eachName = document.querySelector('.name')
const eachHouse = document.querySelector('.house')
const form = document.querySelector('#new-charachter')

//looping through the array
function renderList(data){
data.forEach(element => renderWizard(element))
}


//displaying every image on the top navbar
function renderWizard(character) {   
        // console.log(character)
        const image = document.createElement('img')
        image.src = character.image
        list.append(image)

//adding event listener to each image on top and displaying info about that character
    image.addEventListener('click', () => {
        eachImage.src = character.image
        eachName.textContent = character.name
        eachHouse.textContent = character.house
    })
}

//submitting the form
form.addEventListener('submit', (e) => {
    e.preventDefault();

// const newImg = document.createElement('img')
// newImg.src = e.target.new_image.value
// list.append(newImg)
  

//creating an object to send it to the db.json
const newObject = {
    name: e.target.new_name.value,
    house: e.target.new_house.value,
    image: e.target.new_image.value
}


//POST request 
fetch("http://localhost:3000/characters", {
    method: "POST",
    headers: {
        'Content-Type':"application/json",
    },
    body: JSON.stringify(newObject)

})
.then(response=> response.json())
.then(data => {
    //sending the new object to renderWizard function to display new image on the tob bar
    renderWizard(data)
})
})