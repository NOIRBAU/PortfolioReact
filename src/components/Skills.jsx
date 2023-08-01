import React from 'react'
import "./titles.css"
import htmlLogo from "../assets/html.png"
import cssLogo from "../assets/css.png"
import javascriptLogo from "../assets/javaScript.png"
import reactLogo from "../assets/react.png"
import tailwindLogo from "../assets/tailwind.png"
import githubLogo from "../assets/GitHub-Logo.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-[100vh]'>
        <div className='max-w-[1280px] mx-auto p-4 flex flex-col justify-evenly w-full h-full'>
            <div className='w-full flex flex-col'>
                <h2>My Skills</h2>
                <p className='text-3xl mb-2 max-md:text-xl'>The technologies I have been working with are:</p>
            </div>
            <div className='w-full flex flex-wrap gap-7 max-md:gap-3 justify-center'>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto mb-2' src={htmlLogo}></img>
                    <p className='text-[#2E4771] rounded text-center font-bold text-lg shadow-lg shadow-slate-500 max-md:text-base'>HTML</p>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto mb-2' src={cssLogo}></img>
                    <p className='text-[#2E4771] rounded text-center font-bold text-lg shadow-lg shadow-slate-500 max-md:text-base'>CSS</p>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto mb-2' src={javascriptLogo}></img>
                    <p className='text-[#2E4771] rounded text-center font-bold text-lg shadow-lg shadow-slate-500 max-md:text-xs'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto mb-2' src={reactLogo}></img>
                    <p className='text-[#2E4771] rounded text-center font-bold text-lg shadow-lg shadow-slate-500 max-md:text-base'>REACT</p>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto mb-2' src={tailwindLogo}></img>
                    <p className='text-[#2E4771] rounded text-center font-bold text-lg shadow-lg shadow-slate-500 max-md:text-sm'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto mb-2' src={githubLogo}></img>
                    <p className='text-[#2E4771] rounded text-center font-bold text-lg shadow-lg shadow-slate-500 max-md:text-base'>GITHUB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
