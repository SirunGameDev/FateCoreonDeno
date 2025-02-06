export class Aspect {
    #description : string;

    #lifetime : string;

    #context : string;

    #freeUsage: number;

    constructor (desc : string , lifetime : string, context : string, freeUsage = 0) {
        this.#description = desc;
        this.#lifetime = lifetime;
        this.#context = context;
        this.#freeUsage = freeUsage;
    }
    getDescription() {
        return this.#description;
    }
    getLifetime() {
        return this.#lifetime;
    }
    getContext() {
        return this.#context;
    }

    getFreeUsage(){
        return this.#freeUsage;
    }

    addUses(add : number = 2) {
        this.#freeUsage += add;
    }

    useUsages(sub : number = 1) {
        this.#freeUsage -= sub;
    }

}