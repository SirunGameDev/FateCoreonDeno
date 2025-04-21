import PresentAspects from "./PresentAspects";
import PresentSkills from "./PresentSkills";
import InteractiveLog from "./InteractiveLog";
import DoActionforCharacter from "./DoActionforCharacter";
import PresentStunt from "./PresentStunt.tsx";
import PresentExtra from "./PresentExtra.tsx";
import PresentHealth from "./PresentHealth.tsx";
import { useState } from 'react';
function PresentCharacter ({Character}) {
    const [Interactive, setInteractive] = useState(false);
    const [Log, setLog] = useState(false);

    let blhasAspects = Character.getAspects().counter > 0;
    let blhasSkills = Character.getSkills().counter > 0; 
    let blhasStunt = Character.getStunts().counter > 0;
    let blhasExtra = Character.getExtras().counter > 0;
    function toggleInteractive() {
        setInteractive(!Interactive);
    }

    function resetFatePoints() {
        Character.setFatePoints(3)
        let text = "Fate Points resettet"
        if(Log) {
            text+=" "+Log;
        }
        setLog(text)
    }

    return (
        <>
            <div><button onClick={toggleInteractive}>Toggle Interactive</button></div>
            {Interactive && 
                <InteractiveLog 
                    Log = {Log}
                    setLog = {setLog} />}
            {Interactive && 
                <DoActionforCharacter
                    Character = {Character} 
                    Log = {Log}
                    setLog = {setLog} />}
            <div><label>getName:</label> {Character.getName()} </div>
            <div><label>getDescription:</label> {Character.getDescription()} </div>
            <div><label>getPronouns:</label> {Character.getPronouns()} </div>
            <br />
            <div><label>getFatePoints:</label> {Character.getFatePoints()} {Interactive && <button onClick={() => resetFatePoints()}>Reset</button>}</div>
            <br />
            {blhasAspects ? (
                <PresentAspects 
                    Aspects = {Character.getAspects()} />
                ) : (<div>No Aspects</div>) }
            <br />
            {blhasStunt ? (
                <PresentStunt
                    Stunts = {Character.getStunts()} />
                )  : (<div>No Stunts</div>)}
            <br />
            {blhasExtra ? (
                <PresentExtra
                    Extras = {Character.getExtras()} />
            ) : (<div>No Extra</div>)}
            <br />
            {blhasSkills ? (
                <PresentSkills 
                    Skills = {Character.getSkills()}
                    Interactive = {Interactive}
                    Log = {Log}
                    setLog = {setLog}
                     />
                ) : (<div>No Skills</div>) }
            <br />
            <PresentHealth
                BodyStressList = {Character.getBodyStress()}
                SoulStressList = {Character.getSoulStress()}
                ConsequenceList = {Character.getConsequences()}

                 />
        </>
    )
}

export default PresentCharacter