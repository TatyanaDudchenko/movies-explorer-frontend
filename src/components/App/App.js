import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesApi from '../../utils/MoviesApi';
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
import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Redirect } from 'react-router-dom';


function App() {
  const [shouldHideHeaderAndFooter, setShouldHideHeaderAndFooter] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isToggleClick, setIsToggleClick] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [currentUser, setСurrentUser] = useState({});
  const moviesUrl = 'https://api.nomoreparties.co';

  const history = useHistory();

  useEffect(() => {
    if (signedIn) {
      Promise.all([MainApi.getUserInfo(), MoviesApi.getFoundMovies(), MainApi.getMovies()])
        .then(([userData, movies, savedMovies]) => {
          setСurrentUser(userData);
          setMovies(movies);
          setSavedMovies(savedMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [signedIn]);

  function handleHideHeaderAndFooter(props) {
    setShouldHideHeaderAndFooter(props);
  }

  let location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes('/signin') ||
      location.pathname.includes('/signup')
    ) {
      handleHideHeaderAndFooter(true)
    } else {
      handleHideHeaderAndFooter(false)
    }
  }, [location]);

  function handleRegister(registerState) {
    MainApi
      .register(registerState.name, registerState.email, registerState.password)
      .then(() => {
        handleLogin(registerState);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(loginState) {
    MainApi
      .authorize(loginState.email, loginState.password)
      .then((data) => {
        if (!data.token) return;

        localStorage.setItem('jwt', data.token);
        setSignedIn((old) => ({ ...old, signedIn: true }));

        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');

    if (!localStorage.getItem('jwt')) return;
    MainApi
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

  function signout() {
    setSignedIn(false);
    localStorage.removeItem('jwt');
    history.push('/signin');
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

  function handleUpdateUser(props) {
    MainApi
      .editProfile(props)
      .then((userData) => {
        setСurrentUser(userData);
      })
      .then(() => <Redirect to='/movies' />)
      .catch((err) => {
        console.log(err);
      });
  }

  function handleGetFoundMovies() {
    MoviesApi.getFoundMovies()
      .then((movies) => {
        localStorage.setItem('movies', JSON.stringify(movies));
        const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
        setMovies(localStorageMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
    if (!localStorage.getItem('movies')) return;
    setMovies(localStorageMovies);
  }, []);

  useEffect(() => {
    const localStorageToggleState = JSON.parse(localStorage.getItem('toggleState'));
    if (!localStorage.getItem('toggleState')) return;
    setIsToggleClick(localStorageToggleState);
  }, []);

  // обработчик удаления фильма из списка сохраненных
  function handleMovieLikeDelete(movie, savedMovies) {
    let likedMovieId = savedMovies.find(item => item._id === movie._id)._id
    MainApi
      .deleteMovieFromSaved(likedMovieId, moviesUrl)
      .then((deletedMovie) => {
        setMovies((movies) =>
          movies.map((item) => (item._id === movie._id ? deletedMovie : item))); // обновляем состояние карточки, которую удалили
        setSavedMovies(savedMovies => [...savedMovies].filter((item) => item._id !== movie._id)) // обновляем массив со списком сохраненных фильмов
      })
      .catch((err) => {
        console.log(err);
      });
    MainApi.getMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // обработчик лайка
  function handleMovieLike(movie, savedMovies) {

    // определяем, есть ли у карточки лайк (есть ли фильм с таким же id в списке сохраненных)
    const isLikedInitial = savedMovies?.some((item) => item.movieId === movie.id);

    if (!isLikedInitial) { // определяем нужно ли сохранять фильм в зависимости от того, был ли он сохранен ранее
      MainApi
        .putMovieInSaved(movie, moviesUrl)
        .then((likedMovie) => {
          setMovies((movies) =>
            movies.map((item) => (item.movieId === movie.id ? likedMovie : item))); // обновляем состояние карточки, которую лайкнули (чтобы обновилась кнопка лайка)
          setSavedMovies(prev => [...prev, movie]) // обновляем массив со списком сохраненных фильмов
        })
        .catch((err) => {
          console.log(err);
        });
      MainApi.getMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies)
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      let likedMovieId = savedMovies.find(item => item.movieId === movie.id)._id
      MainApi
        .deleteMovieFromSaved(likedMovieId, moviesUrl)
        .then((deletedMovie) => {
          setMovies((movies) =>
            movies.map((item) => (item.movieId === movie.id ? deletedMovie : item))); // обновляем состояние карточки, которую лайкнули (чтобы обновилась кнопка лайка)
          setSavedMovies(savedMovies => [...savedMovies].filter((item) => item.movieId !== movie.id)) // обновляем массив со списком сохраненных фильмов
        })
        .catch((err) => {
          console.log(err);
        });
      MainApi.getMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function searchAndFilterMovies(searchText, movies, isToggleClick) {
    movies.forEach((item) => {
      if (item.name.includes(searchText)) {
        setMovies(item)
      }
      else if (item.nameRU.includes(searchText)) {
        setMovies(item)
      }
      else if (item.nameEN.includes(searchText)) {
        setMovies(item)
      }
      else if (item.description.includes(searchText)) {
        setMovies(item)
      }
      else if (item.year.includes(searchText)) {
        setMovies(item)
      }
      else if (item.country.includes(searchText)) {
        setMovies(item)
      }
    })

    searchAndFilterMovies(movies)
    // if (isToggleClick) {
    //   const findShortMovies = queryMovies;
    //   return findShortMovies(queryMovies);
    // }
    // return queryMovies
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        {!shouldHideHeaderAndFooter && <Header signedIn={signedIn} onMenuPopup={handleMenuPopupClick} />}
        <MenuPopup isOpen={isMenuPopupOpen} onClose={closePopup} />
        <Switch>
          <Route exact path='/'>
            <Main
            />
          </Route>
          <Route path='/movies'>
            <Movies
              moviesUrl={moviesUrl}
              movies={movies}
              savedMovies={savedMovies}
              onGetFoundMovies={handleGetFoundMovies}
              onToggleClick={handleToggleClick}
              onToggleClickState={isToggleClick}
              onMovieLike={handleMovieLike}
              onSearchAndFilterMovies={searchAndFilterMovies} />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies
              moviesUrl={moviesUrl}
              savedMovies={savedMovies}
              onMovieLikeDelete={handleMovieLikeDelete}
              onGetFoundMovies={handleGetFoundMovies}
              onToggleClick={handleToggleClick}
              onToggleClickState={isToggleClick}
            />
          </Route>
          <Route path='/profile'>
            <Profile
              signout={signout}
              onUpdateUser={handleUpdateUser}
            />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
