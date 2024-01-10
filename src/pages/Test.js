import React, {useState} from 'react'
import {Questions} from "../utils/Questions"
import { useNavigate } from 'react-router-dom';


const Test = ({score, setScore}) => {
 
    const[currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")
    
    const navigate = useNavigate()

    const chooseOption = (option) => {
        setOptionChosen(option)
        alert("Selected: " + option)
    };
     
    const nextQuestion = () => {
        if (Questions[currentQuestion].asnwer === optionChosen) {
          setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1);
      };
    
      const finishTest = () => {
        if (Questions[currentQuestion].asnwer === optionChosen) {
          setScore(score + 1)
        }
        navigate("/Finish")
      };
    
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg-gray-400 '>
        <div className='bg-gray-300 w-[50%]  rounded-lg'>
            <h1 className='p-3 text-center text-lg font-semibold'> {Questions[currentQuestion].prompt} </h1>
            <div className='flex flex-col items-center mt-3 gap-y-3'>
                <button onClick={() => {
                    chooseOption("optionA");
                    }}
                    className='border-[2px] font-semibold rounded-md p-1 hover:bg-gray-400 hover:border-gray-200 border-gray-400 w-[50%]'>
                    {Questions[currentQuestion].optionA}
                </button>
                <button onClick={() => {
                    chooseOption("optionB");
                }}
                className='border-[2px] font-semibold rounded-md p-1 hover:bg-gray-400 hover:border-gray-200 border-gray-400 w-[50%]'>
                    {Questions[currentQuestion].optionB}
                </button>
                <button onClick={() => {
                    chooseOption("optionC");
                }}
                className='border-[2px] font-semibold rounded-md p-1 hover:bg-gray-400 hover:border-gray-200 border-gray-400 w-[50%]'>
                    {Questions[currentQuestion].optionC}
                </button>
                <button onClick={() => {
                    chooseOption("optionD");
                }}
                className='border-[2px] font-semibold rounded-md p-1 mb-5 hover:bg-gray-400 hover:border-gray-200 border-gray-400 w-[50%]'>
                    {Questions[currentQuestion].optionD}
                </button>
            </div>

           
        </div>
       <div className='mt-4 border px-3 py-1 rounded-md bg-slate-100 font-semibold border-gray-700 hover:bg-gray-700 hover:text-white '>
       {currentQuestion === Questions.length -1 ? 
            (<button onClick={finishTest}>
                  Finish Test
            </button>) 
            : (<button onClick={nextQuestion}>
                Next Question
            </button>)}
       </div>
    </div>
  )
}

export default Test