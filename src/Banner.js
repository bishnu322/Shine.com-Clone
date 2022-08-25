import React from "react";
// import { ReactDOM } from "react-dom";
import './App.css';
import Carousel from "nuka-carousel";
import bannerImg2 from './assests/newban.png';
import bannerImg1 from './assests/No-Hub Acadenmy.png';
import BannerImg5 from './assests/Untitled design.png';
import bannerImg3 from './assests/newschool.png'
const bannerImg4 = 'https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fwinter_d_home.png&w=3840&q=75';


function Banner(){
    return(
        <>
            <Carousel  wrapAround={true} slidesToShow={1} className="carouselImg">
                <img src={bannerImg1} alt="bannerImg1"/>
                <img src={bannerImg2} alt="bannerImg2"/>
                <img src={bannerImg3} alt="bannerImg3"/>
                <img src={bannerImg4} alt="bannerImg4"/>
                <img src={BannerImg5} alt="bannerImg5"/>
            </Carousel>
        </>
    )
}
export default Banner;