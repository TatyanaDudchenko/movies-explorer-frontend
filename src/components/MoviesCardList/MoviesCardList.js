import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, moviesUrl, savedMovies, onLikeClickState, onMovieLike, onMovieLikeDelete }) {

    let location = useLocation();

    // Создаём переменную, которую после зададим в `className` для состояния кнопки лайка
    const likeButtonDelete = 'movies-card__icon-like_delete';

    return (
        <div className='movies-card-list'>
            {location.pathname.includes('/movies') && movies.map((item) => (
                <MoviesCard
                    savedMovies={savedMovies}
                    moviesUrl={moviesUrl}
                    onLikeClickState={onLikeClickState}
                    key={item._id} {...item} movie={item}
                    imageUrl={`${moviesUrl}${item.image.url}`}
                    imageAlt={`${item.nameRU}`}
                    onClick={onMovieLike}
                />
            ))}
            {location.pathname.includes('/saved-movies') && savedMovies.map((item) => (
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