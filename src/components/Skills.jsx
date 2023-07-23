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
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-evenly w-full h-full'>
            <div className='w-full flex flex-col'>
                <h2>My Skills</h2>
                <p className='text-3xl mb-2 max-md:text-xl'>The technologies I have been working with are:</p>
            </div>
            <div className='w-full flex flex-wrap gap-5 max-md:gap-3 justify-center'>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto' src={htmlLogo}></img>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto' src={cssLogo}></img>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto' src={javascriptLogo}></img>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto' src={reactLogo}></img>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto' src={tailwindLogo}></img>
                </div>
                <div className='shadow-md shadow-[rgb(41,41,41)] hover:scale-110 duration-500 p-2 rounded-xl'>
                    <img className='h-[120px] max-md:h-[60px] w-[120px] max-md:w-[60px] mx-auto' src={githubLogo}></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
