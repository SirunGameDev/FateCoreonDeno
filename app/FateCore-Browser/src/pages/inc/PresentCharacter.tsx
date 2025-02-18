function PresentCharacter ({Character}) {
    return (
        <>
            <div><label>getName:</label> {Character.getName()} </div>
            <div><label>getDescription:</label> {Character.getDescription()} </div>
            <div><label>getPronouns:</label> {Character.getPronouns()} </div>
            <div><label>getName:</label> {Character.getName()} </div>
        </>
    )
}

export default PresentCharacter