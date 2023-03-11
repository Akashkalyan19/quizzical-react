import React from "react"
import Question from "./Question.js"

export default function Quiz(props)
{   
    const [apiData,setApiData]=React.useState([])
    const [question,setQuestion]=React.useState()
    const [stage,setStage]=React.useState(1)
    
    React.useEffect(()=>{
        
        fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple") 
        .then(res=>res.json())
        .then(data=>setApiData(data.results))
        },[stage])
    
    React.useEffect(function (){
        setQuestion(prevData=>apiData.map(item=>{
                return  (
                        <Question
                            stage={stage}
                            quest={item.question}
                            cans={item.correct_answer}
                            ians={item.incorrect_answers}
                            // disable={disable}
                        />
                     )
            }))
            },[stage])
            
    function toggle(){
        setStage(prevData=>!prevData)
        // setDisable(prevD=>!prevD)
    }
    

        return(
                    <section className="quiz" >
                        {question}
                        <footer className="footer">
                            <button className="chk-ans" onClick={toggle}> {stage ? "New game" : "New game"}</button>
                        </footer>
                    </section>
                )
}