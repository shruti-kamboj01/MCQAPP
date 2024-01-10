import React from 'react'
import { Questions } from '../utils/Questions'


const Finish = ({score}) => {
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg-gray-300'>
      <div className='flex flex-col gap-y-6'>
      <h1  className='text-4xl font-bold text-gray-700'>
            Quiz Finished
        </h1>
        <h1 className='text-3xl font-bold '>
            {score} / {Questions.length}
        </h1>
      </div>
    </div>
  )
}

export default Finish