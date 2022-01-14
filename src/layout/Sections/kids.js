import React from 'react'
import kids from '../../assets/netflix-kids.png'
import '../../assets/styles/kids.css'

function Kids() {
    return (
        <div className="kids-section-container">
            <div className="kids-images-section">
                <img id="img-kids" src={kids} alt="Netflix Kids Images" />
            </div>
            <div className="text-section">
                <h1>Create profiles for kids.</h1>
                <p>Send kids on adventures with their favorite characters in a space made just for them-free with your membership.</p>
            </div>
        </div>
    )
}

export default Kids
