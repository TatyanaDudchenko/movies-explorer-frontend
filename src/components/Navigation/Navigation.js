import './Navigation.css';
import { useLocation, NavLink } from 'react-router-dom';

function Navigation({ signedIn, onMenuPopup }) {

    let location = useLocation();

    return (
        <>
            {!signedIn &&
                <nav className='header__navbar header__navbar_justify-content_end'>
                    <NavLink to='/signup' className='header__navbar_item header__navbar_item-register'>Регистрация</NavLink>
                    <NavLink to='/signin' className='header__navbar_item header__navbar_item-login'>Войти</NavLink>
                </nav>
            }

            {signedIn &&
                <>
                    <div className='header__menu'>
                        <button onClick={onMenuPopup} className='header__menu-button'></button>
                    </div>
                    <nav className='header__navbar header__navbar_justify-content_space-between header__navbar_inactive'>
                        <div className='header__navbar_item-group'>
                            <NavLink to='/movies'
                                className={`header__navbar_item header__navbar_item-movies
                            ${location.pathname.includes('/movies') && 'header__navbar_item_current'}`}>
                                Фильмы
                            </NavLink>
                            <NavLink to='/saved-movies'
                                className={`header__navbar_item header__navbar_item-movies
                            ${location.pathname.includes('/saved-movies') && 'header__navbar_item_current'}`}>
                                Сохранённые фильмы
                            </NavLink>
                        </div>

                        {location.pathname.includes('/profile') && <NavLink exact to='/' className='header__navbar_item-account'>Главная</NavLink>}

                        <NavLink to='/profile' className={`header__navbar_item-account
                        ${location.pathname.includes('/profile') && 'header__navbar_item-account_inactive'}`}>Аккаунт</NavLink>
                    </nav>
                </>
            }
        </>
    )
}

export default Navigation;