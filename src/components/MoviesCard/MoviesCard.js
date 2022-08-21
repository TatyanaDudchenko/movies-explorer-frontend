import './MoviesCard.css';

function MoviesCard({ movie }) {

    return (
        <figure className='movies-card'>
            <div className='movies-card__container'>
                <figcaption className='movies-card__parameters'>
                    <div className='movies-card__about'>
                        <h2 className='movies-card__about-name'>{movie.name}</h2>
                        <p className='movies-card__about-duration'>1ч 47мин</p>
                    </div>
                    <button type='button' className='movies-card__icon-like' alt='Иконка сохранения фильма'></button>
                </figcaption>
                <div className='movies-card__image-container'>

                <img className='movies-card__image' src={movie.link} alt={movie.name} />

                </div>
            </div>

        </figure>
    )
}

export default MoviesCard;

