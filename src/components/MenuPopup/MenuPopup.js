import './MenuPopup.css';
import { useLocation, NavLink } from 'react-router-dom';

function MenuPopup({ isOpen, onClose }) {

    let location = useLocation();

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
            <div className='popup__container'>
                <div className='popup__icon-close_align'>
                    <button onClick={onClose} type='button' className='popup__icon-close'></button>
                </div>
                <nav className='popup__navbar'>
                    <div className='popup__navbar_item-group'>
                        <NavLink exact to='/profile' onClick={onClose}
                            className={`popup__navbar_item popup__navbar_item_margin
                            ${location.pathname.includes('/profile') && 'popup__navbar_item_current'}`}>
                            Главная
                        </NavLink>
                        <NavLink to='/movies' onClick={onClose}
                            className={`popup__navbar_item popup__navbar_item_margin
                            ${location.pathname.includes('/movies') && 'popup__navbar_item_current'}`}>
                            Фильмы
                        </NavLink>
                        <NavLink to='/saved-movies' onClick={onClose}
                            className={`popup__navbar_item popup__navbar_item_margin
                            ${location.pathname.includes('/saved-movies') && 'popup__navbar_item_current'}`}>
                            Сохранённые фильмы
                        </NavLink>
                    </div>
                    <NavLink exact to='/' onClick={onClose} className='popup__navbar_item-account'>Аккаунт</NavLink>
                </nav>

            </div>
        </div>
    )
}

export default MenuPopup;