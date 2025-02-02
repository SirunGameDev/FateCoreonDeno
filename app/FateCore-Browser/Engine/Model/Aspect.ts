export class Aspect {
    #description : string;

    #lifetime : string;

    #context : string;

    #freeUsage: int;

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

    addUses(add : int = 2) {
        this.#freeUsage += add;
    }

    useUsages(sub : int = 1) {
        this.#freeUsage -= sub;
    }

}