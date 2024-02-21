import React, { useRef } from 'react';
import './Landing.css';
import backvideo from './../../assets/video/1.gif';
import backcolor from './../../assets/img/Rectangle 4.svg'
import homeGif from '../../assets/video/faceswap.gif'
import { Link } from 'react-router-dom';

export default function Landing() {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        // Повтор воспроихведения видео 
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };


    return (
        <div className="Landing">
            <div className="Back-Land">
                <div className="Back-Video">
                    {/* <video autoPlay muted playsInline onEnded={handleVideoEnd} ref={videoRef} src={backvideo}></video> */}
                    <img style={{width: '100%'}} src={homeGif} alt="" />
                </div>
                <div className="Back-Color">
                    <img src={backcolor} alt="" />
                </div>
            </div>
            <div className="Text-Land">
                <div className="Text-Lend-button">
                    <button>Powered by AI</button>
                </div>
                <div className="Text-Land-Text">
                    <h3>FaceSwap</h3>
                    <p>Find out what you would look like in iconic movies and memes.</p>
                </div>
            </div>
            <div className="Button-Land">
                <Link to={'/chose'}>
                    <span className='left'></span>
                    <div className="Green-Box">
                        <h3>Create for free</h3>
                        <p>No sign up. No credit card.</p>
                    </div>
                    <span className='Right'></span>
                </Link>
            </div>
        </div >
    );
}
