export class Pokemon {
    constructor(data) {
        this.name = data.name;
        this.url = data.url;
    }
    get detailsHTMLTemplate() {
        return `
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <img class="img-fluid"
            src="${this.url}"
            alt="" />
        <p class="card-text">Some quick example text to build on.</p>
        <p class="card-text">weight</p>
        <p class="card-text">height</p>
        <p class="card-text">types</p>
    </div>

    `
    }



}
