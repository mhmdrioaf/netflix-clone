import React, { Component } from 'react'
import NetflixLogo from '../../assets/Netflix_2015_logo.svg'
import '../../assets/styles/global.css';
import '../../assets/styles/header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="logo">
                    <img src={NetflixLogo} alt="Netflix Logo" />
                </div>
                <div className="btn-signin">
                    <h1>Sign In</h1>
                </div>
            </div>
        )
    }
}
