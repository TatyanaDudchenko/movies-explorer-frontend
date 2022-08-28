import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMovie, onLikeClickState, onMovieLike }) {

    return (
        <div className='movies-card-list'>
            {movies.map((item, index)=> (<MoviesCard
                onLikeClickState={onLikeClickState}
                onMovieLike={onMovieLike}
                key={index} {...item} movie={item} />))}
        </div>
    )
}

export default MoviesCardList;