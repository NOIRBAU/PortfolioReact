import React from 'react';
import './home.css'
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <div name='home' className='max-w-[1280px] h-full max-md:h-[100vh] flex justify-between items-center my-[70px] container__home m-auto'>
      {/* CONTAINER-LEFT */}
      <div className='w-3/5 pl-[40px] flex flex-col justify-center container__left'>
        <p class="font-helloWorld">Hello, world!</p>
        <div class="font-typing__container">
          <p class="font-myName font-typing">I'm Nelly Bautista </p>
        </div>
        <p className='text-[30px] max-md:text-base'>I love designing and keep learning new technologies in order to improve my skills.</p>
        <select name="select" title="Select a language" class="language__button">
          <option value="English">English</option>
          <option value="Español">Español</option>
        </select>
      </div>
      {/* CONTAINER-RIGHT */}
      <div className='w-2/5 h-[90vh] pl-[40px] flex flex-col justify-center container__right -z-10'>
        <div class="container__geometric">
          <div class="squares">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <div class="butterfly">
            <img src={logo} alt='logo'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
