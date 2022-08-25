import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import searching from './assests/searching.png';
import notification from './assests/notification.png';
import user from './assests/user.png';
import shopping from './assests/shopping-cart.png';
const logo = "https://www.shine.com/next/static/images/shine-logo.png";

function SecondNavbar(){
    return(
        <>
            <div className="secondNav">
              <div className='leftSecNav'>
                <img src={logo}  alt="logo"/>
                <input placeholder='job title, skills'/>
                <img src={searching} alt="searching"/>
              </div>

              <div className='rightSecNav'> 
                <img src={notification} alt="notification"/>
                <img src={shopping} alt="shopping"/>
                <img src={user} alt="user"/>
              </div>
            </div>
        </>
    )
}
export default SecondNavbar;