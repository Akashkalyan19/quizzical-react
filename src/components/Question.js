import React from "react"
import Quiz from "./Quiz.js"

export default function Question(props){
    const allAns = props.ians.slice(0);
    allAns.push(props.cans);
    const [noOfCorrAns,setNoOfCorrAns]=React.useState(0)
    const [randomArray,setRandomArray]=React.useState([])
    const [btn,setBtn]=React.useState([ 
                    {
                        id:0,
                        clname:"Ans-btn",
                        pressed:false,
                        isRight:false,
                        value:""
                    },
                    {
                        id:1,
                        clname:"Ans-btn",
                        pressed:false,
                        isRight:false,
                        value:""    
                    },
                    {
                        id:2,
                        clname:"Ans-btn",
                        pressed:false,
                        isRight:false,
                        value:""
                    },
                    {
                        id:3,
                        clname:"Ans-btn",
                        pressed:false,
                        isRight:false,
                        value:""
                    },
                ])
    React.useEffect(function(){
        setRandomArray(shuffle(allAns))     
    },[props.stage])
   function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
         array[randomIndex], array[currentIndex]];
        }
    return array;
    }
    function togglebtn(id){
            setBtn(prevData=> prevData.map(item =>{
                return id===item.id?
                {...item,pressed:!item.pressed}: item
            }))
    }
    
    React.useEffect(function(){
        setBtn(prev=> prev.map(item =>{
                return {...item,value:randomArray[item.id]}
            }))
    },[randomArray])
    
    function checkAns(){
        setBtn(prevData=> prevData.map(item =>{
                return props.cans===item.value?
                {...item,isRight:true,clname:"right-ans"}: item.pressed?{...item,clname:"wrong-ans"}:{...item}
            }))
    }
    React.useEffect(function(){
     setBtn(prevData=> prevData.map(item =>{
                return {...item,clname:"Ans-btn",pressed: false}
            }))
    },[props.stage])
//    console.log(noOfCorrAns)
 
return(
<div className="eachques">
    <p className="Question">{props.quest}</p>
    <button disabled={btn[0].pressed || btn[1].pressed || btn[2].pressed || btn[3].pressed}className={btn[0].clname}
    onClick={()=>{togglebtn(0); checkAns()}}>
    {randomArray[0]}
     </button>
    <button disabled={btn[0].pressed || btn[1].pressed || btn[2].pressed || btn[3].pressed}className={btn[1].clname}  
    onClick={()=>{togglebtn(1); checkAns()}}>
    {randomArray[1]}
    </button>
    <button disabled={ btn[0].pressed || btn[1].pressed || btn[2].pressed || btn[3].pressed}className={btn[2].clname} 
            
    onClick={()=>{togglebtn(2); checkAns()}}>
    {randomArray[2]}
    </button>
    <button disabled={btn[0].pressed || btn[1].pressed || btn[2].pressed || btn[3].pressed}className={btn[3].clname} 
            
    onClick={()=>{togglebtn(3); checkAns()}}>
    {randomArray[3]}
    </button>
    <hr className="hrtag"/>
        </div>
    )
}