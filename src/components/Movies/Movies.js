import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';

function Movies({ movies, filteredMovies, moviesSearchResult, setMoviesSearchResult, savedMovies, moviesUrl, onGetFoundMovies, onToggleClick, onToggleClickState, onSetIsToggleClick, onLikeClickState, onMovieLike, onSearchAndFilterMovies }) {

    const [searchText, setSearchText] = useState('');
    const [showMovies, setShowMovies] = useState([]);
    const NUMBER_OF_MOVIES_TO_SHOW = 12;

    function handleMoreButtonClick() {
        setShowMovies(showMovies => moviesSearchResult.slice(0, showMovies.length + NUMBER_OF_MOVIES_TO_SHOW))
    }

    useEffect(() => {
        setShowMovies(moviesSearchResult.slice(0, NUMBER_OF_MOVIES_TO_SHOW));
    }, [moviesSearchResult]);


    useEffect(() => {
        const localStorageSearchText = localStorage.getItem('searchText');
        if (!localStorage.getItem('searchText')) return;
        setSearchText(localStorageSearchText);
    }, []);


    return (
        <div className='movies-container'>
            <SearchForm
                onGetFoundMovies={onGetFoundMovies}
                onToggleClick={onToggleClick}
                onToggleClickState={onToggleClickState}
                movArr={movies}
                onSetIsToggleClick={onSetIsToggleClick}
                setMoviesSearchResult={setMoviesSearchResult}
                searchTextQuery={searchText}
                searchText={searchText}
                setSearchTextQuery={setSearchText}
                setSearchText={setSearchText}
                keyInStorageSearchText={'searchText'}

                // onSearchAndFilterMovies={onSearchAndFilterMovies} />
                onSearchAndFilterFunction={onSearchAndFilterMovies} />
            <MoviesCardList
                moviesUrl={moviesUrl}
                movies={movies}
                showMovies={showMovies}
                filteredMovies={filteredMovies}
                onToggleClickState={onToggleClickState}
                savedMovies={savedMovies}
                onLikeClickState={onLikeClickState}
                onMovieLike={onMovieLike} />
            <div className='movies-container__more-button-container'>
                {/* <button type='button' className='movies-container__more-button'>Еще</button> */}
                <button onClick={handleMoreButtonClick} type='button' className='movies-container__more-button'>Еще</button>
            </div>
        </div>
    )
}

export default Movies;