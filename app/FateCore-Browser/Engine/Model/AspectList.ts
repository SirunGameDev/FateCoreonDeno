import {Aspect} from "./Aspect.ts"

export class AspectList {
    [key: number] : Aspect;
    counter : number = 0;
    constructor(...aspectlist : Aspect[]) {
        aspectlist.forEach(element => {
            this[this.counter] = element;
            this.counter++;
        }); 
    }
}