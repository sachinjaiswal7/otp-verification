import React from 'react';
import '../style211.css'; 
import Artboard from "../Artboard 1.png";
function Success() {
  return (
        <div className="container">
        <img className="img" src={Artboard} alt="" />
          <div className="wl">
            <br />
            <br />
            <br />
            <h2 className="wlc">Welcome to AdmitKard</h2>
            <p className="pr">In order to provide you with a custom experience, we need to ask a few questions.</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button type="submit">Get Started</button>
            <br />
            <br />
            <br />
            <p className="lst">*This will only take 5 minutes.</p>
          </div>
        </div>
  );
}

export default Success;