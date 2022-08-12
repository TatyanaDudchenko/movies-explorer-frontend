import './NavBar.css';
import { useLocation } from 'react-router-dom';

function NavBar({ isAuth }) {

    let location = useLocation();

    return (
        <div>
            {!isAuth &&
                <nav className='header__navbar header__navbar_justify-content_end'>
                    <button className='header__navbar_item header__navbar_item-register'>Регистрация</button>
                    <button className='header__navbar_item header__navbar_item-login'>Войти</button>
                </nav>
            }
            {isAuth &&
                <nav className='header__navbar header__navbar_justify-content_space-between'>
                    <div className='header__navbar_item-group'>
                        <button
                            className={`header__navbar_item header__navbar_item-movies
                            ${location.pathname.includes('/movies') && 'header__navbar_item_current'}`}>
                            Фильмы
                        </button>
                        <button
                            className={`header__navbar_item header__navbar_item-movies
                            ${location.pathname.includes('/saved-movies') && 'header__navbar_item_current'}`}>
                            Сохраненные фильмы
                        </button>
                    </div>

                    <button className='header__navbar_item header__navbar_item-account'>Аккаунт</button>
                </nav>
            }
        </div>
    )
}

export default NavBar;




// import './NavBar.css';
// import { Switch } from "react-router-dom";
// import { Route } from "react-router-dom";

// function NavBar() {
//     return (
//         <Switch>
//             <Route exact path='/'>
//                 <nav className='header__navbar header__navbar_justify-content_end'>
//                     <button className='header__navbar_item header__navbar_item-register'>Регистрация</button>
//                     <button className='header__navbar_item header__navbar_item-login'>Войти</button>
//                 </nav>
//             </Route>
//             <Route path='/movies'>
//                 <nav className='header__navbar header__navbar_justify-content_space-between'>
//                     <div className='header__navbar_item-group'>
//                         <button className='header__navbar_item header__navbar_item-register'>Фильмы</button>
//                         {/* добавить модификатор для фильмы жирным */}
//                         <button className='header__navbar_item header__navbar_item-register'>Сохраненные фильмы</button>
//                     </div>

//                     <button className='header__navbar_item header__navbar_item-account'>Аккаунт</button>
//                 </nav>
//             </Route>
//             <Route path='/saved-movies'>
//                 <nav className='header__navbar header__navbar_justify-content_space-between'>
//                     <div className='header__navbar_item-group'>
//                         <button className='header__navbar_item header__navbar_item-register'>Фильмы</button>
//                         <button className='header__navbar_item header__navbar_item-register'>Сохраненные фильмы</button>
//                         {/* добавить модификатор для сохраненные фильмы жирным */}
//                     </div>

//                     <button className='header__navbar_item header__navbar_item-account'>Аккаунт</button>
//                 </nav>
//             </Route>
//         </Switch>
//     )
// }

// export default NavBar;