import React, {useState} from "react";
import './navBar-Links.css'
import { FaBars, FaTimes} from "react-icons/fa";
import luna from "../assets/moonW.png"
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed top-0 w-full h-[60px] flex justify-center items-center bg-[#000000] text-white font-weight: 700">
            <div className="w-[1280px] flex justify-between items-center px-4 text-2xl">
                <ul className="font-bold">
                    <li class="swap__link">
                    <li class="swap__link">
                            <Link to='home' smooth={true} duration={500}>HOME</Link>
                        </li>
                    </li>
                </ul>

                {/* MENU */}
                    <ul className="hidden md:flex flex-row items-center space-x-5 font-bold">
                        <li class="swap__link">
                            <Link to='about' smooth={true} duration={500}>ABOUT ME</Link>
                        </li>
                        <li class="swap__link">
                            <Link to='skills' smooth={true} duration={500}>MY SKILLS</Link>
                        </li>
                        <li class="swap__link">
                            <Link to='portfolio' smooth={true} duration={500}>PORTFOLIO</Link>
                        </li>
                        <li class="swap__link">
                            <Link to='experience' smooth={true} duration={500}>EXPERIENCE</Link>
                        </li>
                        <li class="swap__link">
                            <Link to='contact' smooth={true} duration={500}>CONTACT</Link>
                        </li>
                        <li><img src={ luna } alt="light" style={ {width:'25px'} }></img></li>
                    </ul>
            </div>

            {/* HAMBURGUER */}
            <div onClick={handleClick} className="md:hidden pr-3">
                {!nav ? <FaBars /> : <FaTimes />} 
            </div>
            
            {/* MOBILE MENU */}
            <ul className={!nav ? 'hidden' : 'absolute top-[10px] left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col justify-center items-center'}>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to='home' smooth={true} duration={500}>HOME</Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to='about' smooth={true} duration={500}>ABOUT</Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>MY SKILLS</Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to='portfolio' smooth={true} duration={500}>PORTFOLIO</Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to='experience' smooth={true} duration={500}>EXPERIENCE</Link>
                    </li>
                    <li className="py-2 text-2xl">
                        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>CONTACT</Link>
                    </li>
            </ul>
        </div>
    )
}



export default Navbar;