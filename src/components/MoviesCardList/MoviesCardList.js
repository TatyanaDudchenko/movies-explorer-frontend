import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, moviesUrl, savedMovies, onLikeClickState, onMovieLike }) {

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
                    onMovieLike={onMovieLike}
                    // savedMovie={item}
                    key={item._id} {...item} movie={item}
                    imageUrl={`${moviesUrl}${item.image.url}`}
                    imageAlt={`${item.nameRU}`}
                />
            ))}
            {location.pathname.includes('/saved-movies') && savedMovies.map((item) => (
                <MoviesCard
                    moviesUrl={moviesUrl}
                    onLikeClickState={onLikeClickState}
                    likeButtonDelete={likeButtonDelete}
                    movie={item}
                    savedMovies={savedMovies}
                    // onMovieLike={onMovieLike}
                    key={item._id} {...item} savedMovie={item}
                    imageUrl={`${item.image}`}
                    imageAlt={item.nameRU}
                />
            ))}
        </div>
    )
}

export default MoviesCardList;