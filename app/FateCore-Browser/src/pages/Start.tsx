import '../App.css'
// @deno-types="@types/react"
import { useState } from 'react'
// @ts-expect-error Unable to infer type at the moment
import reactLogo from '../assets/react.svg'

export function Start () {
    const [count, setCount] = useState(0)

    return (
    <>
        <h1>Fate Core on Deno</h1>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>

        </div>

    </>
    )
}

export default Start