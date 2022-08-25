import React from "react";
// import ReactDOM from "react-dom";
import './App.css';
import assesmentImg1 from './assests/briefcase.png';
import CareerPathImg from './assests/directions.png';
import dreamJobImg from './assests/job.png';

function MiddlePart(){
    return(
        <>
            <div className="middlePart">
                <ul>
                    <li>
                        <div>
                            <img src={assesmentImg1} alt="ThisisImg1"/>
                        </div>
                        <div>assesment</div>
                    </li>
                    <li>
                        <div>
                            <img src={CareerPathImg} alt="ThisisImg2"/>
                        </div>
                        <div>Career Path</div>
                    </li>
                    <li>
                        <div>
                            <img src={dreamJobImg} alt="ThisisImg3"/>
                        </div>
                        <div>Dream Job</div>
                    </li>
                </ul>
            </div>

            <div className="middleDown">
                    <ul>
                        <li>COOL PLACES TO WORK</li>
                        <li>TOP COMPANIES HIRING</li>
                    </ul>
            </div>

        </>
    )
}
export default MiddlePart;