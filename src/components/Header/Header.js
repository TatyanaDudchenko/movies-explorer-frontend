import headerLogo from '../../images/logo.svg';
import './Header.css';
import NavBar from '../NavBar/NavBar';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={headerLogo} alt='Логотип Movies Explorer' />
            <NavBar />
        </div>
    )
}

export default Header;