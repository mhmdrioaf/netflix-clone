import React, { Component } from 'react'
import '../../assets/styles/banner.css'
import '../../assets/styles/global.css'
import bannerBackground from '../../assets/banner-background-image.jpg'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner-container">
                <div className="dim" />
                <div className="img-background">
                    <img src={bannerBackground} alt="Banner Background" />
                </div>
                <div className="slogan">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <p>Watch anywhere. Cancel anytime.</p>
                    <p id="secondLine">Ready to watch? Enter your email to create or restart your membership.</p>

                </div>
                <div className="btn-subs">
                    <input type="text"
                    placeholder="Email address"
                    className="ipt-email" />
                    <div className='btn-submit'>
                        <p>Get Started</p>
                    </div>
                </div>
            </div>
        )
    }
}
