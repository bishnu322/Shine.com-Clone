import React from 'react';
// import { ReactDOM } from 'react-dom';
import './App.css'
import FunctionalComponent from './FunctionalComponent';
import LastNavBar from './LastNavBar';
import SecondNavbar from './SecondNavbar';
import Banner from './Banner';
import MiddlePart from './MiddlePart';
import CompanyDetails from './CompanyDetail';
import NewBody from './NewBody';
import Createprofile from './CreateProfile';
import Footer from './Footer';
import PremiumSwipper from './PremiumSwipper.js'



// with jsx
// const name = <span>hello react</span>;

// without jsx
// const newElement = React.createElement("h2", {classname:"newElement"}, "this is without xml code in react")

// es6 fat-arrow-function
// const newFun = () =>{
//   alert("hello Bishnu")
// }

// object in jsx
// creating object and calling through function
// const user = {
//   firstName : "Bishnu",
//   lastName : "Kohar"
// }

// const objectFun = (user) =>{
//   return  user.firstName + " " + user.lastName
// }

function App() {
  return (
    <div className="App">
      {/* <h1>hello Bishnu kohar {name}</h1>
      {newElement}
      <button onClick ={newFun}>click</button>
      <h1>This is {objectFun(user)}</h1> */}

      <FunctionalComponent />
      <SecondNavbar /> 
      <LastNavBar />
      <Banner />
      <MiddlePart />
      <CompanyDetails />
      <NewBody />
      <Createprofile />   
      <PremiumSwipper />     
      <Footer />
    </div>
  );
}

export default App;
