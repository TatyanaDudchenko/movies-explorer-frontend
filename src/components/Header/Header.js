import headerLogo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ isAuth }) {
    return (
        <div className='header'>
            <img className='header__logo' src={headerLogo} alt='Логотип Movies Explorer' />
            <Navigation isAuth={isAuth} />
        </div>
    )
}

export default Header;