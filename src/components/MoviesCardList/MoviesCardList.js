import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';
// import { useState, useEffect } from 'react';


function MoviesCardList({ showMovies, moviesUrl, savedMovies, savedMoviesSearchResult, onLikeClickState, onMovieLike, onMovieLikeDelete, isPreloaderOpen }) {

    let location = useLocation();

    // Создаём переменную, которую после зададим в `className` для состояния кнопки лайка
    const likeButtonDelete = 'movies-card__icon-like_delete';

    return (
        <div className='movies-card-list'>
            <Preloader
                isOpen={isPreloaderOpen}
            />
            {location.pathname.includes('/movies') && showMovies.map((item) => (
                //  {location.pathname.includes('/movies') && (moviesSearchResult.slice(0, 12)).map((item) => (
                <MoviesCard
                    savedMovies={savedMovies}
                    moviesUrl={moviesUrl}
                    onLikeClickState={onLikeClickState}
                    key={item.id} {...item} movie={item}
                    imageUrl={`${moviesUrl}${item.image.url}`}
                    imageAlt={`${item.nameRU}`}
                    onClick={onMovieLike}
                />
            ))}
            {location.pathname.includes('/saved-movies') && savedMoviesSearchResult.map((item) => (
                // {location.pathname.includes('/saved-movies') && (savedMoviesSearchResult.slice(0, 12)).map((item) => (
                <MoviesCard
                    moviesUrl={moviesUrl}
                    onLikeClickState={onLikeClickState}
                    likeButtonDelete={likeButtonDelete}
                    movie={item}
                    savedMovies={savedMovies}
                    onMovieLike={onMovieLike}
                    key={item._id} {...item}
                    imageUrl={`${item.image}`}
                    imageAlt={item.nameRU}
                    onClick={onMovieLikeDelete}
                />
            ))}
        </div>
    )
}

export default MoviesCardList;