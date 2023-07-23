import React from 'react'
import CV from '../assets/CV EN.pdf'
import "./titles.css"
import "./about.css"

const About = () => {
  return (
    <div name='about' className='w-full h-100 my-[70px]'>
        <div className='flex flex-row flex-wrap justify-center items-center w-full h-full p-2'>
            <div className='max-w-[1200px] w-full h-full flex justify-between max-md:flex-col items-center'>
                <div className='w-[40%] sm:text-left pb-8 pl-4 flex flex-col content-evenly max-md:w-full max-md:h-[40%]'>
                    <h2 class="titles">About me</h2>
                    <p className='text-2xl max-md:text-base font-bold text-[rgb(46,71,113)] mb-2 max-md:leading-4'>Hi! I'm Nelly, welcome to my website. Feel free to explore this space in which I have tried to capture some important aspects of myself. </p>
                    <p className='text-m max-md:text-base max-md:leading-4'>I'm a Junior Front-End Developer. I love designing and keep myself in constant training in order to learn new technologies to improve my skills. I'm responsible, proactive and I like to work both in a team and independently.</p>
                </div>
                <div className='w-[55%] mr-4 max-md:w-full max-md:mr-0'>
                    <embed src={CV} type="application/pdf" width="100%" height="430px"/>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default About
