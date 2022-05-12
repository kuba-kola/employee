import React, {useState, useEffect, useMemo} from "react";

function complexCompute(num) {
    let i = 0
    while(i < 100000000) i++
    return num * 2
}

function App() {
    const [prop, setProp] = useState(42);
    const [color, setColor] = useState(false)

    const styles = useMemo(() =>  {
        return {
            color: color ? 'blue' : 'black'
        }
    }, [color])

    const computed = useMemo(() => {
        return complexCompute(prop)
    }, [prop])

    useEffect(() => {        
        console.log('Changed')
    }, [styles])

    return (
        <div>
            <h1 style={styles}>Computed property: {computed}</h1>
            <button onClick={() => setProp(prev => prev + 1)} className="btn btn-success">Add</button>
            <button onClick={() => setProp(prev => prev - 1)} class="btn btn-danger">Delete</button>
            <button onClick={() => setColor(prev => !prev)} class="btn btn-warning">Color</button>
            
        </div>
    )
}

export default App;