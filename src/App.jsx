import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
const App = () => {
  return(
   <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle='Our Program' title='What We Offer'/>
     <Programs/>
     <About/>
     <Title subTitle='Gallery' title='Campus Photos'/>
     <Campus/>
     <Title subTitle='TESTIMONIALS' title='What a student says'/>
     <Testimonials/>
    </div>
   
    
   </div>
)
};
export default App;