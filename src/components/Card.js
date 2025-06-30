import React from 'react';
import './Card.css';
import * as img from '../assests/img/Img.js';

const Contacts = () => {
    return (
        <section className='contactss' id='contact'>
            <h2>Contact here!</h2>
            <div className="card-wrapper">
                <div className="business-card">
                    <div className="front">
                        <img src={img.logos} alt="Logo" />
                    </div>
                    <div className="back">
                        <div className="image">
                            <img src={img.profile} alt="Profile" />
                            <h1>Marc Victor U. Causapin</h1>
                            <h2>BSCPE Student</h2>
                        </div>
                        <div className="info">
                            <div className="contact">
                                <span>Marc Victor Causapin</span>
                                <a href="https://www.facebook.com/mico.causapin" target="_blank" rel="noreferrer">
                                    <i className="ri-facebook-circle-fill"></i> Facebook
                                </a>
                            </div>
                            <div className="contact">
                                <span>@superrr_yokim</span>
                                <a href="https://www.instagram.com/superrr_yokim/" target="_blank" rel="noreferrer">
                                    <i className="ri-instagram-line"></i> Instagram
                                </a>
                            </div>
                            <div className="contact">
                                <span>@mikoy_15</span>
                                <a href="https://twitter.com/mikoy15_" target="_blank" rel="noreferrer">
                                    <i className="ri-twitter-x-line"></i> Twitter
                                </a>
                            </div>
                            <div className="contact">
                                <i className="ri-mail-fill">causapinmarcvictor@gmail.com</i> 
                            </div>
                            <div className="contact">
                                <i className="ri-phone-fill">0915-834-8143</i> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
