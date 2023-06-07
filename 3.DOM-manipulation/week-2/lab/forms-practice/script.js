let mushrooms = [
    {
        type: "Portobello",
        region: "North America",
        isEdible: true,
    },
    {
        type: "Chanterelle",
        region: "Europe",
        isEdible: true,
    },
    {
        type: "Death cap",
        region: "Europe",
        isEdible: false,
    },
    {
        type: "Shiitake",
        region: "Asia",
        isEdible: true,
    },
    {
        type: "Fly agaric",
        region: "Europe",
        isEdible: false,
    },
    {
        type: "Morel",
        region: "North America",
        isEdible: true,
    },
];
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    let typeInput = document.querySelector("#type");
    let regionInput = document.querySelector("#region");
    let isEdibleInput = document.querySelector("#isEdible");

    let type = typeInput.value;
    let region = regionInput.value;
    let isEdible = isEdibleInput.value === "true" 

    mushrooms.push({ type, region, isEdible });
    event.preventDefault();
    displayMushrooms()
});

let displayMushrooms = () => {
    mushrooms.forEach(mushroom => {
        console.log(mushroom)
        let fungi = document.querySelector('.fungi-container')
        let fungus = document.createElement('h4')
        let shroom = document.createElement('p')
        fungus.innerText = mushroom.type
        shroom.innerText = mushroom.region
        fungi.appendChild(fungus)
        fungi.appendChild(shroom)
    })
};
