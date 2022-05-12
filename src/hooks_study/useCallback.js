import React, {useState, useCallback} from "react";
import ItemsList from "./items";

function App() {
    const [prop, setProp] = useState(1);
    const [color, setColor] = useState(false)

    const styles = {
        color: color ? 'blue' : 'black'
    }

    const generateItems = useCallback(() => {
        //create new Array, length - prop
        //fill - initial elements ''
        // with map we transform it in new array Elements with index
        return new Array(prop).fill('').map((_, i: number) => `Element ${i + 1}`)
    }, [prop])

    return (
        <>            
            <h1 style={styles}>Аmount of elements: {prop} </h1>
            <button onClick={() => setProp(prev => prev + 1)} className="btn btn-success">Add</button>
            <button onClick={() => setColor(prev => !prev)} class="btn btn-warning">Color</button>  

            <ItemsList getItems={generateItems}/>          
        </>
    )
}

export default App;