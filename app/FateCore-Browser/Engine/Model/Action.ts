export class Action {
    static overcome () {

    }
    static createAdvantage () {

    }
    static attack () {

    }
    static defend () {
        
    }
    static check (value : number) {
        let roll = Action.getTurboFateRoll()
        return roll+value;
    }
    static getRoll(min : number, max : number) {
        return min + Math.floor(Math.random() * max);
    }
    
    static getD6 () {
        return Action.getRoll(1,6);
    }
    
    static getTurboFateDice () {
        return Action.getRoll(1,3)-2;
    }
    
    static getTurboFateRoll () {
        var result = Action.getTurboFateDice()+Action.getTurboFateDice()+Action.getTurboFateDice()+Action.getTurboFateDice();
        return result;
    }
}