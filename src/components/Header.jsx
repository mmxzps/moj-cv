import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import Thumbsup from '../assets/pictures/profb.png'

const Header = () => {
  return (
    <header className='headerr'>
    <nav>
      <ul>
        <NavLink to="/">
          <img src={Thumbsup} alt="smiley picture" className="profilepic" />
        </NavLink>
        <h3 className='hnav-mm'>Mojtaba Mobasheri</h3>
        <div className="hlogoContainer">
        <a href="https://www.linkedin.com/in/mmxzps/" target="_blank">
          <img src="https://raw.githubusercontent.com/mmxzps/Lab2-Dynamisk-Sida/main/src/assets/pictures/linkedIn.png" alt="linkedIn-logo" className="logo" />
        </a>
        <a href="https://github.com/mmxzps" target="_blank">
          <img src="https://raw.githubusercontent.com/mmxzps/Lab2-Dynamisk-Sida/main/src/assets/pictures/github.png" alt="github-logo" className="logo" />
        </a>
        </div>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="about">About me</NavLink></li>
        <li><NavLink to="projects">Projects</NavLink></li>
        <li><NavLink to="jobs">Previous Jobs</NavLink></li>
        <li><NavLink to="educations">Educations</NavLink></li>
        <li><NavLink to="skills">Skills</NavLink></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header
