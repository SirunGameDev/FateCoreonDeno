import {Skill} from "./Skill.ts"
import { AnyList } from "./AnyList.ts"
export class SkillList extends AnyList{
    [key: number] : Skill;
    constructor(...Skilllist : Skill[]) {
        super(...Skilllist)
    }

    override find (element : Skill) : number|false {
        for(let i = 0; i < this.counter; i++) {
            if(element.getName() == this[i].getName()){
                return i;
            }
        }
        return false;
    }
}