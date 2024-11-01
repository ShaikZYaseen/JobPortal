import React from 'react'
import Navbar from '../shared/Navbar'
import ResumeHome from './ResumeHome'

function Resume() {
  return (
    <>
    <Navbar/>
    <div className='mt-20 w-full'>
        <div className='w-full pt-20 pb-20 font-bold'>
            <p className='text-center text-5xl'> Elevate Your Narrative</p>
            <p className='text-center text-5xl text-[#6A38C2]'>AI-Crafted Resumes for Ambitious <br></br> Minds.</p>
         </div>
         <div>
            <ResumeHome/>
         </div>
    </div>
    </>
  )
}

export default Resume