import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Github, Linkedin, User } from 'lucide-react'
import ResumeMakerForm from './ResumeMakerForm'

function ResumeMaker() {
  const [data, setData] = useState({
    name: "",
    role: "",
    github: "",
    leetcode: "",
    linkedin: "",
    portfolio: "",
    phone: "",
    education: [],
    skills: [],
    projects:[],
    experience:[]
  });

  return (
    <>
      <Navbar />
      <div className='mt-20 p-8 flex  justify-center items-center'>
        <div className='w-[50%] shadow-2xl h-[100svh]'>
          <ResumeMakerForm data={data} setData={setData} />
        </div>
        <div className='w-[40%] bg-[#6A38C2] h-[100svh] p-10 pt-5'>
          <p className='text-white text-center'>Resume</p>
          <div className='h-full w-full  bg-white shadow-md p-1'>
            <p className='text-center text-[11px]'>{data?.name}</p>
            <p className='text-center text-[8px] pb-1'>{data?.role}</p>
            <div className='flex justify-around'>
              <p className='flex text-[8px] justify-center items-center cursor-pointer'>+91-({data?.phone})</p>

              <p><a href={data?.github} target='blank' className='flex text-[8px] justify-center items-center cursor-pointer'><Github size={8} strokeWidth={0.5} />Github</a></p>
              <p><a href={data?.linkedin} target='blank' className='flex text-[8px] justify-center items-center cursor-pointer'><Linkedin size={8} strokeWidth={0.5} />Linkedin</a></p>
              <p><a href={data?.portfolio} target='blank' className='flex text-[8px] justify-center items-center cursor-pointer'><User size={8} strokeWidth={0.5} />Portfolio</a></p>
              <p><a href={data?.leetcode} target='blank' className='flex text-[8px] justify-center items-center cursor-pointer'><User size={8} strokeWidth={0.5} />Leetcode</a></p>
            </div>
            {data?.education.length > 0 &&
              <div className='pb-1'>
                <p className='text-[11px] pl-1 pt-1 font-bold'>Education</p>
                <hr className="text-[5px] border-t-[1px] border-black" />
                {data?.education.map((ele) => (
                  <div>
                    <p className='text-[9px] pt-1'><span className='font-semibold'>{ele.schoolName}</span></p>
                    <p className='flex text-[6px] justify-between'><span>{ele.schoolEndYear} , Grade :<span className='font-bold'>{ele.schoolGrade}</span>,</span><span className='pr-2'>{ele.schoolPlace}</span></p>
                  </div>
                ))}

              </div>
            }

            {data.skills.length > 0 &&
              <div>
                <p className='text-[11px] pl-1 pt-1 font-bold'>Skills</p>
                <hr className="text-[5px] border-t-[1px] border-black mb-1" />
                <p className='flex flex-wrap text-[6px]'>
                  {data?.skills && data.skills.map((ele) => (
                    <span>{ele}&nbsp;</span>
                  ))}
                </p>
              </div>
            }

          
            <div>
              <p className='text-[11px] pl-1 pt-1 font-bold'>Experience</p>
              <hr className="text-[5px] border-t-[1px] border-black" />
              <p className='text-[9px] pt-1 font-semibold flex justify-between'><span>Oracle - Full Stack Developer</span><span>Redwood city</span></p>
              <div>
                <li className='text-[7px]'>Lorem ipsum dolor sit amet consectetur.lorem4 Lorem ipsum dolor sit.</li>
                <li className='text-[7px]'>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet.</li>
                <li className='text-[7px]'>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</li>
              </div>
            </div>

            {
              data.projects >0  && 
                   <div>
              <p className='text-[11px] pl-1 pt-1 font-bold'>Projects</p>
              <hr className="text-[5px] border-t-[1px] border-black mb-1" />
              {
                data.projects.map((ele)=>{
                  <p className='text-[9px] pb-2 font-semibold pl-1 flex-col flex-wrap'>
                  <p className='flex justify-start items-center'> {ele.title} - <a href="" className='pl-2' target='blank'><Github size={8} /></a></p>
                  <li className='text-[7px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum?</li>
                  <li className='text-[7px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eligendi dolores debitis?</li>
                  <li className='text-[7px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae quam tenetur, laboriosam totam eligendi.</li>
                  <li className='text-[7px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem iusto eum dolorum similique non tenetur.</li>
                </p>
                })
              }
              
             
            </div>
            }
          
            <div>
              <p className='text-[11px] pl-1 pt-1 font-bold'>Achievements</p>
              <hr className="text-[5px] border-t-[1px] border-black mb-1" />
              <li className='text-[7px]  flex flex-wrap'>Won 100xDevs Hackathon and won 100$ bounty in it for creating a solana wallet</li>
              <li className='text-[7px] flex flex-wrap'>Won 100xDevs Hackathon and won 100$ bounty in it for creating a solana wallet</li>
              <li className='text-[7px] flex flex-wrap'>Won 100xDevs Hackathon and won 100$ bounty in it for creating a solana wallet</li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumeMaker