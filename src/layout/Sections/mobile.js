import React from 'react'
import mobile from '../../assets/mobile.jpg'
import '../../assets/styles/mobileSections.css'

function Mobile() {
    return (
        <div className="mobile-section-container">
            <img id="img-mobile" src={mobile} alt="Mobile" />
            <div className="text-section">
                <h1>Download your shows to watch offline.</h1>
                <p>Save your favorites easily and always have something to watch.</p>
            </div>
        </div>
    )
}

export default Mobile
