import { Ui_module } from "./ui-module.js";

export class Details {
    constructor(id) {
        this.ui = new Ui_module();

        document.getElementById("btnEx").addEventListener("click", function () {
            document.getElementById("game").classList.remove("d-none");
            document.getElementById("details").classList.add("d-none");
        });
        this.getDetails(id);
    }

    getDetails(idGame) {
        document.getElementById("loading").classList.remove("d-none");

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "d76d93cde8msh597ec6bf4d61e52p10cf47jsnadf176b9ced6",
                "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        };

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGame}`, options)
            .then((response) => response.json())
            .then((response) => this.ui.getDataDetails(response))
            .catch((err) => console.error(err))
            .finally(() => {
            document.getElementById("loading").classList.add("d-none");
        });
    }
}