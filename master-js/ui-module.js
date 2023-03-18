export class Ui_module{
    getDataGame(data) {
        let game = ``;
        for (let i = 0; i < data.length; i++){
            game += `
                <div class="col">
                    <div data-id="${data[i].id}" class="item p-0 h-100 card-border">
                        <div class="initem bg-transparent  p-3">
                            <figure>
                                <img src="${data[i].thumbnail}" class="w-100" alt="">
                            </figure>
                            <figcaption class="p-2">
                                <div class="d-flex justify-content-between align-items-center ">
                                    <p class="m-0 text-white">${data[i].title}</p>
                                    <button class="btn btn-primary p-1">Free</button>
                                </div>
                                <p class="pt-2 small text-center text-muted">${data[i].short_description.split(" ",5)}</p>
                            </figcaption>
                            <footer class="">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="foot-style p-1 rounded-pill ">${data[i].genre}</span>
                                    <span class="foot-style p-1 rounded-pill ">${data[i].platform}</span>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            `;
        }
        document.getElementById("gameSet").innerHTML=game;
    }

    getDataDetails(data) {
        const details = `
            <div class="col-md-4">
                <img src="${data.thumbnail}" class="w-100" alt="">
            </div>
            <div class="col-md-7 text-white">
                <h2>Title: <span>${data.title}</span></h2>
                <p>Category: <span>${data.genre}</span></p>
                <p>Platform: <span>${data.platform}</span></p>
                <p>Status: <span>${data.status}</span></p>
                <p>
                    ${data.description}
                </p>
                <a href="${data.game_url}" class="btn btn-outline-warning" target="_blank">show game</a>
            </div>
        `;
        document.getElementById("detailsSet").innerHTML = details;
    }

}