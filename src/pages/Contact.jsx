import React from 'react'

const Contact = () => {
  return (
    <>
      <main>
        <div id="contact-container">

            <ul>
            <li style={{ transform: "none" }}><h2>Contact me</h2></li>
              <li>-</li>
              <li><a href="mailto:mojtaba.mobasheri@hotmail.com">mojtaba.mobasheri@hotmail.com</a></li>
            </ul>
  
          <div id="contact-bg">
          {/* <h4 className='collabH4'>Contact me</h4> */}
                {/* <hr /> */}
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-left" >
              <div className="contact-left-title">
              </div>
              <input type="hidden" name="access_key" defaultValue="92a387f1-48c3-46e5-af49-ef5f125c3aac" />
              <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
              <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
              <textarea name="message" placeholder="Your message..." className="contact-input" required defaultValue={""} />

              <div className="buttonC">
                <button type="submit" className='subutton'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
