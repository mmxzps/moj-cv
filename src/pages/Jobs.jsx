import React, { useState, useEffect } from 'react'
import data from '../assets/data.json'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    setJobs(data[1].jobs);
  }, []);
  return (
    <>
      <main>
        <div className="edutimeline">
          {
            jobs.map((j) =>
            (
              <div className="educontainer  right-container" key={j.title}>
                <img src={j.img} alt="company-logo" className="edupic" />
                <div className="text-box">
                  <h2>{j.title}</h2>
                  <small>{j.year}</small>
                  <p className="eduinfo">{j.company}</p>
                  <span className="right-container-arrow"></span>
                </div>
              </div>
            ))
          }
          {/* <div className="educontainer left-container">
            <img src="src/assets/pictures/scanialogo.png" alt="scania-logo" className="edupic" />
            <div className="text-box">
              <h2>CNC-operator</h2>
              <small>2022-Present</small>
              <p className="eduinfo">Scania, Södertälje </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>


          <div className="educontainer  right-container">
            <img src="src/assets/pictures/scanialogo.png" alt="scania-logo" className="edupic" />
            <div className="text-box">
              <h2>Workshop Technician</h2>
              <small>2021-2022</small>
              <p className="eduinfo">Scania, Södertälje </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>


          <div className="educontainer left-container">
            <img src="src/assets/pictures/scanialogo.png" alt="scania-logo" className="edupic" />
            <div className="text-box">
              <h2>Team Leader</h2>
              <small>2019-2021</small>
              <p className="eduinfo">Scania, Södertälje </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>


          <div className="educontainer right-container">
            <img src="src/assets/pictures/scanialogo.png" alt="scania-logo" className="edupic" />
            <div className="text-box">
              <h2>Material Handler</h2>
              <small>2017-2019</small>
              <p className="eduinfo">Scania, Södertälje </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="educontainer left-container">
            <img src="src/assets/pictures/Meritor-logo.png" alt="Meritor-logo" className="edupic" />
            <div className="text-box">
              <h2>Assembler</h2>
              <small>2016-2017</small>
              <p className="eduinfo">Meritor, Lindesberg </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>


          <div className="educontainer right-container">
            <img src="src/assets/pictures/salesgroup.jpg" alt="salesgroup-logo" className="edupic" />
            <div className="text-box">
              <h2>Sales Representative</h2>
              <small>2015-2016</small>
              <p className="eduinfo">SalesGroup, Barcelona </p>
              <span className="right-container-arrow"></span>
            </div>
          </div> */}

        </div>
      </main>
    </>
  )
}

export default Jobs
