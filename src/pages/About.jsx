import React, { useState } from 'react'
import './script.js'

const About = () => {
  const [ismodalVisible, setIsMobalVisible] = useState(false);
  const toggleModal=()=>{
    setIsMobalVisible(!ismodalVisible)
  }
  return (
    <>
      <main>
        <div className="aboutmeinfo">
          <p>
          <h3>Welcome to my portfolio!</h3> <br />
            My name is Mojtaba, and I'm a curious student in .NET development with a
            great interest in web design and programming. My coding journey began not
            long ago when I threw myself into studies of .NET. However, my interest in
            web development has always been there, and it has only grown stronger over
            time. To create websites that are functional, beautiful and easy to
            navigate around has always attracted me, and that is one of the reasons
            why I'm now exploring the possibilities in both frontend and backend
            development. <br />
            <br />
            Lately, I have worked with backend development as well, and I must say it
            has opened up a whole new world of possibilities. Being able to create
            robust and efficient systems that seamlessly work together with the
            frontend is something I would love to learn more about.
            <br />
            <br />
            Through my portfolio, I hope to share my projects and experiences that I
            have develope so far, as well as my skills in both web design and
            programming. <br />
            <br />I always strive to learn more and evolve as a developer, and I look
            forward to seeing what the future holds in the world of technology and
            coding. Thank you for taking the time to explore my portfolio, and feel
            free to contact me if you have any questions or would like to discuss
            potential
            <span id="collab"> collaborations!</span>
          </p>
          
          {/*Modal pop up */}
          <div id="myModal" className="modal">
            <div className="modal-content">
              <a href="#" className="close"> x </a>

              <div className="contact-container">
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-left" >
                  <div className="contact-left-title">
                    <h3>Well now that you're here lets connect and collaborate😉</h3>
                    <hr />
                  </div>
                  <input type="hidden" name="access_key" defaultValue="92a387f1-48c3-46e5-af49-ef5f125c3aac"/>
                  <input type="text" name="name" placeholder="Your Name" className="contact-input" required=""/>
                  <input type="email" name="email" placeholder="Your Email" className="contact-input" required=""/>
                  <textarea name="message" placeholder="Your message..." className="contact-input" required="" defaultValue={""}/>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <script src="script.js"></script>
      
    </>
  )
}

export default About
