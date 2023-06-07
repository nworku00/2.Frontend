let facts = document.querySelector(".facts");
let image = document.querySelector("image");
let i = Math.floor(Math.random() * 5);
fetch("https://cat-fact.herokuapp.com/facts")
    .then((response) => response.json())
    .then((data) => {
        facts.innerText = data[i].text;
    });

let catsImgDiv = document.querySelector(".catsImgDiv");
catsImgDiv.innerHTML = "";
fetch("https://randomfox.ca/floof/")
    .then((response) => response.json())
    .then((data) => {
        let catsImgUrl = data.link;
        let catImgEl = document.createElement("img");
        catImgEl.setAttribute("src", `${catsImgUrl}`);
        catImgEl.classList.add("showcase");
        let catsImgDiv = document.querySelector(".catsImgDiv");
        catsImgDiv.appendChild(catImgEl);
    })
    .catch((err) => console.log(err));
