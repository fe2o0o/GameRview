import { Details } from "./details.js";
import { Ui_module } from "./ui-module.js";

export class Game{
    constructor() {
        this.getGames("mmorpg");
        document.querySelectorAll("#navbarNav ul li a").forEach((ele) => {
            ele.addEventListener("click", (e) => {
                document.querySelector("#navbarNav ul li .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.getAttribute("data-category"));
                
            })
        });
        this.ui = new Ui_module();
    }

    async getGames(cat) {
        document.getElementById("loading").classList.remove("d-none"); 
        const options = {
            method: "GET",
            headers: {
            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            Accept: "application/json",
            "Content-Type": "application/json",
            },
        };
    
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
        const response = await api.json();
        this.ui.getDataGame(response);
        this.startShow();
        document.getElementById("loading").classList.add("d-none"); 
    }

    startShow() {
        document.querySelectorAll(".item").forEach((ele) => {
            ele.addEventListener("click", () => {
                const id = ele.getAttribute("data-id");
                this.showDetails(id);
            } )
        })
    }

    showDetails(idG) {
        const detail = new Details(idG);
        document.getElementById("game").classList.add("d-none");
        document.getElementById("details").classList.remove("d-none");
    }
}