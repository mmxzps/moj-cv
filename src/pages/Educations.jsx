import data from '../assets/data.json'
import React, { useState, useEffect } from 'react';

const Educations = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    setEducationData(data[0].educations);
  }, []);
  return (
    <>
      <main>
        <div className="edutimeline">
          {
            educationData.map((e) =>
            (
              <div className="educontainer right-container" key={e.school}>
                <img src={e.img} alt="school-logo" className="edupic" />
                <div className="text-box">
                  <h2>{e.school}</h2>
                  <small>{e.year}</small>
                  <p className="eduinfo">{e.major}</p>
                </div>
              </div>
            ))
          }
        </div>
      </main >
    </>
  )
}

export default Educations
