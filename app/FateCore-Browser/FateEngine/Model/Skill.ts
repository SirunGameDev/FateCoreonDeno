import { Action } from "./Action.ts";

export class Skill {
    #name : string = "";
    #value : number = 0;
    static overcome = Action.ActionOverview[0];
    static createAdventage = Action.ActionOverview[1];
    static attack =  Action.ActionOverview[2];
    static defend =  Action.ActionOverview[3];
    static SkillsOverview = [
        {DE: "Athletik", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Charisma", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Diebeskunst", overcome:true, createAdventage: true, attack:false, defend:false },
        {DE: "Empathie", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Fahren", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Handwerk", overcome:true, createAdventage: true, attack:false, defend:false },
        {DE: "Heimlichkeit", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Kämpfen", overcome:true, createAdventage: true, attack:true, defend:true },
        {DE: "Kontakte", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Kraft", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Nachforschungen", overcome:true, createAdventage: true, attack:false, defend:false },
        {DE: "Provozieren", overcome:true, createAdventage: true, attack:true, defend:false },
        {DE: "Ressourcen", overcome:true, createAdventage: true, attack:false, defend:false },
        {DE: "Schießen", overcome:true, createAdventage: true, attack:true, defend:false },
        {DE: "Täuschung", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Wahrnehmung", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Wille", overcome:true, createAdventage: true, attack:false, defend:true },
        {DE: "Wissen", overcome:true, createAdventage: true, attack:false, defend:false },
    ];

    constructor(name : string, value : number = 0) {
        if(value < 9 && value > -5) {
            this.#value = value;
        }
        else {
            throw new Error('Value not fitting')
        }
        // todo: Make Translations
        if(Skill.SkillsOverview.find(element => name == element.DE)) {
            this.#name = name;
        }else {
            throw new Error('Skillname not fitting')
        }
    }
    getName() : string {
        return this.#name;
    }

    getValue() : number {
        return this.#value;
    }

    makeAction() {
        return Action.check(this.#value);
    }
}