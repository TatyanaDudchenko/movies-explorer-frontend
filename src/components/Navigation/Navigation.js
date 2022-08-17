import './Navigation.css';
import { useLocation, NavLink } from 'react-router-dom';

function Navigation({ isAuth, onMenuPopup }) {

    let location = useLocation();

    return (
        <>
            {!isAuth &&
                <nav className='header__navbar header__navbar_justify-content_end'>
                    <NavLink to='/signup' className='header__navbar_item header__navbar_item-register'>Регистрация</NavLink>
                    <NavLink to='/signin' className='header__navbar_item header__navbar_item-login'>Войти</NavLink>
                </nav>
            }

            {isAuth &&
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
                                Сохраненные фильмы
                            </NavLink>
                        </div>
                        <NavLink exact to='/' className='header__navbar_item header__navbar_item-account'>Аккаунт</NavLink>
                    </nav>
                </>
            }
        </>
    )
}

export default Navigation;