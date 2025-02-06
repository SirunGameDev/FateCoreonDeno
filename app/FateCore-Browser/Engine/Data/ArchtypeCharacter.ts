import { Character } from "../Model/Character.ts";
export class ArchtypeCharacter {
    public static getJohnDoe() {
        const CharacterObj = new Character();
        CharacterObj.setName("John Doe");
        CharacterObj.setDescription("Ein Max Musterman-Charakter");
        CharacterObj.setPronouns("divers");
        return CharacterObj;
    }
}