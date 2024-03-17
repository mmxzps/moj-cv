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

        </div>
      </main>
    </>
  )
}

export default Jobs
