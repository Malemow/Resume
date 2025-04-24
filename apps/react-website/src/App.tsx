import "./App.css"
import React, { useState } from "react"

function App() {
    const [count, setCount] = useState(0)

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        setCount((count) => ++count)
    }

    return (
        <>
            <h1>Hello React {count}</h1>
            <button onClick={handleClick}>按我+1</button>
        </>
    )
}

export default App
