import { faFacebookF, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="project-body">
                <div className='footer-social'>

                    <div className='top-banner-social'>
                        <FontAwesomeIcon icon={faEnvelope} className="social-icon-footer" />
                        <p>Email: demo.demo@gmail.com</p>
                    </div>
                    <div className='top-banner-social'>
                        <FontAwesomeIcon icon={faPhone} className="social-icon-footer" />
                        <p className=''>+1212121212 /</p>
                        <FontAwesomeIcon icon={faWhatsapp} className="social-icon-footer" />
                        <p className=''>+5465555545</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebookF} className="social-icon-footer" />
                        <FontAwesomeIcon icon={faInstagram} className="social-icon-footer" />
                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon-footer" />
                    </div>
                </div>
            </div>
            <hr />

            <div className='copy-right'>
                <p>Copyright {new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default Footer;