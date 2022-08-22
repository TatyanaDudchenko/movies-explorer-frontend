import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies, onGetFoundMovies }) {
    return (
        <div className='movies-container'>
            <SearchForm onGetFoundMovies={onGetFoundMovies} />
            <MoviesCardList movies={movies} />
            <div className='movies-container__more-button-container'>
                <button type='button' className='movies-container__more-button'>Еще</button>
            </div>
        </div>
    )
}

export default Movies;