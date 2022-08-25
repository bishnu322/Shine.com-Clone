import React from "react";
// import ReactDOM from "react-dom";
import Img1 from './assests/suitcase.png';
import Img2 from './assests/pin.png';

function NewBody(){
    return(
        <>
            <div className="New-Body-Container">
                <div className="job-carosel">
                    <div className="productHeading">Product Manager - Personal Loan</div>
                    <div className="span">Indusland Bank Limited</div>
                    <div className="experience">
                        <ul>
                            <li>
                                <img src={Img2} alt='img1'/>
                                Bangalore</li>
                            <li>
                                <img src={Img1} alt='experience'/>
                                10 to 12 Yrs</li>
                        </ul>
                    </div>

                    <div className="joiningData">
                        <ul>
                            <li>Be an Early Appicant</li>
                            <li>Regular</li>
                        </ul>
                    </div>
                    <div className="caroselButton">
                        <span>Apply</span>
                    </div>
                </div>



                <div className="job-carosel">
                    <div className="productHeading">Senior Engineer, Global Data Strategy</div>
                    <div className="span">Ryan</div>
                    <div className="experience"> 
                        <ul>
                            <li>
                                <img src={Img2} alt='img1'/>
                                Hyderabad
                             </li>
                            <li>
                                <img src={Img1} alt='experience'/>
                                2 to 6 Yrs

                            </li>
                        </ul>
                    </div>

                    <div className="joiningData">
                        <ul>
                            <li>Be an Early Appicant</li>
                            <li>Regular</li>
                        </ul>
                    </div>
                    <div className="caroselButton">
                        <span>Apply</span>
                    </div>
                </div>


                <div className="job-carosel">
                    <div className="productHeading">Python ML Engineer</div>
                    <div className="span">Adobe System</div>
                    <div className="experience"> 
                        <ul>
                            <li>
                                <img src={Img2} alt='img1'/>
                                Bangalore
                             </li>
                            <li>
                                <img src={Img1} alt='experience'/>
                                2 to 5 Yrs

                            </li>
                        </ul>
                    </div>

                    <div className="joiningData">
                        <ul>
                            <li>Be an Early Appicant</li>
                            <li>Regular</li>
                        </ul>
                    </div>
                    <div className="caroselButton">
                        <span>Apply</span>
                    </div>
                </div>


                
                <div className="job-carosel">
                    <div className="productHeading">Grab  opportunity for AVP Account Manager</div>
                    <div className="span">CSS Corp Pvt Ltd</div>
                    <div className="experience"> 
                        <ul>
                            <li>
                                <img src={Img2} alt='img1'/>
                                Hyderabad
                             </li>
                            <li>
                                <img src={Img1} alt='experience'/>
                                10 to 15 Yrs

                            </li>
                        </ul>
                    </div>

                    <div className="joiningData">
                        <ul>
                            <li>Be an Early Appicant</li>
                            <li>Regular</li>
                        </ul>
                    </div>
                    <div className="caroselButton">
                        <span>Apply</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewBody;