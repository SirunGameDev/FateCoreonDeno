function PresentStunt({Stunts}) {

    let HTMLStuntList = []
    let StuntArray = Stunts.getArray()
    for (let Stunt of StuntArray) {
        HTMLStuntList.push(<div><label>{Stunt.getName()}</label>: {Stunt.getDescription()}</div>)
    }
    return (
        <>
            {HTMLStuntList}
        </>
    )
}

export default PresentStunt