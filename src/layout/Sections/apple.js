import React from 'react'
import apple from '../../assets/apple.png'
import '../../assets/styles/apple.css'

function Apple() {
    return (
        <div className="apple-section-container">
            <div className="text-section">
                <h1>Watch everywhere.</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="apple-section">
                <img id="img-apple" src={apple} alt="Apple devices image" />
            </div>
        </div>
    )
}

export default Apple
