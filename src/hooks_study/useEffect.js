import React, {useState, useEffect} from "react";

function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x:0,
        y:0
    })
    const mouseMove = e => {
        setPos({
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    
        //in arr we say what does the useEffect depend on?
        //we say that use effect should change only if arr is ok
    }, [type])

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove)
        
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    })

    return (
        <div>
            <h1>Resource: {type}</h1>
            <button onClick={() => setType('users')} className="btn btn-success">Users</button>
            <button onClick={() => setType('todos')} className="btn btn-primary">Todos</button>
            <button onClick={() => setType('posts')} className="btn btn-secondary">Posts</button>

            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <pre>{JSON.stringify(pos , null, 2)}</pre>
           
        </div>
    )
}

export default App;