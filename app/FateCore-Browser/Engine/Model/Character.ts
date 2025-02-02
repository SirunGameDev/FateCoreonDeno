export class Character {
    #name : string;
    #pronouns : string;
    #description : string;

    #refreshrate : int = 3;
    #fatepoints : int = 3;

    #aspects = {
        1: "", // High Concept
        2: "", // Trouble
        3: "",
        4: "",
        5: ""
    };

}