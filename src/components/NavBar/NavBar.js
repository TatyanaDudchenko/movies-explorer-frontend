import './NavBar.css';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

function NavBar() {
    return (
        <Switch>
            <Route exact path='/'>
                <nav className='header__navbar header__navbar_justify-content_end'>
                    <button className='header__navbar_item header__navbar_item-register'>Регистрация</button>
                    <button className='header__navbar_item header__navbar_item-login'>Войти</button>
                </nav>
            </Route>
            <Route path='/movies'>
                <nav className='header__navbar header__navbar_justify-content_space-between'>
                    <div className='header__navbar_item-group'>
                        <button className='header__navbar_item header__navbar_item-register'>Фильмы</button>
                        {/* добавить модификатор для фильмы жирным */}
                        <button className='header__navbar_item header__navbar_item-register'>Сохраненные фильмы</button>
                    </div>

                    <button className='header__navbar_item header__navbar_item-account'>Аккаунт</button>
                </nav>
            </Route>
            <Route path='/saved-movies'>
                <nav className='header__navbar header__navbar_justify-content_space-between'>
                    <div className='header__navbar_item-group'>
                        <button className='header__navbar_item header__navbar_item-register'>Фильмы</button>
                        <button className='header__navbar_item header__navbar_item-register'>Сохраненные фильмы</button>
                        {/* добавить модификатор для сохраненные фильмы жирным */}
                    </div>

                    <button className='header__navbar_item header__navbar_item-account'>Аккаунт</button>
                </nav>
            </Route>
        </Switch>
    )
}

export default NavBar;

// <nav className="navbar">
// <Switch>
//   <Route path="/signin">
//     <NavLink className="navbar__item" to="/signup">
//       Регистрация
//     </NavLink>
//   </Route>
//   <Route path="/signup">
//     <NavLink className="navbar__item" to="/signin">
//       Войти
//     </NavLink>
//   </Route>
//   <ProtectedRoute exact path="/" signedIn={signedIn}>
//     <button className="navbar__item navbar__item_button navbar__item_button-email">{email}</button>
//     <button onClick={signout} className="navbar__item navbar__item_button navbar__item_button-exit">Выйти</button>
//     {/* <NavLink onClick={signout} className="navbar__item" to="/signup">
//       Выйти
//     </NavLink> */}
//   </ProtectedRoute>
// </Switch>
// </nav>




// import './NavBar.css';
// import { Switch } from "react-router-dom";
// import { Route } from "react-router-dom";

// function NavBar() {
//     return (
//         <nav className='header__navbar'>
//             <Switch>
//                 <Route exact path='/'>
//                     <button className='header__navbar_item header__navbar_item-register'>Регистрация</button>
//                     <button className='header__navbar_item header__navbar_item-login'>Войти</button>
//                 </Route>
//                 <Route path='/movies'>
//                     <button className='header__navbar_item header__navbar_item-register'>Фильмы</button>
//                     <button className='header__navbar_item header__navbar_item-login'>Сохраненные фильмы</button>
//                 </Route>

//             </Switch>
//         </nav>
//     )
// }

// export default NavBar;

