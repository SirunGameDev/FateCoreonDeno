import {Skill} from "./Skill.ts"
import { AnyList } from "./AnyList.ts"
export class SkillList extends AnyList{
    [key: number] : Skill;
    constructor(...Skilllist : Skill[]) {
        super(...Skilllist);
        let SkillNameArray = Skill.SkillsOverview.map(element => element.DE);
        let AlreadyUsed = Skilllist.map(skill => skill.getName());
        let stillopen = SkillNameArray.filter(element => !AlreadyUsed.includes(element))
        for(let i = 0; i < stillopen.length; i++) {
            this[this.counter] = new Skill(stillopen[i]);
            this.counter++
        }
    }

    override find (element : Skill) : number|false {
        for(let i = 0; i < this.counter; i++) {
            if(element.getName() == this[i].getName()){
                return i;
            }
        }
        return false;
    }
    findSkillbyString ( name : string) : Skill|false {
        for(let i = 0; i < this.counter; i++) {
            if(name == this[i].getName()){
                return this[i];
            }
        }
        return false;
    }
}