import React from 'react';
import cx from 'classnames';
import logo from '../../images/logo-291x50.png';

const Header = () => {
    return <div className='header'>
        <a className='header__logo'>
            <img className='header__logo-img' src={logo} alt='Deskbookers' />
        </a>
    </div>;
};


export default Header;
