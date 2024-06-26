export class Pokemon {
    constructor(data) {
        this.name = data.name;
        this.url = data.url;
    }
    get detailsHTMLTemplate() {
        return `
        <h1>Hello</h1>
    `
    }

}
