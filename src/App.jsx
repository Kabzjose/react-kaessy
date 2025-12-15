import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Video from "./components/Videoplayer/Video";
import { useState } from "react";
const App = () => {
  const [playstate,setPlaystate]=useState(false);
  return(
   <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle='Our Program' title='What We Offer'/>
     <Programs/>
     <About setPlaystate={setPlaystate}/>
     <Title subTitle='Gallery' title='Campus Photos'/>
     <Campus/>
      <Title subTitle='Testimonials' title='What Our Students Say'/>
     <Testimonials/>
     <Title subTitle='Contact Us' title='Get in touch'/>
     <Contact/>
     <Footer/>
    </div>
   
    <Video playstate={playstate} setPlaystate={setPlaystate}/>
   </div>
)
};
export default App;