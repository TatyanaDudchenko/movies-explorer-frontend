import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ savedMovies, moviesUrl, onGetFoundMovies, onToggleClick, onToggleClickState, onLikeClickState, onMovieLikeDelete }) {

    return (
        <div className='saved-movies-container'>
            <SearchForm
                onGetFoundMovies={onGetFoundMovies}
                onToggleClick={onToggleClick}
                onToggleClickState={onToggleClickState} />
            <MoviesCardList
                moviesUrl={moviesUrl}
                savedMovies={savedMovies}
                onLikeClickState={onLikeClickState}
                onMovieLikeDelete={onMovieLikeDelete} />

        </div>
    )
}

export default SavedMovies;