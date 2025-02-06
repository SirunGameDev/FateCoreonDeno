import { Character } from "Engine/Model/Character.ts";
import { useState } from 'react';
import CreateCharacterForm from "./inc/CreateCharacterForm.tsx"
import ArchtypeSelector from "./inc/ArchtypeSelector.tsx"
export function CharacterSheet () {
    const [CharacterObject, setCharacterObject] = useState(false);
    const [OwnCharacterCreation, setOwnCharacterCreation] = useState(false);
    function startCharacterCreation() {
        if( OwnCharacterCreation == false){
            setOwnCharacterCreation(true);
        }
        else {
            setOwnCharacterCreation(false);
        }
    }
    function deleteCharacter() {
        setCharacterObject(false);
    }
    return (
    <>  
        <h1>Character Sheet</h1>
        <div>
        {CharacterObject ? (
            <button onClick={deleteCharacter}>Empty Character selection</button>
        ) : (
            <>
            <button onClick={startCharacterCreation}>Toogle OwnCharacterForm</button>
            {OwnCharacterCreation && <CreateCharacterForm />}
            {!OwnCharacterCreation && <ArchtypeSelector />}
            </>
        )}
        </div>
    </>  
    )
    

}

export default CharacterSheet;