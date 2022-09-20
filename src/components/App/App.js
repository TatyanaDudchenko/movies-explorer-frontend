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
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  const [shouldHideHeaderAndFooter, setShouldHideHeaderAndFooter] = useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isToggleClick, setIsToggleClick] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [currentUser, setСurrentUser] = useState({});
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [moviesSearchResult, setMoviesSearchResult] = useState([] || JSON.parse(localStorage.getItem('foundMovies')));

  const moviesUrl = 'https://api.nomoreparties.co';

  const history = useHistory();

  useEffect(() => {
    if (signedIn) {
      Promise.all([MainApi.getUserInfo(), MainApi.getMovies()])
        .then(([userData, savedMovies]) => {
          setСurrentUser(userData);
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


  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(true);
  }

  function handlePreloaderOpen() {
    setIsPreloaderOpen(true);
  }

  function handleRegister(registerState) {
    MainApi
      .register(registerState.name, registerState.email, registerState.password)
      .then(() => {
        setTooltipMessage('Вы успешно зарегистрировались!');
        handleInfoTooltipOpen();
        handleLogin(registerState);
      })
      .catch((err) => {
        console.log(err);
        setTooltipMessage('Что-то пошло не так! Попробуйте еще раз.');
        handleInfoTooltipOpen();
      });
  }

  function handleLogin(values) {
    // function handleLogin(loginState) {
    MainApi
      .authorize(values.email, values.password)
      .then((data) => {
        if (!data.token) return;

        localStorage.setItem('jwt', data.token);
        setSignedIn(true);

        history.push('/movies');
      })
      .catch((err) => {
        console.log(err);
        setTooltipMessage('Что-то пошло не так! Попробуйте еще раз.');
        handleInfoTooltipOpen();
      });
  }

  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');

    if (!localStorage.getItem('jwt')) return;
    MainApi
      .checkToken(jwt)
      .then((res) => {
        if (!res) return;

        setSignedIn(true);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  function signout() {
    setSignedIn(false);
    localStorage.removeItem('jwt');
    if(localStorage.getItem('foundMovies')) {
      localStorage.removeItem('foundMovies');
    }
    if(localStorage.getItem('searchText')) {
      localStorage.removeItem('searchText');
    }
    if(localStorage.getItem('toggleState')) {
      localStorage.removeItem('toggleState');
    }
    
    localStorage.removeItem('jwt');
    history.push('/');
  }

  function handleMenuPopupClick() {
    setIsMenuPopupOpen(true);
  }

  function closePopup() {
    setIsMenuPopupOpen(false);
    setIsInfoTooltipOpen(false);
  }

  function handleUpdateUser(values) {
    if (!((currentUser.name === values.name) & (currentUser.email === values.email))) {
      MainApi
        .editProfile(values)
        .then((userData) => {
          setСurrentUser(userData);
          setTooltipMessage('Ваш профиль успешно обновлен!');
          handleInfoTooltipOpen();
        })
        .catch((err) => {
          console.log(err);
          setTooltipMessage('Что-то пошло не так! Попробуйте еще раз.');
          handleInfoTooltipOpen();
        });
    } else {
      setTooltipMessage('Для обновления профиля введите новое имя или email');
      handleInfoTooltipOpen();
    }
  }

  function handleGetFoundMovies() {

    handlePreloaderOpen(); //запускаем прелоадер

    MoviesApi.getFoundMovies()
      .then((movies) => {
        setIsPreloaderOpen(false); // выключаем прелоадер
        setMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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

  function filterShotMovies(isToggleClick) {
    if (isToggleClick === false) {
      setMoviesSearchResult(moviesSearchResult => [...moviesSearchResult].filter((item) => item.duration <= 40))
      localStorage.setItem('filteredMovies', JSON.stringify(moviesSearchResult.filter((item) => item.duration <= 40)));
    } else {
      setMoviesSearchResult(JSON.parse(localStorage.getItem('foundMovies')));
    }
  }

  useEffect(() => {
    if (isToggleClick === true) {
      const localStorageMovies = JSON.parse(localStorage.getItem('filteredMovies'));
      if (!localStorage.getItem('filteredMovies')) return;
      setMoviesSearchResult(localStorageMovies);
    } else {
      const localStorageMovies = JSON.parse(localStorage.getItem('foundMovies'));
      if (!localStorage.getItem('foundMovies')) return;
      setMoviesSearchResult(localStorageMovies);
    }
  }, [isToggleClick]);

  useEffect(() => {
    const localStorageToggleState = JSON.parse(localStorage.getItem('toggleState'));
    if (!localStorage.getItem('toggleState')) return;
    setIsToggleClick(localStorageToggleState);
  }, []);

  function handleToggleClick() {
    setIsToggleClick(!isToggleClick);
    localStorage.setItem('toggleState', JSON.stringify(!isToggleClick));
    filterShotMovies(isToggleClick);
  }

  function searchAndFilterMovies(searchText, movies, isToggleClick) {
    let findMovies = [];

    movies.forEach((item) => {
      if (item.nameRU?.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        findMovies.push(item)
      }
      else if (item.nameEN?.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        findMovies.push(item)
      }
      else if (item.description?.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        findMovies.push(item)
      }
      else if (item.year?.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        findMovies.push(item)
      }
      else if (item.country?.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
        findMovies.push(item)
      }
    });

    if (findMovies.length === 0) {
      setTooltipMessage('Ничего не найдено');
      handleInfoTooltipOpen();
    }

    localStorage.setItem('foundMovies', JSON.stringify(findMovies)); // сохраняем массив с найденными фильмами в локальное хранилище
    // обновляем результат поиска фильмов для отрисовки на странице
    setMoviesSearchResult(JSON.parse(localStorage.getItem('foundMovies')));

    localStorage.setItem('searchText', searchText);

    return findMovies;


  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <ProtectedRoute exact path='/' signedIn={signedIn}>
          {!shouldHideHeaderAndFooter && <Header signedIn={signedIn} onMenuPopup={handleMenuPopupClick} />}
        </ProtectedRoute>
        <MenuPopup isOpen={isMenuPopupOpen} onClose={closePopup} />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closePopup}
          message={tooltipMessage}
        />
        <Preloader
          isOpen={isPreloaderOpen}
        />
        <Switch>

          <Route exact path='/'>
            {!signedIn && <Header signedIn={signedIn} />}
            <Main />
            {!signedIn && <Footer />}
          </Route>

          <ProtectedRoute path='/movies' signedIn={signedIn}>
            <Movies
              moviesUrl={moviesUrl}
              movies={movies}
              setMoviesSearchResult={setMoviesSearchResult}
              moviesSearchResult={moviesSearchResult}
              onSetIsToggleClick={setIsToggleClick}
              savedMovies={savedMovies}
              onGetFoundMovies={handleGetFoundMovies}
              onToggleClick={handleToggleClick}
              onToggleClickState={isToggleClick}
              onMovieLike={handleMovieLike}
              onSearchAndFilterMovies={searchAndFilterMovies}
              setTooltipMessage={setTooltipMessage}
              handleInfoTooltipOpen={handleInfoTooltipOpen} />
          </ProtectedRoute>
          <ProtectedRoute path='/saved-movies' signedIn={signedIn}>
            <SavedMovies
              moviesUrl={moviesUrl}
              savedMovies={savedMovies}
              onMovieLikeDelete={handleMovieLikeDelete}
              onGetFoundMovies={handleGetFoundMovies}
              onToggleClick={handleToggleClick}
              onToggleClickState={isToggleClick}
              setTooltipMessage={setTooltipMessage}
              handleInfoTooltipOpen={handleInfoTooltipOpen}
            />
          </ProtectedRoute>
          <ProtectedRoute path='/profile' signedIn={signedIn}>
            <Profile
              signout={signout}
              onUpdateUser={handleUpdateUser}
            />
          </ProtectedRoute>
          <Route path='/signin'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <Register handleRegister={handleRegister} />
          </Route>
          <ProtectedRoute path='/error-page' signedIn={signedIn}>
            <ErrorPage />
          </ProtectedRoute>
        </Switch>
        <ProtectedRoute exact path='/' signedIn={signedIn}>
          {!shouldHideHeaderAndFooter && <Footer />}
        </ProtectedRoute>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
