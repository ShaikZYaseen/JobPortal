import React from 'react'
import { Link } from 'react-router-dom'

function ResumeHome() {
  return (
    <div className='p-10 flex justify-center items-center'>
      <Link to={"/create-resume"}>
        <div className='h-[19rem] w-[15rem] rounded-xl shadow-md  flex justify-center items-center bg-slate-200'>
          <span className='font-bold text-5xl cursor-pointer'>+</span>
        </div>
      </Link>

    </div>
  )
}

export default ResumeHome