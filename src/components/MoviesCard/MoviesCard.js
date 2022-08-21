// import { Link } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie }) {

    const moviesUrl = 'https://api.nomoreparties.co/';

    // преобразование минут в часы и минуты
    const time = movie.duration
    const hours = Math.trunc(time/60);
    const minutes = time % 60;
    const moviesTime = hours + 'ч ' + minutes + 'м';

    return (
        <figure className='movies-card'>
            <div className='movies-card__container'>
                <figcaption className='movies-card__parameters'>
                    <div className='movies-card__about'>
                        <h2 className='movies-card__about-name'>{movie.nameRU}</h2>
                        <time className='movies-card__about-duration'>{moviesTime}</time>
                    </div>
                    <button type='button' className='movies-card__icon-like' alt='Иконка сохранения фильма'></button>
                </figcaption>
                <div className='movies-card__image-container'>
                    <img className='movies-card__image' src={`${moviesUrl}${movie.image.url}`} alt={movie.name} />
                    {/* <Link to={`${movie.trailerLink}`}><img className='movies-card__image' src={`${moviesUrl}${movie.image.url}`} alt={movie.name} /></Link> */}
                </div>
            </div>

        </figure>
    )
}

export default MoviesCard;

