import { AspectList } from "./AspectList.ts";
import { ConsequenceList } from "./ConsequenceList.ts";
import { ExtraList } from "./ExtraList.ts";
import { StuntList } from "./StuntList.ts";
import { SkillList } from "./SkillList.ts";
import { StressList } from "./StressList.ts";
import { Extra } from "./Extra.ts";


import { Aspect } from "./Aspect.ts";
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

    #stress : StressList;

    #consequences : ConsequenceList;

    constructor () {
        this.#aspects = new AspectList();
        this.#skills = new SkillList();
        this.#stunts = new StuntList();
        this.#extras =  new ExtraList();
        this.#stress = new StressList();
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

    setConsequences(conList : ConsequenceList) : void {
        this.#consequences = conList;
    }

    setStress (Stressl : StressList) : void {
        this.#stress = Stressl;
    }
    setExtras ( extraList : ExtraList) : void {
        this.#extras = extraList;
    }
    setStunts ( StuntList : StuntList) : void {
        this.#stunts = StuntList;
    }
}