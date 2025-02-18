import { Character } from "../Model/Character.ts";
export class ArchtypeCharacter {
    public static getArchtypes() {
        return [
            this.getJohnDoe(),
            this.getMaxMusterman()
        ]
    }
    public static getJohnDoe() {
        const CharacterObj = new Character();
        CharacterObj.setName("John Doe");
        CharacterObj.setDescription("Ein Max Musterman-Charakter");
        CharacterObj.setPronouns("divers");
        return CharacterObj;
    }

    public static getMaxMusterman() {
        const CharacterObj = new Character();
        CharacterObj.setName("Max Musterman");
        CharacterObj.setDescription("Ein Max Musterman-Charakter");
        CharacterObj.setPronouns("divers");
        return CharacterObj;
    }
}