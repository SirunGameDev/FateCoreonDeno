import {ArchtypeCharacter} from '../../../Engine/Data/ArchtypeCharacter';

function ArchtypeSelector () {
    const JohnDoe = ArchtypeCharacter.getJohnDoe();

    return (
    <>
        <div><label>getName:</label> {JohnDoe.getName()} </div>
        <div><label>getDescription:</label> {JohnDoe.getDescription()} </div>
        <div><label>getPronouns:</label> {JohnDoe.getPronouns()} </div>
        <div><label>getName:</label> {JohnDoe.getName()} </div>
    </>
    )
}

export default ArchtypeSelector