export class Extra {
    #name : string = "";

    constructor(name : string = "") {
        this.#name = name;
    }

    getName() {
        return this.#name
    }
    setName(name : string) {
        this.#name = name;
    }
}

export default Extra