import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, moviesUrl, onGetFoundMovies, onToggleClick, onToggleClickState, onLikeClick, onLikeClickState }) {
    return (
        <div className='saved-movies-container'>
            <SearchForm
                onGetFoundMovies={onGetFoundMovies}
                onToggleClick={onToggleClick}
                onToggleClickState={onToggleClickState} />
            <MoviesCardList
                moviesUrl={moviesUrl}
                savedMovies={savedMovies}
                onLikeClick={onLikeClick}
                onLikeClickState={onLikeClickState} />
        </div>
    )
}

export default SavedMovies;