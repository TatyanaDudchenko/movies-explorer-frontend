import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies, onGetFoundMovies, onToggleClick, onToggleClickState, onLikeClick, onLikeClickState }) {
    return (
        <div className='saved-movies-container'>
            <SearchForm
                onGetFoundMovies={onGetFoundMovies}
                onToggleClick={onToggleClick}
                onToggleClickState={onToggleClickState} />
            <MoviesCardList
                movies={movies}
                onLikeClick={onLikeClick}
                onLikeClickState={onLikeClickState} />
        </div>
    )
}

export default SavedMovies;