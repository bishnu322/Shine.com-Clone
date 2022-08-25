import React from "react";
import Img1 from './assests/search.png';
import Img2 from './assests/add-user.png';
import Img3 from './assests/human-brain.png';
import Img4 from './assests/man-in-office-desk-with-computer.png';
import Img5 from './assests/digital-marketing.png';
import Img6 from './assests/product.png';
const CareerImg = 'https://www.shine.com/next/static/images/explore-dream-career.png';
function Createprofile(){
    return(
        <>
            <div className="profileCreation">
                <div className="search">
                    <img src={Img1} alt="search"/>
                    <div className="spanSe">Search Your Dream Career</div>
                </div>

                <div className="accountCreation">
                    <img src={Img2} alt="createProfile"/>
                    <div className="spanSe">Create Your Profile</div>
                </div>
            </div>


            <div className="postyouemployer">
                <p>Are you Employer? </p>
                <div className="emplyebtn emplyebtn1">Search Your Hire</div>
                <div className="emplyebtn emplyebtn2">Post a job</div>
            </div>

            <div className="profileCreation">
                <div className="search">
                    <img src={Img4} alt="main head"/>
                    <div className="spanSe">Chief Technology Officer</div>
                </div>

                <div className="accountCreation">
                    <img src={Img3} alt="data science"/>
                    <div className="spanSe">Data Science Head</div>
                </div>
            </div>


            <div className="profileCreation1">
                <div className="search1">
                    <img src={Img5} alt="main head"/>
                    <div className="spanSe">Chief Market Officer</div>
                </div>

                <div className="accountCreation">
                    <img src={Img6} alt="data science"/>
                    <div className="spanSe">Chief Product Head</div>
                </div>
            </div>

            <div className="afteraccountCreation">
                
            </div>
            <div><p className="afteraccountCreation1">OR</p></div>


            <div className="exploreDream">
               <div>
                    <div className="carrerText">Explore Dream Career of Your Choice</div>
                    <div>
                        <button className="carrerButton">Career Planner</button>
                    </div>
               </div>
               <div>
                <img src={CareerImg} alt="ExploreCarrerimg"/> 
               </div>
                
            </div>
        </>
    )
}
export default Createprofile;