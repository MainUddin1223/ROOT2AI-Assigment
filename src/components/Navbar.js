import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='logo-container'>
                <h1>LOGO</h1>
            </div>
            <div className='nav-container'>
                <div className='logo-container'>
                    <FontAwesomeIcon icon={faHouseChimney} className="home-icon" />
                    <p className='nav-items'>Menu</p>
                    <p className='nav-items'>Menu 1</p>
                    <p className='nav-items'>Menu 2</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;