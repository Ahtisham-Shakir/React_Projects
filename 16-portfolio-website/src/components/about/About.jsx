import React from 'react'
import './about.css'
import ME from '../../assets/Ahtisham.jpg'
import { FaAward, FaUsers } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about-card'>
              <FaUsers className='about-icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>80+</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque eius, sapiente facere quasi deserunt perferendis vitae iste, quae magnam iure unde tempore tenetur molestias dicta sit asperiores, numquam totam.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About