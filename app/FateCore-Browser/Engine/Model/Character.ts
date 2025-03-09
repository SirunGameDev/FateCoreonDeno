import { AspectList } from "./AspectList.ts";
import { ConsequenceList } from "./ConsequenceList.ts";
import { ExtraList } from "./ExtraList.ts";
import { StuntList } from "./StuntList.ts";
import { SkillList } from "./SkillList.ts";
import { StressList } from "./StressList.ts";

import { Extra } from "./Extra.ts";
import { Aspect } from "./Aspect.ts";

import { Action } from "./Action.ts";

export class Character {
    #name : string = "";
    #pronouns : string = "";
    #description : string = "";

    #refresh : number = 3;
    #fatepoints : number = 3;

    #aspects : AspectList;

    #skills : SkillList;

    #stunts : StuntList;

    #extras : ExtraList;

    #soulstress : StressList;
    #bodystress : StressList;


    #consequences : ConsequenceList;

    constructor () {
        this.#aspects = new AspectList();
        this.#skills = new SkillList();
        this.#stunts = new StuntList();
        this.#extras =  new ExtraList();
        this.#soulstress = new StressList();
        this.#bodystress = new StressList();

        this.#consequences = new ConsequenceList();
    }
    setName(name : string) : void {
        this.#name = name;
    }
    getName() : string {
        return this.#name;
    }
    setDescription(desc : string) : void {
        this.#description = desc;
    }
    getDescription() : string {
        return this.#description;
    }

    getPronouns() : string {
        return this.#pronouns;
    }
    setPronouns(pronouns : string ) : void {
        this.#pronouns = pronouns;
    }
    setAspects(AspList : AspectList) : void {
        this.#aspects = AspList;
    }
    setAspect (Aspect : Aspect, Position : number) : void {
        this.#aspects[Position] = Aspect;
    }
    getAspects() : AspectList {
        return this.#aspects
    }

    setSkills(skilllist : SkillList) : void {
        this.#skills = skilllist;
    }
    getSkills () : SkillList {
        return this.#skills
    }
    setConsequences(conList : ConsequenceList) : void {
        this.#consequences = conList;
    }
    getConsequences() : ConsequenceList {
        return this.#consequences;
    }
    setExtras ( extraList : ExtraList) : void {
        this.#extras = extraList;
    }
    setStunts ( StuntList : StuntList) : void {
        this.#stunts = StuntList;
    }
    getStunts () : StuntList {
        return this.#stunts;
    }
    getFatePoints() : number {
        return this.#fatepoints;
    }
    setFatePoints(n : number) {
        this.#fatepoints = n;
    }
    getExtras () : ExtraList {
        return this.#extras;
    }
    setSoulStress (List : StressList) : void {
       this.#soulstress = List;
    }
    getSoulStress () : StressList {
        return this.#soulstress
    }
    setBodyStress (List : StressList) : void {
        this.#bodystress = List;
    }
    getBodyStress () : StressList {
        return this.#bodystress
    }
    doAction(skillname : string, action : string, paidfate : number = 0, freefate : number = 0) {
        let fatebonus : number = freefate;
        if(this.#fatepoints < paidfate) {
            fatebonus = +fatebonus + +this.#fatepoints
            this.#fatepoints = 0;
        }
        else {
            this.#fatepoints = this.#fatepoints - paidfate;
            fatebonus = +fatebonus + +paidfate
        }
        let Skill = this.#skills.findSkillbyString(skillname)
        let SkillValue = 0
        if (Skill) {
            SkillValue += Skill.getValue();
        }
        // calculate Stuntbonus
        let Stuntbonus = 0;

        let result = SkillValue+(fatebonus*2)+Stuntbonus

        return Action.check(result)
    }
}