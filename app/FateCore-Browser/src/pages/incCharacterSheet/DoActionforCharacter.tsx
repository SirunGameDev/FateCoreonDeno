import { useState } from 'react';
function DoActionforCharacter ({Character, Log, setLog}){
    let SkillArray = Character.getSkills().getArray();
    const [Target, setTarget] = useState(2)
    const [FreeFate, setFreeFate] = useState(0)
    const [PaidFate, setPaidFate] = useState(0)
    const [ActiveSkill, setActiveSkill] = useState(SkillArray[0])

    function triggerOverCome() {
        triggerConsoleLog()
    }

    function triggerCreateAdvantage() {
        triggerConsoleLog()
    }

    function triggerAttack() {
        triggerConsoleLog()
    }

    function triggerDefend() {
        let result = Character.doAction(ActiveSkill, "defend", FreeFate, PaidFate)
        setLog(result)
    }
    function triggerConsoleLog() {
        console.log(ActiveSkill.getName()+" "+Target+" "+FreeFate+" "+PaidFate)
    }
    function resetInputs() {
        setActiveSkill(SkillArray[0])
        setTarget(2);
        setFreeFate(0);
        setPaidFate(0);
    }
    let HTMLSkillDropdown = []
    
    for (let i = 0; i < SkillArray.length; i++) {
        HTMLSkillDropdown.push(<option key={i} value={SkillArray[i].getName()}>{SkillArray[i].getName()}</option>)
    }

    
    return (
        <>

        <div>
            <select defaultValue={ActiveSkill} name="activeSkill" onChange={e => setActiveSkill(e.target.value)}>{HTMLSkillDropdown}</select> <br />
            <label>Zielwert <input name="target" type="number" value={Target} onChange={e => setTarget(e.target.value)} /> </label><br />
            
            <label>Freie Punkte <input name="FreePoints" type="number" value={FreeFate}  onChange={e => setFreeFate(e.target.value)} /></label><br />

            <label>FatePoints zu zahlen <input name="PaidPoints" type="number" value={PaidFate}  onChange={e => setPaidFate(e.target.value)} /></label>
        </div>
        <div>
            <button onClick={() => resetInputs()}>Reset</button>
            <button onClick={() => triggerOverCome()}>Overcome</button>
            <button onClick={() => triggerCreateAdvantage()}>createAdventage</button>
            <button onClick={() => triggerAttack()}>Attack</button>
            <button onClick={() => triggerDefend()}>Defend</button>
        </div>

        </>
    )
}

export default DoActionforCharacter