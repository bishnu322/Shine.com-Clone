import React from "react";
// import { ReactDOM } from "react-dom";
import './App.css';
const infosisImg = 'https://www.infosys.com/content/dam/infosys-web/en/about/images/esg-policies.jpg';
const adityaBirla = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUO0Ey3Bu04U7jPicXFZ8mgqrotSYllMbrDA&usqp=CAU';
const teleperformanceImg = 'https://en.amwalalghad.com/wp-content/uploads/2020/11/Teleperformance-Egypt-2.jpg';
const genpactImg = 'https://cdn.siasat.com/wp-content/uploads/2022/02/Genpact-Campus.jpg';
const SbiImg = 'https://assets.telegraphindia.com/telegraph/2021/Dec/1639065662_state-bank-of-india.jpg';

const fontStyle = {
    marginTop : '10px',
    color : "red",
}
const comment = {
    fontSize : '40px',
    fontWeight : "bold", 
    textAlign : "center",
}
function CompanyDetails(){
    return(
        <>
            <div className="CompanyDetails">
                <ul>
                    <li>
                        <div><img src={infosisImg} alt='infosisImg'/></div>
                        <div style={fontStyle}>INFOSIS</div>
                    </li>

                    <li>
                        <div><img src={adityaBirla} alt="ADG"/></div>
                        <div style={fontStyle}>ADITYA BIRLA GROUP</div>
                    </li>

                    <li>
                        <div><img src={teleperformanceImg} alt="teleperformanceImg"/></div>
                        <div style={fontStyle}>TELEPERFORMANCE</div>    
                    </li>

                    <li>
                        <div><img src={genpactImg} alt="genpacket"/></div>
                        <div style={fontStyle}>GENPACT</div>
                    </li>

                    <li>
                        <div><img src={SbiImg} alt="sbiImg"/></div>
                        <div style={fontStyle}>SBI LIFE</div>
                    </li>
                </ul>
            </div>

            <div style={comment}>Be An Early Applicant</div>
        </>
    )
}

export default CompanyDetails;