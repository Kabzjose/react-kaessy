import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>  
            <h1>We ensure better education for a better world</h1>
           <p>Our cutting edge curriculum is designed to empower students with
            knowledge and skills for the future. Join us to embark on a journey of
            learning and growth. Together, let's shape a brighter tomorrow through
            education.
           </p>
           <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
