import {Action} from "FateEngine/Model/Action.ts";
function PresentSkills ({Skills, Interactive, Log, setLog}) {
    function triggerSkillCheck (Skill) {
        setLog(""+Skill.getName()+": "+Skill.makeAction())
    }
    function triggerZeroCheck () {
        setLog(""+Action.check(0))
    }
    let Skillarray = Skills.getArray()
    Skillarray = Skillarray.filter((element) => element.getValue() > 0)
                            .sort((a,b) =>  b.getValue() - a.getValue())

    const HTMLSkillsList = []
    for (let i = 0; i < Skillarray.length; i++) {
        let standard = <div key={i}><label>Skill {i+1}</label> {Skillarray[i].getName()} : {Skillarray[i].getValue()}</div>;
        if(Interactive) {
            standard = <div key={i}><label>Skill {i+1}</label> {Skillarray[i].getName()} : {Skillarray[i].getValue()} <button onClick={() => triggerSkillCheck(Skills[i])}>SkillCheck</button></div>;
        }
        HTMLSkillsList.push(standard)
    }
    if (Interactive)
        HTMLSkillsList.unshift(
            <div id="zero" key="zero"><button onClick={() => triggerZeroCheck()}>Check for 0-Skill</button></div>
        )
    return (
        <div>{HTMLSkillsList}</div>
    )
}
export default PresentSkills
