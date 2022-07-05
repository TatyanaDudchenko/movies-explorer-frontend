import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Navigation from './Navigation';
import Header from './Header';
import Movies from './Movies';
import SavedMovies from './SavedMovies';
import Profile from './Profile';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Main/>
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
