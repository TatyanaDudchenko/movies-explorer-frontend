import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
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

function App() {
  const [shouldHideHeaderAndFooter, setShouldHideHeaderAndFooter] = useState(false);

  function handleHideHeaderAndFooter() {
    setShouldHideHeaderAndFooter(true);
  }

  let location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes('/signin') ||
      location.pathname.includes('/signup')

    ) {
      handleHideHeaderAndFooter()
    }
  }, [location]);

  const history = useHistory();
  // const goBack = navigate(-1);

  return (
    <div className="page">
      {!shouldHideHeaderAndFooter && <Header />}
      <Navigation />
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
          <ErrorPage
            linkPath={history.goBack}
            linkName={'Назад'}
          />
        </Route>
      </Switch>
      {!shouldHideHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
