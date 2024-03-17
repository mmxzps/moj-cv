import React from 'react'
import './script'
import csharp from "../assets/pictures/csharphem.png"

const Home = () => {
  return (
    <>
        <main>
          <div className="i-kortinfo">
            <div className="nameintro">
              <h2 id="mojtaba">Mojtaba Mobasheri</h2>
              <img src={csharp} alt="csharp-logo" className="i-hemlogo" />
              <p>Fullstack .NET student</p>
              <p>C#, ASP.NET, SQL, HTML, Javascript, CSS</p>
            </div>
          </div>
        </main>
        <script src="../script.js"></script>
    </>
  )
}

export default Home
