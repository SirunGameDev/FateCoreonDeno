import  { Skill } from "./Skill.ts";
export class Stunt {
    #name : string = "";
    #description : string = "";
    #kind?: string = "";
    #effectedSkill?: Skill;
    #effectedAction? : string;

    static kindOverview = [
        {description: "allowActionforSkill"},
        {description: "addBonustoAction"},
        {description: "allowExceptionofRule"},
    ]
    
    constructor (name : string, description : string = "") {
        this.#name = name;
        this.#description = description;
    }

    getName() {
        return this.#name
    }
    getDescription() {
        return this.#description
    }
}