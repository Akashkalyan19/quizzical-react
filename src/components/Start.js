import React from "react"
import Quiz from "./Quiz.js"
export default function Start(props)
{
    return(
        <div className="start">
            <h1 className="heading">Quizzical</h1>
            <h3 className="desc">How smart are you?</h3>
            <button className="start-btn" 
            onClick={props.handleClick}>
            Start Quiz</button>
        </div>
    )
}