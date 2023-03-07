import React from "react"
import Start from "./Start.js"
import Question from "./Question.js"

export default function Quiz(props)
{   
    const [apiData,setApiData]=React.useState([])
    const [question,setQuestion]=React.useState()
    const [stage,setStage]=React.useState(1)
    // const [disable,setDisable]=React.useState(0)
    
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
























































































// const [quizData,setQuizData]=React.useState()
    // function getQuizData()
    // {
    //     const newQuiz=[]
    //     // let obj={
    //     //             quest:"",
    //     //             cans:"",
    //     //             ians:[] 
    //     //          }
    //     setQuizData(PrevData=>apiData.map(data=>{
    //         console.log("setting data")
    //         return{
    //             quest: data.question,
    //             cans: data.correct_answer,
    //             ians: data.incorrect_answers 
    //         }
    //     }))
    //         // for(let i=0;i<apiData.length;i++){
    //         //                 obj.quest=apiData[i].question
    //         //                 obj.cans=apiData[i].correct_answer
    //         //                 obj.ians=apiData[i].incorrect_answers   
    //         //                 newQuiz.push(obj)
    //         //             }
    //   return newQuiz   // console.log(newQuiz)
    // }