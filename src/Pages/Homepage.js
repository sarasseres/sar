import React, { Fragment, } from "react";
import thumbnail from "../Assetss/smile.png";
import avatar from "../Assetss/astro.png";
import astronot from "../Assetss/astronot.png";
import oval from "../Assetss/oval.svg";
// import gambarcard1 from "../Assetss/gambar-card1.png";
// import gambarcard2 from "../Assetss/gambar-card2.png";
// import gambarcard from "../Assetss/gambar-card.png";
// import astronott from "../Assetss/astronott.png";
// import ovalicon from "../Assetss/oval-icon.svg";
import "../Assetss/icons/css/all.min.css";
import Homepage3 from './Homepage3'
import Homepage4 from './homepage4'






const Homepage = () => {

  
  return (
    <>
      <div className="header">
        <img src={thumbnail} className="thumbnail"  alt=""/>
        <div>
          <p>Good Morning</p>
          <strong className="fellas">Fellas</strong>
        </div>
      </div>
      {/* Homepage 1 Weeekend from home*/}
      <div className="background-1">
        <h1 className="weekend">WEEKEND FROM HOME</h1>
        <h4>Stay active with a little workout</h4>
        <img src={avatar} className="avatar-1" alt="" />
      </div>
      {/* Homepage 2 Definition  */}
      <div className="background-2">
        <img src={astronot} className="astronot" alt=""/>
        <div className="text">
          <p>
            <span id="definition">Definition;</span> a practice or exercise to
            test or improve one's fitness for athletic competition, ability, or
            performance to exhaust (something, such as a mine) by working to
            devise, arrange, or achieve by resolving difficulties.
            Merriam-Webster.com Dictionary.
          </p>
          <span className="code">-weekend team</span>
          <img src={oval} className="oval"  alt="" />
          <h2>Testimonial</h2>
        </div>
      </div>
      {/* Homepage 3 testimonial card */}
      
      <div className="homepagess">
        <div className="homepage3">
        <Homepage3/>  
        </div>
          <div className="pov">
            <h1>POV</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </p>
          </div>
          <div className="resources">
            <h1>Resources</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.{" "}
            </p>
          </div>

          {/* Homepage 4 help and tips*/}
          <div className="card-helpntips">
          <h1>Help and Tips</h1>
          </div>

          <Homepage4/>  
          
          {/* Yourset  */}
          <div className="youreset">
            <div className="yoursetwrap">
              <h1>You’re all set.</h1>
              <p>
                The wise man therefore always holds in these matters to this
                principle of selection.
              </p>
            </div>
          </div>
        
      </div>
      <div className="footer">
        <p className="wknd2020">wknd@2020</p>
        <button className="button">alpha version</button>
      </div>
    </>
  );
};

export default Homepage;
