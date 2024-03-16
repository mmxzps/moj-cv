import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { RingLoader } from "react-spinners";
//this css file is for my card in "projects"
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
  const projectIds = [727894890, 730794809, 731188727, 758907974];

  useEffect(() => {
    fetch(gitUrl)
      .then((resp) => resp.json())
      .then((data) => {
        //includes()-metoden används för att kontrollera om ett specifikt 
        //id finns i arrayen projectIds. Alla projekt vars id finns i 
        //projectIds-arrayen kommer att lagras i filtered-arrayen och 
        //uppdatera ditt state variabel proj.
        //"projectIds.includes(repo.id)", betyder det att du kontrollerar 
        //om id av den aktuella posten (repo.id) finns med i 
        //arrayen projectIds. Med andra ord, om repo.id matchar något 
        //av id:n i projectIds, kommer den att läggs i "filtered" 
        const filtered = data.filter(repo => projectIds.includes(repo.id));

        //Vi har satt en delay så att vi får se loading animeringen.
        setTimeout(() => {
          //Här lägger vi filtrerade datan inuti vår "proj"
          setProj(filtered)
          //Här sätter vi loading till false EFTER att vi har fått vår data.
          setisLoading(false)
        }, 900)
      })
  }, [])

  // här lägger vi en if-sats före våran card innehåll ifall det tar långt
  // tid att hämta så kan vi visa en "loading" Animation.
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
        <div className='För att gömma koden'>
          {/* <div className="myprojects">

          <div className="kortinfo">
            <h2>Here is my two latest projects!</h2>
            <img src="src\assets\pictures/github.png" alt="github-logo" className="hemlogo" />
            <p className="kortinfo-p">•The bank app</p>
            <p className="kortinfo-p">•Music API</p>
          </div>

          <div className='container'>

            <div className="box1">
              <div className="bilden1">
                <a href="https://github.com/lucine1029/Spelar_Du_In_Bank" target="_blank">
                  <img src="src\assets\pictures/bank-logo.gif" alt="bank-logo" className="bankpic" />
                </a>
                <div className="knappen1">
                  <a href="#popup1" className="pbutton">More info</a>
                </div>
              </div>

            </div>

            <div className="box2">

              <div className="bilden2">
                <a href="https://github.com/seanie1995/SpelarDuInAPI" target="_blank">
                  <img src="src\assets\pictures/api.gif" alt="music-api-logo" className="apipic" />
                </a>
                <div className="knappen2">
                  <a href="#popup2" className="pbutton">More info</a>
                </div>
              </div>

            </div>
          </div>

          <div className="popup" id="popup1">
            <div className="pop-inner">
              <h2>SDI-Banken</h2>
              <p>My first group project that is a console app, created in C#.
                Its meant to mimic a ATM/Bank, where you can created user,
                desposit, withdraw and transfer "money" </p>
              <a href="https://github.com/lucine1029/Spelar_Du_In_Bank" className="pbutton" target="_blank">View project</a>
              <a href="#" className="pbutton">Close</a>
            </div>
          </div>

          <div className="popup" id="popup2">
            <div className="pop-inner">
              <h2>SDI Music API</h2>
              <p>My second group project where we created a minimal API
                that is connected to our database and a external API where you can
                create user and add songs, genres and artists to your favorites</p>
              <a href="https://github.com/seanie1995/SpelarDuInAPI" className="pbutton" target="_blank">View project</a>
              <a href="#" className="pbutton">Close</a>
            </div>
          </div>
        
        </div> */}
        </div>

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
                          {/* <Button variant="dark">
                            <Card.Link href={repo.html_url} target="_blank">View project</Card.Link>
                          </Button> */}
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
