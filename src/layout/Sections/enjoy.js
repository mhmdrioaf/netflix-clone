import React from 'react'
import '../../assets/styles/enjoySections.css'
import tv from '../../assets/tv.png'
import tvVideo from '../../assets/video-tv.m4v'

function Enjoy() {
    return (
        <div className="enjoy-container">
            <div className="text-section">
                <h1>Enjoy on your TV.</h1>
                <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className="tv-section">
                <img id="img-tv" src={tv} alt="Tv" />
            </div>
        </div>
    )
}

export default Enjoy
