import PresentAspects from "./PresentAspects";
import PresentSkills from "./PresentSkills";
import InteractiveLog from "./InteractiveLog";
import DoActionforCharacter from "./DoActionforCharacter";
import PresentStunt from "./PresentStunt.tsx"
import { useState } from 'react';
function PresentCharacter ({Character}) {
    const [Interactive, setInteractive] = useState(false);
    const [Log, setLog] = useState(false);

    let blhasAspects = Character.getAspects().counter > 0;
    let blhasSkills = Character.getSkills().counter > 0; 
    let blhasStunt = Character.getStunts().counter > 0;
    function toggleInteractive() {
        setInteractive(!Interactive);
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
            <div><label>getFatePoints:</label> {Character.getFatePoints()} </div>
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
            {blhasSkills ? (
                <PresentSkills 
                    Skills = {Character.getSkills()}
                    Interactive = {Interactive}
                    Log = {Log}
                    setLog = {setLog}
                     />
                ) : (<div>No Skills</div>) }
            <br />
        </>
    )
}

export default PresentCharacter