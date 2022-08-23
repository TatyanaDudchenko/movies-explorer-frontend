import React from 'react';
import { Route, Switch } from 'react-router-dom';
import api from "../../utils/MoviesApi";
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
  const [movies, setMovies] = useState([]);
  // const [isSearchText, setIsSearchText] = useState('');
  const [isToggleClick, setIsToggleClick] = useState(false);
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
      location.pathname.includes('/signup')
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

  function handleToggleClick() {
    if (isToggleClick) {
      setIsToggleClick(true);
    }
  }

  function handleGetFoundMovies() {
    api.getFoundMovies()
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
        const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
        setMovies(localStorageMovies);
      })
      .catch((err) => {
        console.log(err);
      });

    // localStorage.setItem('toggleState', JSON.stringify(isToggleClick));
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
          <Movies
            movies={movies}
            onGetFoundMovies={handleGetFoundMovies}
            // onSearchText={isSearchText}
            onToggleClick={handleToggleClick} />
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
