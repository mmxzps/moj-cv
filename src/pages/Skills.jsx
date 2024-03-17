import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import csharpp from '../assets/pictures/skillslogo/csharp.png'
import css3 from '../assets/pictures/skillslogo/css3.png'
import dotnet from '../assets/pictures/skillslogo/dotnet.png'
import git from '../assets/pictures/skillslogo/git.png'
import github from '../assets/pictures/skillslogo/github.png'
import html5 from '../assets/pictures/skillslogo/html5.png'
import javascript from '../assets/pictures/skillslogo/javascript.png'
import sqlserver from '../assets/pictures/skillslogo/m-sqlserver.png'
import react from '../assets/pictures/skillslogo/react.png'
import vite from '../assets/pictures/skillslogo/vite-light.png'

const Skills = () => {
  return (
    <div className='skillContainer'>

      <div className="skillsImgContainer">
        <div className="skillsLogo">
          <div><img src={csharpp} alt="csharp-logo" /></div>
          <div><img src={css3} alt="css3-logo" /></div>
          <div><img src={dotnet} alt="dotnet-logo" /></div>
          <div><img src={git} alt="git-logo" /></div>
          <div><img src={github} alt="github-logo" /></div>
          <div><img src={html5} alt="html5-logo" /></div>
          <div><img src={javascript} alt="javascript-logo" /></div>
          <div><img src={sqlserver} alt="sqlserver-logo" /></div>
          <div><img src={react} alt="react-logo" /></div>
          <div><img src={vite} alt="vite-logo" /></div>

        </div>
      </div>

    </div>
  )
}

export default Skills
