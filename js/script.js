const hamburgerbutton = document.getElementById("hamburger-menu");
const navLinks = document.querySelector("nav ul");
hamburgerbutton.addEventListener("click", ()=>{
    navLinks.classList.toggle("show");
});

const trailContainer = document.getElementById("trail-container");

function displayTrails(trails){
    trails.forEach(trail => {
        const card = document.createElement("div");
        card.innerHTML = `
        <h3>${trail.name}</h3>
        <p>${trail.location}</p>
        <p>${trail.difficulty}</p>
        <p>${trail.distance}</p>
        <p>${trail.elevationGain}</p>
        <p>${trail.estimatedTime}</p>

        `;
        trailContainer.appendChild(card);
    });
}

fetch("data/trails.json")
    .then(response => response.json())
    .then(trails => {
        displayTrails(trails);
    });



