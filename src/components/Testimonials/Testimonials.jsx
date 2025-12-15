import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
    const slider =useRef();
    let tx =0
    const slideForward=()=>{
     if (tx > -50){
        tx -=20;
        slider.current.style.transform=`translateX(${tx}%)`;
     }
    }
    const slideBackward=()=>{
        if (tx < 0){
        tx +=25;
        slider.current.style.transform=`translateX(${tx}%)`;
     }
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
       <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
       <div className="slider"> 
        <ul ref={slider}>    
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Selena Gaves</h3>
                            <span>Edusity,Kenya</span>
                        </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the 
                            best decisions I've ever made. The supportive community,state-of-the-art 
                            facilities ,and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,Kenya</span>
                        </div>
                        </div>
                        <p>Enrolling at Kaessy has been a transformative experience for my career path. The dedicated faculty acting as mentors, combined with a hands-on learning environment, has given me the confidence to succeed. It is more than just a degree; it is a launchpad for my future.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Jane Mwiti</h3>
                            <span>Edusity,Kenya</span>
                        </div>
                        </div>
                        <p>The culture at Edusity is unlike anywhere else. From day one, I felt welcomed by a vibrant community that pushes you to grow. Between the diverse campus life and the challenging curriculum, I’ve found exactly the environment I needed to thrive both personally and academically.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Jack Smith</h3>
                            <span>Edusity,Kenya</span>
                        </div>
                        </div>
                        <p>What stands out most about Edusity is the incredible access to resources. The innovative learning spaces and advanced technology make studying here a pleasure. The university's dedication to providing the best possible student experience is evident in every aspect of campus life.</p>
                </div>
            </li>
        </ul>
       </div>
    </div>
  )
}

export default Testimonials
