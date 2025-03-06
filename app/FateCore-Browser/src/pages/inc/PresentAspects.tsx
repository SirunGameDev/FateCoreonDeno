function PresentAspects ({Aspects}) {
    const AspectsList = []
    for (let i = 0; i < Aspects.counter; i++) {
        AspectsList.push(<div key={i}><label>Aspect {i+1}</label> {Aspects[i].getDescription()}</div>)
    }
    return (
        <div>{AspectsList}</div>
    )
}
export default PresentAspects