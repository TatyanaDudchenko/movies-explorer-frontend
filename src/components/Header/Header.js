import headerLogo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ isAuth, onMenuPopup }) {
    return (
        <div className='header'>
            <img className='header__logo' src={headerLogo} alt='Логотип Movies Explorer' />
            <Navigation isAuth={isAuth} onMenuPopup={onMenuPopup} />
        </div>
    )
}

export default Header;