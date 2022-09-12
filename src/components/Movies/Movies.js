import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect } from 'react';


function Movies({ movies, filteredMovies, moviesSearchResult, setMoviesSearchResult, savedMovies, moviesUrl, onGetFoundMovies, onToggleClick, onToggleClickState, onLikeClickState, onMovieLike, onSearchAndFilterMovies }) {

    // function handleMoreButtonClick() {

    // }

    return (
        <div className='movies-container'>
            <SearchForm
                onGetFoundMovies={onGetFoundMovies}
                onToggleClick={onToggleClick}
                onToggleClickState={onToggleClickState}
                movies={movies}
                moviesSearchResult={moviesSearchResult}

                setMoviesSearchResult={setMoviesSearchResult}
                onSearchAndFilterMovies={onSearchAndFilterMovies} />
            <MoviesCardList
                moviesUrl={moviesUrl}
                movies={movies}
                moviesSearchResult={moviesSearchResult}
                filteredMovies={filteredMovies}
                onToggleClickState={onToggleClickState}
                savedMovies={savedMovies}
                onLikeClickState={onLikeClickState}
                onMovieLike={onMovieLike} />
            <div className='movies-container__more-button-container'>
                <button type='button' className='movies-container__more-button'>Еще</button>
                {/* <button onClick={handleMoreButtonClick} type='button' className='movies-container__more-button'>Еще</button> */}
            </div>
        </div>
    )
}

export default Movies;