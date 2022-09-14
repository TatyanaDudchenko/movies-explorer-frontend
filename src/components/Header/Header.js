import headerLogo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header({ signedIn, onMenuPopup }) {

    let location = useLocation();

    return (
        <div className={`header ${(location.pathname.includes('/error-page')) && 'header_inactive'}`}>
            {location.pathname.includes('/movies') ||
                location.pathname.includes('/saved-movies') ||
                location.pathname.includes('/profile') ?
                <Link to='/'><img className='header__logo' src={headerLogo} alt='Логотип Movies Explorer' /></Link> :
                <img className='header__logo' src={headerLogo} alt='Логотип Movies Explorer' />
            }
            <Navigation signedIn={signedIn} onMenuPopup={onMenuPopup} />
        </div>
    )
}

export default Header;