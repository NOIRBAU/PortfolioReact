import React from 'react'
import "./titles.css"
import "./portfolio.css"
import dinotur from "../assets/dinotur.png"
import dailyPlanet from "../assets/dailyPlanet.PNG"
import gitUsers from "../assets/githubUsers.PNG"
import miniMe from "../assets/miniMe.PNG"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs} from "react-icons/fa";


const portfolio = () => {
  return (
    <div name='portfolio' className='w-full h-[100vh]'>
        <div className='max-w-[1200px] mx-auto p-4 flex flex-col flex-wrap content-evenly h-full'>
            <div className='w-full'>
                <h2>My Portfolio</h2>
                <p className='text-2xl max-md:text-xl'>Check out some of my recent work:</p>
            </div>

            <div class="container__cards">

                <div class="card">
                    <div class="face front">
                        <img src={dailyPlanet}></img>
                        <h3>DAILY PLANET</h3>
                    </div>
                    <div class="face back">
                        <h3>DAILY PLANET</h3>
                        <p class="card__text">Web page made with React and Material UI. Through an API, it allows the search for current news..</p>
                        <div class="tecnos">
                            <FaReact size={30} color='rgb(185,219,243)'/>
                            <FaJs size={30} color='rgb(185,219,243)'/>
                        </div>
                        <div class="links__projects">
                            <button><a href='https://noirbau.github.io/DailyPlanet/' target='_blank'>DEMO</a></button>
                            <button><a href='https://github.com/NOIRBAU/DailyPlanet' target='_blank'>CODE</a></button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="face front">
                        <img src={gitUsers}></img>
                        <h3>GITHUB USERS</h3>
                    </div>
                    <div class="face back">
                        <h3>GITHUB USERS</h3>
                        <p class="card__text">GitHub User Finder. It works with its public API.</p>
                        <div class="tecnos">
                            <FaJs size={30} color='rgb(185,219,243)'/>
                            <FaCss3 size={30} color='rgb(185,219,243)'/>
                            <FaHtml5 size={30} color='rgb(185,219,243)'/>
                        </div>
                        <div class="links__projects">
                            <button><a href='https://noirbau.github.io/github__users/' target='_blank'>DEMO</a></button>
                            <button><a href='https://github.com/NOIRBAU/github__users' target='_blank'>CODE</a></button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="face front">
                        <img src={miniMe}></img>
                        <h3>MINI ME</h3>
                    </div>
                    <div class="face back">
                        <h3>MINI ME</h3>
                        <p class="card__text">Responsive design website. It allows you to fill out a purchase form and at the end it shows you your purchase.</p>
                        <div class="tecnos">
                            <FaHtml5 size={30} color='rgb(185,219,243)'/>
                            <FaCss3 size={30} color='rgb(185,219,243)'/>
                            <FaJs size={30} color='rgb(185,219,243)'/>
                        </div>
                        <div class="links__projects">
                            <button><a href='https://noirbau.github.io/proyBabyForm/' target='_blank'>DEMO</a></button>
                            <button><a href='https://github.com/NOIRBAU/proyBabyForm' target='_blank'>CODE</a></button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="face front">
                        <img src={dinotur}></img>
                        <h3>DINOTUR</h3>
                    </div>
                    <div class="face back">
                        <h3>DINOTUR</h3>
                        <p class="card__text">Responsive design practice using flexbox. Additionally, a contact form was validated.</p>
                        <div class="tecnos">
                            <FaHtml5 size={30} color='rgb(185,219,243)'/>
                            <FaCss3 size={30} color='rgb(185,219,243)'/>
                            <FaJs size={30} color='rgb(185,219,243)'/>
                        </div>
                        <div class="links__projects">
                            <button><a href='https://noirbau.github.io/proyectoDINOTUR' target='_blank'>DEMO</a></button>
                            <button><a href='https://github.com/NOIRBAU/proyectoDINOTUR' target='_blank'>CODE</a></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default portfolio
