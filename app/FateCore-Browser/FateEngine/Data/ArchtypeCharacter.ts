import { Character } from '../Model/Character.ts';
import { Aspect } from '../Model/Aspect.ts';
import { Skill } from '../Model/Skill.ts';
import { Stunt } from '../Model/Stunt.ts';
import { Extra } from '../Model/Extra.ts';
import { Consequence } from '../Model/Consequence.ts';
import { Stress } from '../Model/Stress.ts';
import { AspectList} from '../Model/AspectList.ts';
import { SkillList } from '../Model/SkillList.ts';
import { StuntList } from '../Model/StuntList.ts';
import { ExtraList } from '../Model/ExtraList.ts';
import { StressList } from '../Model/StressList.ts';
import { ConsequenceList } from '../Model/ConsequenceList.ts';
export class ArchtypeCharacter {
    public static getArchtypes() {
        return [
            this.getJohnDoe(),
            this.getMaxMusterman(),
            this.getZirdderGeheimnisvolle()
        ]
    }
    public static getJohnDoe() {
        const CharacterObj = new Character();
        CharacterObj.setName('John Doe');
        CharacterObj.setDescription('Ein Max Mustermann-Charakter');
        CharacterObj.setPronouns('divers');
        let Aspect1 = new Aspect('Mustermann');
        let Aspect2 = new Aspect('Musterfrau');
        let Aspect3 = new Aspect('Musterkind');
        let Aspect4 = new Aspect('Musterkatze');
        let Aspect5 = new Aspect('Musterhund');

        let Aspects = new AspectList(Aspect1, Aspect2, Aspect3, Aspect4, Aspect5 )
        CharacterObj.setAspects(Aspects);

        let BodyStress = ArchtypeCharacter.generateStressListbyNumberType(2);
        CharacterObj.setBodyStress(BodyStress);
        let SoulStress = ArchtypeCharacter.generateStressListbyNumberType(2);
        CharacterObj.setSoulStress(SoulStress);

        let Consequences = ArchtypeCharacter.generateConsequenceListbyNumberType(3);
        CharacterObj.setConsequences(Consequences);

        let SkillListObj = ArchtypeCharacter.generateRandomSkillList();
        CharacterObj.setSkills(SkillListObj);
        return CharacterObj;
    }

    public static getMaxMusterman() {
        const CharacterObj = new Character();
        CharacterObj.setName('Max Musterman');
        CharacterObj.setDescription('Ein Max Mustermann-Charakter');
        CharacterObj.setPronouns('divers');

        let Aspect1 = new Aspect('Mustermann');
        let Aspect2 = new Aspect('Musterfrau');
        let Aspect3 = new Aspect('Musterkind');
        let Aspect4 = new Aspect('Musterkatze');
        let Aspect5 = new Aspect('Musterhund');

        let Aspects = new AspectList(Aspect1, Aspect2, Aspect3, Aspect4, Aspect5 )
        CharacterObj.setAspects(Aspects);
        
        let SkillListObj = ArchtypeCharacter.generateRandomSkillList();
        CharacterObj.setSkills(SkillListObj);

        let BodyStress = ArchtypeCharacter.generateStressListbyNumberType(2);
        CharacterObj.setBodyStress(BodyStress);
        let SoulStress = ArchtypeCharacter.generateStressListbyNumberType(2);
        CharacterObj.setSoulStress(SoulStress);

        let Consequences = ArchtypeCharacter.generateConsequenceListbyNumberType(3);
        CharacterObj.setConsequences(Consequences);

        return CharacterObj;
    }
    public static getZirdderGeheimnisvolle() {
        const CharacterObj = new Character();
        CharacterObj.setName('Zird der Geheimnisvolle');
        CharacterObj.setDescription('Ein Gelehrter mit scharfen Zügen und einem dunklen, dreieckigen Bart.');
        CharacterObj.setPronouns('männlich');

        let Aspect1 = new Aspect('Söldner Zauberer');
        let Aspect2 = new Aspect('Rivalen bei den Collegia Arcana');
        let Aspect3 = new Aspect('Wenn ich noch nicht da war, habe ich davon gelesen.');
        let Aspect4 = new Aspect('Nicht ins Gesicht!');
        let Aspect5 = new Aspect('Ich toleriere keine Dummheit!');

        let Aspects = new AspectList(Aspect1, Aspect2, Aspect3, Aspect4, Aspect5 )
        CharacterObj.setAspects(Aspects);

        let SkillListObject = new SkillList(
            new Skill('Wissen', 4),
            new Skill('Charisma', 3),
            new Skill('Handwerk', 3),
            new Skill('Athletik', 2),
            new Skill('Wille', 2),
            new Skill('Nachforschungen', 2),
            new Skill('Kämpfen', 1),
            new Skill('Ressourcen', 1),
            new Skill('Kontakte', 1),
            new Skill('Wahrnehmung', 1),
        )
        CharacterObj.setSkills(SkillListObject);

        let StuntListObject = new StuntList(
            new Stunt('Gelehrter und Heiler', 'Du kannst Erholungsproben für körperichen Schaden mit Wissen machen.'),
            new Stunt('Freundlicher Lügner', 'Du kannst Charisma statt Täuschung benutzen, um mit einer Lüge einen Vorteil zu erschaffen.'),
            new Stunt('Die Macht der Logik', 'Einmal pro Szene kannst du einen Fate-Punkt ausgeben, um eine spezielle Nachforschungs-Probe durchzuführen, die deine starken kombinatorischen Fähigkeiten repräsentiert. Dafür muss dein Charakter allerdings ein paar Minuten aufwenden. Für jede Erfolgsstufe dieser Probe erschaffst du einen Aspekt, entweder für die Szene oder das Ziel der Untersuchung. Nur einer dieser Aspekte ist mit einem freien Einsatz belegt.'),
            new Stunt("Davon hab' ich gelesen", "Du hast hunderte, wenn nicht sogar tausende, Bücher verschiedener Richtungen gelesen. Du kannst einen Fate-Punkt ausgeben, um Wissen statt einer beliebigen Fertigkeit für eine Probe oder für einen Austausch zu nutzen, wenn du irgendwie begründen kannst, dass du etwas über das Thema gelesen hast."),


        )
        CharacterObj.setStunts(StuntListObject);

        let ExtraListObject = new ExtraList(
            new Extra('Magie der Collegia Arcana'),
        )
        CharacterObj.setExtras(ExtraListObject);

        let BodyStress = ArchtypeCharacter.generateStressListbyNumberType(2);
        CharacterObj.setBodyStress(BodyStress);
        let SoulStress = ArchtypeCharacter.generateStressListbyNumberType(2);
        CharacterObj.setSoulStress(SoulStress);

        let Consequences = ArchtypeCharacter.generateConsequenceListbyNumberType(3);
        CharacterObj.setConsequences(Consequences);

        CharacterObj.setFatePoints(2);
        return CharacterObj;
    }
    static generateRandomSkillList () : SkillList {
        let values = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        let SkillListArray = []
        let SkillArray = Skill.SkillsOverview.map(element => element.DE);
        for (let i = 0; i < values.length; i++) {
            let random = 0 + Math.floor(Math.random() * SkillArray.length)
            SkillListArray.push(new Skill(SkillArray[random], values[i]));
            SkillArray.splice(random,1);
        }
        SkillArray.forEach(
            (skill) => SkillListArray.push(new Skill(skill, 0))
        )
        return new SkillList(...SkillListArray)
    }

    static generateConsequenceListbyNumberType (type : number) : ConsequenceList {
        
        let Consequences = []
        for(let i = 0; i < type; i++) {
            let number = (i+1)*2;
            Consequences.push(new Consequence(new Stress(number)))
        }
        let ReturnList = new ConsequenceList(...Consequences);
        return ReturnList;
    }

    static generateStressListbyNumberType(type : number) : StressList {
        let Stresses = []
        for(let i = 0; i < type; i++) {
            Stresses.push(new Stress(i+1));
        }
        let ReturnList = new StressList(...Stresses);
        return ReturnList;
    }
}