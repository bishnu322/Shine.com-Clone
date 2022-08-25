import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./App.css"

// import required modules
import { Pagination } from "swiper";
const PremiumImg1 = 'https://static1.shine.com/l/m/product_image/images_all/1640935815_1767.png';
const PremiumImg2 = 'https://static1.shine.com/l/m/product_image/images_all/1640925161_7427.png';
const PremiumImg3 = 'https://static1.shine.com/l/m/product_image/images_all/1640940094_8952.png';
const PremiumImg4 = 'https://static1.shine.com/l/m/product_image/images_all/1640940067_8280.png';
const PremiumImg5 = 'https://static1.shine.com/l/m/product_image/images_all/1641281065_6109.jpg';
const PremiumImg6 = 'https://static1.shine.com/l/m/product_image/images_all/1641281122_8323.jpg';


const PremiumDataObj = {
    data1 :{
        title : "Application Highlighter",
        subtitle : "Highlight your job Application & improve visibility to recruiter. Increase your Chances to get Job.",
        price : 1699,
        leftbtn : 'Explore',
        rightbtn : 'Talk to expert'
    },
    data2 :{
        title : "Featured Profile",
        subtitle : "Get more visibility in recruiter searches by getting a priority applicant tag with this service.",
        price : 2499,
        leftbtn : 'Explore',
        rightbtn : 'Talk to expert'
    },
    data3 :{
        title : "Application Booster Package",
        subtitle : "About Application Booster  Making a recruiter view your profile is the toughest and most difficult work for any individual",
        price : 2599,
        leftbtn : 'Explore',
        rightbtn : 'Talk to expert'
    },
    data4 :{
        title : "Resume Writing",
        subtitle : "Get an excellent resume crafted to accomplish your goals with our resume writing services",
        price : 2199,
        leftbtn : 'Explore',
        rightbtn : 'Talk to expert'
    },
    data5 :{
        title : "Jobs on the Move",
        subtitle : "Shine.com helps job seekers find the right job that matches their aspirations. It focuses on providing the most unique",
        price : 3999,
        leftbtn : 'Explore',
        rightbtn : 'Talk to expert'
    },
    data6 :{
        title : "Improved Visibility Package",
        subtitle : "A combo with featured profile for 3 months and resume booster improves your profile.",
        price : 1699,
        leftbtn : 'Explore',
        rightbtn : 'Talk to expert'
    }
}
function PremiumSwipper(){

    return(
        <>

        <div className="premiumServices"><p>Explore Our Premium Services</p></div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
            delay :1500,
            disableOnInteraction : false
        }}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swipper">
            <img src={PremiumImg1} alt="image1"/>
            <div className="swipperContainer">
                <div>
                     <h3>{PremiumDataObj.data1.title}</h3>
                </div>
            <div>
                <p>{PremiumDataObj.data1.subtitle}</p>
            </div>
            <div>
                 <h4>&#x20B9;{PremiumDataObj.data1.price} </h4>
            </div> 

            <div className="btn-container">
                <div><button className="explr-btn">{PremiumDataObj.data1.leftbtn}</button></div>
                <div><button className="expert-btn"><span>&#x260F;</span>{PremiumDataObj.data1.rightbtn}</button></div>
            </div>
            </div>        
        </SwiperSlide>

        <SwiperSlide className="swipper">
             <img src={PremiumImg2} alt="image2"/>
            
             <div className="swipperContainer">
                <div>
                     <h3>{PremiumDataObj.data2.title}</h3>
                </div>
            <div>
                <p>{PremiumDataObj.data2.subtitle}</p>
            </div>
            <div>
                 <h4>&#x20B9; {PremiumDataObj.data2.price}</h4>
            </div> 

            <div className="btn-container">
                <div><button className="explr-btn">{PremiumDataObj.data2.leftbtn}</button></div>
                <div><button className="expert-btn"><span>&#x260F;</span>{PremiumDataObj.data2.rightbtn}</button></div>
            </div>
            </div>
             
        </SwiperSlide>

        <SwiperSlide className="swipper">
             <img src={PremiumImg3} alt="image3"/>

             <div className="swipperContainer">
                <div>
                     <h3>{PremiumDataObj.data3.title}</h3>
                </div>
            <div>
                <p>{PremiumDataObj.data3.subtitle}</p>
            </div>
            <div>
                 <h4>&#x20B9;{PremiumDataObj.data3.price} </h4>
            </div> 

            <div className="btn-container">
                <div><button className="explr-btn">{PremiumDataObj.data3.leftbtn}</button></div>
                <div><button className="expert-btn"><span>&#x260F;</span>{PremiumDataObj.data3.rightbtn}</button></div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swipper">
             <img src={PremiumImg4} alt="image4"/>   

             <div className="swipperContainer">
                <div>
                     <h3>{PremiumDataObj.data4.title}</h3>
                </div>
            <div>
                <p>{PremiumDataObj.data4.subtitle}</p>
            </div>
            <div>
                 <h4>&#x20B9;{PremiumDataObj.data4.price} </h4>
            </div> 

            <div className="btn-container">
                <div><button className="explr-btn">{PremiumDataObj.data4.leftbtn}</button></div>
                <div><button className="expert-btn"><span>&#x260F;</span>{PremiumDataObj.data4.rightbtn}</button></div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swipper">
              <img src={PremiumImg5} alt="image5"/>

              <div className="swipperContainer">
                <div>
                     <h3>{PremiumDataObj.data5.title}</h3>
                </div>
            <div>
                <p> {PremiumDataObj.data5.subtitle} </p>
            </div>
            <div>
                 <h4>&#x20B9; {PremiumDataObj.data5.price}</h4>
            </div> 

            <div className="btn-container">
                <div><button className="explr-btn">{PremiumDataObj.data5.leftbtn}</button></div>
                <div><button className="expert-btn"><span>&#x260F;</span>{PremiumDataObj.data5.rightbtn}</button></div>
            </div>
            </div>
         </SwiperSlide>

        <SwiperSlide className="swipper">
              <img src={PremiumImg6} alt="image6"/>       

              <div className="swipperContainer">
                <div>
                     <h3>{PremiumDataObj.data6.title}</h3>
                </div>
            <div>
                <p>{PremiumDataObj.data6.subtitle}</p>
            </div>
            <div>
                 <h4>&#x20B9;{PremiumDataObj.data6.price}</h4>
            </div> 

            <div className="btn-container">
                <div><button className="explr-btn">{PremiumDataObj.data6.leftbtn}</button></div>
                <div><button className="expert-btn"><span>&#x260F;</span>{PremiumDataObj.data6.rightbtn}</button></div>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="swipper">

        </SwiperSlide>
        <SwiperSlide className="swipper">

        </SwiperSlide>
       
      </Swiper>
        </>
    )
}

export default PremiumSwipper;