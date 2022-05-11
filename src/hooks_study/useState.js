import React, {useState} from "react";

function App() {
    //first variable - this is the state (counter), second var - function that helps change counter
    const [counter, setCounter] = useState(0)

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })

    function increment() {
        //call function that change state and say what we want
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function updateTitle() {
        //here we call setState and ask return previous state with changes
        setState(prev => {
            return {
                ...prev, 
                title: 'New title'
            }
        })
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment} className="btn btn-success">Add</button>
            <button onClick={decrement} class="btn btn-danger">Delete</button>
            <button onClick={() => updateTitle()} class="btn btn-secondary">Change title</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default App