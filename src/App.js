import React, {useState} from "react";

function App() {
    //first variable - this is the state (counter), second var - function that helps change counter
    const [counter, setCounter] = useState(0)

    function increment() {
        //call function that change state and say what we want
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment} className="btn btn-success">Add</button>
            <button onClick={decrement} class="btn btn-danger">Delete</button>
        </div>
    )
}

export default App;