function InteractiveLog ({Log, setLog}) {
    function resetLog() {
        setLog(false)
    }
    return (
        <>
        {Log ? (
            <>
                <div> What happend here: {Log}</div>
                <button onClick={() => resetLog()} >Reset</button>
            </>) 
        :
        (<>
        <div>Nothing Happend yet</div><br />
        </>)}
        </>
    )
}

export default InteractiveLog