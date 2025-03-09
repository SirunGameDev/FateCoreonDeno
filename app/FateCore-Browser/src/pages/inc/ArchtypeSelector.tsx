import {ArchtypeCharacter} from '../../../Engine/Data/ArchtypeCharacter';
import { useState } from 'react';
import PresentCharacter from "./PresentCharacter.tsx"
function ArchtypeSelector () {
    const [Archtype, setArchtype] = useState(false);
    const ArchetypeList = ArchtypeCharacter.getArchtypes();
    const htmlList = [];
    
    for (let i = 0; i < ArchetypeList.length; i++) {
        htmlList.push(<button number={i} key={i} onClick={ChoosingArchtype}>{ArchetypeList[i].getName()}</button>);
    }

    function ChoosingArchtype(e) {
        e.preventDefault();
        let index = e.target.getAttribute("number");
        setArchtype(ArchetypeList[index]);
    }

    return (
    <>  <div>{htmlList}</div>
        {Archtype ? (
            <PresentCharacter 
                Character = {Archtype} />
        ) :
        (<div>Wähle einen Archetypen</div>)}
    </>
    )
}

export default ArchtypeSelector