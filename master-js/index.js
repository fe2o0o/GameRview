async function getdata() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd76d93cde8msh597ec6bf4d61e52p10cf47jsnadf176b9ced6',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=MMORPG', options)
    let response = await api.json();
    console.log(response[0]);
}

getdata();
console.log(document.getElementById("loading"));

// console.log(document.querySelectorAll(".link")[0].getAttribute("data-category"));
// console.log(document.querySelectorAll("#navbarNav ul li a"));
// console.log(document.querySelector("#navbarNav ul li .active"));
import { Game } from "./game.js";
new Game();
