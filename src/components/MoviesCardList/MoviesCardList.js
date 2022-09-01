import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, moviesUrl, savedMovies, onLikeClickState, onMovieLike }) {

    let location = useLocation();

    return (
        <div className='movies-card-list'>
            {location.pathname.includes('/movies') && movies.map((item) => (<MoviesCard
                moviesUrl={moviesUrl}
                onLikeClickState={onLikeClickState}
                onMovieLike={onMovieLike}
                key={item.id} {...item} movie={item} />))}
            {location.pathname.includes('/saved-movies') && savedMovies.map((item) => (<MoviesCard
                moviesUrl={moviesUrl}
                onLikeClickState={onLikeClickState}
                savedMovies={savedMovies}
                // onMovieLike={onMovieLike}
                key={item.id} {...item} savedMovie={item} />))}
        </div>
    )
}

export default MoviesCardList;