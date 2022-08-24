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
import { useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';
import MenuPopup from '../MenuPopup/MenuPopup';
import * as auth from "../../utils/MainApi";

function App() {
  const [shouldHideHeaderAndFooter, setShouldHideHeaderAndFooter] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  // const [isSearchText, setIsSearchText] = useState('');
  const [isToggleClick, setIsToggleClick] = useState(false);
  // const [signedIn, setSignedIn] = useState(false);
  // const [infoemail, setInfoemail] = useState("");
  // const [userName, setUserName] = useState("");
  // const [signedIn, setSignedIn] = useState(false);
  const signedIn = true;

  const history = useHistory();

  function handleHideHeaderAndFooter() {
    setShouldHideHeaderAndFooter(true);
  }

  // function handleSignedIn() {
  //   setSignedIn(true);
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

  function handleRegister(registerState) {
    auth
      .register(registerState.password, registerState.email, registerState.userName)
      .then(() => {
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMenuPopupClick() {
    setIsMenuPopupOpen(true);
  }

  function closePopup() {
    setIsMenuPopupOpen(false);
  }

  function handleToggleClick() {
    setIsToggleClick(!isToggleClick);
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
  }

  return (
    <div className="page">
      {!shouldHideHeaderAndFooter && <Header signedIn={signedIn} onMenuPopup={handleMenuPopupClick} />}
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closePopup} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies
            movies={movies}
            onGetFoundMovies={handleGetFoundMovies}
            onToggleClick={handleToggleClick}
            onToggleClickState={isToggleClick} />
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
          <Register handleRegister={handleRegister} />
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
