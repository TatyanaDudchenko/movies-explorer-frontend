import React from 'react';
import { Route, Switch } from 'react-router-dom';
import api from '../../utils/MoviesApi';
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
import { useState, useEffect, useCallback } from 'react';
import ErrorPage from '../ErrorPage/ErrorPage';
import MenuPopup from '../MenuPopup/MenuPopup';
import * as auth from '../../utils/MainApi';

function App() {
  const [shouldHideHeaderAndFooter, setShouldHideHeaderAndFooter] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  // const [isSearchText, setIsSearchText] = useState('');
  const [isToggleClick, setIsToggleClick] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  // const [userName, setUserName] = useState('');
  // const [signedIn, setSignedIn] = useState(false);
  // const signedIn = true;

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
      .register(registerState.name, registerState.email, registerState.password)
      .then(() => {
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(loginState) {
    auth
      .authorize(loginState.password, loginState.email)
      .then((data) => {
        if (!data.token) return;

        localStorage.setItem('jwt', data.token);
        setSignedIn((old) => ({ ...old, signedIn: true }));

        emailCheck();

        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');

    if (!localStorage.getItem('jwt')) return;
    auth
      .checkToken(jwt)
      .then((res) => {
        if (!res) return;

        setSignedIn({
          signedIn: true,
        });

        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [history])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  function emailCheck() {
    const jwt = localStorage.getItem('jwt');

    auth
      .checkToken(jwt)
      .then((res) => {
        if (!res) return;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function signout() {
  //   setSignedIn(false);
  //   localStorage.removeItem('jwt');
  //   history.push('/signin');
  // }

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
    <div className='page'>
      {!shouldHideHeaderAndFooter && <Header signedIn={signedIn} onMenuPopup={handleMenuPopupClick} />}
      <MenuPopup isOpen={isMenuPopupOpen} onClose={closePopup} />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/movies'>
          <Movies
            movies={movies}
            onGetFoundMovies={handleGetFoundMovies}
            onToggleClick={handleToggleClick}
            onToggleClickState={isToggleClick} />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signin'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/signup'>
          <Register handleRegister={handleRegister} />
        </Route>
        <Route exact path='/error-page'>
          <ErrorPage />
        </Route>
      </Switch>
      {!shouldHideHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
