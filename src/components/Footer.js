import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="project-body">
                <div className='footer-social'>
                    <div className='top-banner-social'>
                        <FontAwesomeIcon icon={faPhone} />
                        <p className='contact-info'>+1212121212 /</p>
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <p className='contact-info'>+5465555545 <span className='divider'>|</span></p>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>Email: <span className='contact-info'>demo@demo.com</span></p>
                    </div>
                </div>
                <div>
                    <p>Copyright {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;