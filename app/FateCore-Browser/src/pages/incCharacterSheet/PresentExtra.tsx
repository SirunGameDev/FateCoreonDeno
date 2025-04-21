function PresentExtra ({Extras}) {
    let HTMLarray = []
    let ExtraArray = Extras.getArray();

    for (let i = 0; i < ExtraArray.length; i++) {
        HTMLarray.push(<div key={i}>{ExtraArray[i].getName()}</div>)
    }

    return (<div>{HTMLarray}</div>)
}

export default PresentExtra;