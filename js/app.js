const container = document.querySelector(".container")
const coffees = [
    {
        name : "Perspiciatis", image : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
        name : "Voluptatem", image : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
        name : "Explicabo", image : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
        name : "Rchitecto", image : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
        name : "Beatae", image : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
        name : "Vitae", image : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
        name : "Inventore", image : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
        name : "Veritatis", image : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    },
    {
        name : "Accusantium", image : "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
    }

]

const showCoffes = () => {
    let output = ""
    coffees.forEach(
        ({name,image}) => 
        (output += `
        <div class="card">
        <img class = "card--avatar" src=${image}>
        <h1 class="card--title"> ${name}</h1>
        <a class="card--link" href="#"> Taste </a>
        </div>
        `)
    )
    container.innerHTML = output
}
document.addEventListener("DOMContentLoaded",showCoffes)

if("serviceWorker" in navigator){
    window.addEventListener("load", function(){
        navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}