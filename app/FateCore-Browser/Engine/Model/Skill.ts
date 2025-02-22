export class Skill {
    #name : string = "";
    #value : number = 0;

    #SkillsOverview = [
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

    constructor(name : string, value : number) {
        if(value < 9 && value > -5) {
            this.#value = value;
        }
        else {
            throw new Error('Value not fitting')
        }
        // todo: Make Translations
        if(this.#SkillsOverview.find(element => name == element.DE)) {
            this.#name = name;
        }else {
            throw new Error('Skillname not fitting')
        }
    }
}