import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import '../../vendor/normalize.css';
import '../../vendor/fonts/fonts.css';
import './App.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';
import MenuPopup from '../MenuPopup/MenuPopup';

function App() {
  const [shouldHideHeaderAndFooter, setShouldHideHeaderAndFooter] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  // const [isAuth, setIsAuth] = useState(false);
  const isAuth = true;

  function handleHideHeaderAndFooter() {
    setShouldHideHeaderAndFooter(true);
  }

  // function handleAuth() {
  //   setIsAuth(true);
  // }

  let location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes('/signin') ||
      location.pathname.includes('/signup') ||
      location.pathname.includes('/error-page')
    ) {
      handleHideHeaderAndFooter()
    }
  }, [location]);

  function handleMenuPopupClick() {
    setIsMenuPopupOpen(true);
  }

  function closePopup() {
    setIsMenuPopupOpen(false);
  }

  return (
    <div className="page">
      {!shouldHideHeaderAndFooter && <Header isAuth={isAuth} onMenuPopup={handleMenuPopupClick} />}
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closePopup} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route exact path="/error-page">
          <ErrorPage />
        </Route>
      </Switch>
      {!shouldHideHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
