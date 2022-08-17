import headerLogo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Header({ isAuth, onMenuPopup }) {

    let location = useLocation();

    return (
        <div className={`header ${(location.pathname.includes('/error-page')) && 'header_inactive'}`}>
            <img className='header__logo' src={headerLogo} alt='Логотип Movies Explorer' />
            <Navigation isAuth={isAuth} onMenuPopup={onMenuPopup} />
        </div>
    )
}

export default Header;