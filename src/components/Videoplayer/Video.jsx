import React, { useRef } from 'react'
import './Video.css'

const Video = ({playstate,setPlaystate}) => {
    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target===player.current){
            setPlaystate(false);
        }}
  return (
    <div className={`video-payer ${playstate?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src="https://www.w3schools.com/html/mov_bbb.mp4"  autoPlay muted controls></video>
      
    </div>
  )
}

export default Video
