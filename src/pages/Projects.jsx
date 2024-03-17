import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RingLoader } from "react-spinners";
import 'bootstrap/dist/css/bootstrap.min.css';
import briefcase from "../assets/pictures/briefcase1.png"

function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const toggleModal = () =>{
    setIsModalVisible(!isModalVisible)
  }

  const [proj, setProj] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const gitUrl = 'https://api.github.com/users/mmxzps/repos'
  const projectIds = [727894890, 730794809, 731188727, 758907974, 761428278, 773109176];

  useEffect(() => {
    fetch(gitUrl)
      .then((resp) => resp.json())
      .then((data) => {
        const filtered = data.filter(repo => projectIds.includes(repo.id));
        setTimeout(() => {
          setProj(filtered)
          setisLoading(false)
        }, 900)
      })
  }, [])

  if (isLoading) {
    return (
      <div className='loadContainer'>
        <div className="loders">
          <RingLoader
            color="#f37013"
            size={99}
          />
        </div>
      </div>
    )
  }
  return (
    <>
      <main>

        <div className='container3'>
          <div className="box3">
            {
              proj.map(repo => {
                return (
                  <div className="cardContainer" key={repo.name}>
                    <Card>
                      <Card.Img variant="top" src={briefcase} />
                      <Card.Body>
                        <Card.Title><h4>{repo.name}</h4></Card.Title>
                        <Card.Text>
                          <h5>Language: {repo.language}</h5>
                          <span></span>
                        </Card.Text>
                        <div className="btnC">
                          <Button variant="dark">
                            <Card.Link onClick={() => { setSelectedProject(repo); toggleModal(); }}>View info</Card.Link> 
                          </Button>

                         {isModalVisible &&(
                          <section>
                           <div className="popup" id="popup1">
                           <div className="pop-inner">
                             <h2>{selectedProject.name}</h2>
                             <p>{selectedProject.description} </p>
                             <a href={selectedProject.html_url} className="pbutton modalB"  target="_blank">View project</a>
                             <a onClick={()=>{setSelectedProject(null); toggleModal();}} className="pbutton modalB">Close</a>
                           </div>
                         </div>
                         </section>
                         )}

                        </div>

                      </Card.Body>
                    </Card>
                  </div>
                )
              })
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default Projects
