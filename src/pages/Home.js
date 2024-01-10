import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg-gray-400'>
   
    <h1 className='text-4xl font-bold underline mt-3'>MCQ APP</h1>     
        <div className='text-black flex flex-col mt-20 bg-gray-200 w-[50%] h-[40%] p-6 rounded-lg' >
   
         <label className='text-xl font-semibold mb-2'>Enter Your Name:</label>
         <input
        type="text"
        placeholder="Shruti Kamboj"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        className='text-[16px] rounded-lg border-black px-3 py-2 outline'
      />

      <button onClick={() => navigate("/quiz")}
      className='mt-6 border-[2px] w-fit p-2 rounded-md border-gray-600 hover:bg-black hover:text-white'>
        Start Quiz
      </button>
    </div>
    </div>
   
  )
}

export default Home