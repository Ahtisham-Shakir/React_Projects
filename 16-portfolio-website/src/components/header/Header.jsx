import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Ahtisham Shakir</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>

        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>

        
      </div>
    </header>
  )
}

export default Header