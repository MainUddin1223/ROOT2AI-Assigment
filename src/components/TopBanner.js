import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCircleQuestion, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Style.css'


const TopBanner = () => {
    return (
        <div className='top-banner'>
            <div className='top-banner-container'>
                <div className='top-banner-social'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p className='contact-info'>+1212121212 /</p> 
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <p className='contact-info'>+5465555545 <span className='divider'>|</span></p> 
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>Email: <span className='contact-info'>demo@demo.com</span></p>
                </div>
                <div className='top-banner-social'>
                    <FontAwesomeIcon icon={faCircleQuestion} className="question-icon"/>
                    <p>Have any question?</p>
                    <p>
                        <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
                        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;