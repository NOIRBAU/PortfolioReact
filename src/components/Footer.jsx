import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='sticky h-[64px] w-full bottom-0'>
        <footer class="w-full bg-[#000] p-3 max-md:p-1 text-xl">
        <div class="max-w-[1280px] p-2 md:flex md:items-center md:justify-between m-auto">
            <span className="text-white">© 2023 Nelly Alejandra Bautista González. All Rights Reserved.</span>
        <ul class="flex flex-wrap justify-center items-center text-white sm:mt-0">
            <li>
                <a href="https://github.com/NOIRBAU" target="_blank" className='text-2xl'>
                    <FaGithub className='hover:text-[#89C3EB] max-md:mt-2'/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/nelly-alejandra-bautista-gonz%C3%A1lez-34a411123/" target="_blank" className='text-2xl'>
                    <FaLinkedin className='hover:text-[#89C3EB] max-md:mt-2'/>
                </a>
            </li>
        </ul>
        </div>
        </footer>
    </div>

  )
}

export default Footer
