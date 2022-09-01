import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, moviesUrl, onGetFoundMovies, onToggleClick, onToggleClickState, onLikeClickState, onMovieLike, onSearchAndFilterMovies }) {
    return (
        <div className='movies-container'>
            <SearchForm
                onGetFoundMovies={onGetFoundMovies}
                onToggleClick={onToggleClick}
                onToggleClickState={onToggleClickState}
                onSearchAndFilterMovies={onSearchAndFilterMovies} />
            <MoviesCardList
                moviesUrl={moviesUrl}
                movies={movies}
                onLikeClickState={onLikeClickState}
                onMovieLike={onMovieLike} />
            <div className='movies-container__more-button-container'>
                <button type='button' className='movies-container__more-button'>Еще</button>
            </div>
        </div>
    )
}

export default Movies;