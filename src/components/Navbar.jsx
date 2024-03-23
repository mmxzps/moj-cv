import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import Thumbsup from '../assets/pictures/profb.png'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const showMenu = () => setOpenMenu(!openMenu)
  return (
    <div className='navbarContainer'>
      <div className="headerr">
        <Link className="ham-menu">
          <FaIcons.FaBars onClick={showMenu} />
        </Link>
      </div>

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
      </ul>

      <nav className={openMenu ? 'nav-menu activee' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='ham-menu'>
            <FaIcons.FaBars onClick={showMenu} />
            </Link>
          </li>
          <li><NavLink to="/" onClick={showMenu}>Home</NavLink></li>
            <li><NavLink to="about" onClick={showMenu}>About me</NavLink></li>
            <li><NavLink to="projects" onClick={showMenu}>Projects</NavLink></li>
            <li><NavLink to="jobs" onClick={showMenu}>Previous Jobs</NavLink></li>
            <li><NavLink to="educations" onClick={showMenu}>Educations</NavLink></li>
            <li><NavLink to="skills" onClick={showMenu}>Skills</NavLink></li>
            <li><NavLink to="contact" onClick={showMenu}>Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
