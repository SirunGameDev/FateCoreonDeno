function PresentStunt({Stunts}) {

    let HTMLStuntList = []
    let StuntArray = Stunts.getArray()
    for (let i = 0; i < StuntArray.length; i++) {
        HTMLStuntList.push(<div key={i}><label>{StuntArray[i].getName()}</label>: {StuntArray[i].getDescription()}</div>)
    }
    return (
        <>
            {HTMLStuntList}
        </>
    )
}

export default PresentStunt