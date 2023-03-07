import React from "react"
import Quiz from "./components/Quiz.js"
import Start from "./components/Start.js"
export default function App()
{   
    const [start,setStart]=React.useState(true) 
    function toogle(){
    return setStart(false)    
    }
    return(
        <div>
        {start ? <Start handleClick={toogle}/> : <Quiz/>}
        </div>
    )
}  

