import headerLogo from '../../images/logo.svg';
import './Header.css';
import React from 'react';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={headerLogo} alt='Логотип Movies Explorer' />
            <nav className='header__navbar'>
                <button className='header__navbar_item header__navbar_item-register'>Регистрация</button>
                <button className='header__navbar_item header__navbar_item-login'>Войти</button>
            </nav>
        </div>
    )
}

export default Header;