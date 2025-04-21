function PresentHealth ({BodyStressList, SoulStressList, ConsequenceList}) {
    let HTMLBodyStress = [];
    let HTMLSoulStress = [];
    let HTMLConsequencse = [];

    let BodyStressArray = BodyStressList.getArray();
    let SoulStressArray = SoulStressList.getArray();
    let ConsequenceArray = ConsequenceList.getArray();

    for (let i = 0; i < BodyStressArray.length; i++) {
        HTMLBodyStress.push(<div key={i}>Value: {BodyStressArray[i].value} Open: {BodyStressArray[i].open ? (<div>offen</div>):(<div>closed</div>)} </div>)
    }
    for (let i = 0; i < SoulStressArray.length; i++) {
        HTMLSoulStress.push(<div key={i}>Value: {SoulStressArray[i].value} Open: {SoulStressArray[i].open ? (<div>offen</div>):(<div>closed</div>)} </div>)
    }
    for (let i = 0; i < ConsequenceArray.length; i++) {
        HTMLConsequencse.push(<div key={i}>Value: {ConsequenceArray[i].Stress.value} Open: {ConsequenceArray[i].Stress.open ? (<div>offen</div>):(<div>closed</div>)} </div>)
    }
    return (<>
            <div>BodyStress</div>
            <div>{HTMLBodyStress}</div>
            <div>SoulStress</div>
            <div>{HTMLSoulStress}</div>
            <div>Consequencen</div>
            <div>{HTMLConsequencse}</div>
        </>
    )
}

export default PresentHealth