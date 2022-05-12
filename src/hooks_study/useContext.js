import React, {useState} from "react";
import Alert from "./Alert";
import Main from "./Main";

//create context
export  const AlertContext = React.createContext()

function App() {
    const [alert, setAlert] = useState(false)

    const toggleAlert = () => {
        setAlert(prev => !prev)
    }
    return (
        <AlertContext.Provider value={alert}>
            <div className={'container pt-3'}>           
            <Alert/>
            <Main toggle={toggleAlert}/>                              
        </div>
        </AlertContext.Provider>
    )
        
}

export default App;