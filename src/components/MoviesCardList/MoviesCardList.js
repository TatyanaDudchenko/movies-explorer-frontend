import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onLikeClick, onLikeClickState }) {

    return (
        <div className='movies-card-list'>
            {movies.map((item, index)=> (<MoviesCard onLikeClick={onLikeClick} onLikeClickState={onLikeClickState} key={index} {...item} movie={item} />))}
        </div>
    )
}

export default MoviesCardList;