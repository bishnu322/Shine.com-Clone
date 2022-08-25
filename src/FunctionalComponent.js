import React from "react";
// import ReactDOM from "react-dom";
import './App.css';
import mobileApp from "./assests/mobile-app.png";
import Employers from "./assests/employee.png";
import Help from "./assests/question.png";

function FunctionalComponent () {
    return (
        <div>
            <div className="Header"> 
                <ul>
                    <li><img src={mobileApp} alt="Mobile App"/> Download App</li>
                    <li><img src={Employers} alt="Employers"/>For Employers</li>
                    <li><img src={Help} alt="Help"/>Help</li>
                </ul>
            </div>

        </div>
    );
}

export default FunctionalComponent;