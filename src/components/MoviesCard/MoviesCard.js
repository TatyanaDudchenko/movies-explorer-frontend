import './MoviesCard.css';

function MoviesCard({ movie, savedMovies, onMovieLike, imageUrl, imageAlt }) {

    // Определяем, есть ли у карточки лайк (есть ли фильм с таким же id в списке сохраненных)
    // console.log(movie)
    const isLikedInitial = savedMovies?.some((item) => item.id === movie.id);

    // Создаём переменную, которую после зададим в `className` для состояния кнопки лайка
    const likeButtonStateClassName = (
        `${isLikedInitial && 'movies-card__icon-like_active'}`
    );

    function handleLikeClick() {
        onMovieLike(movie)
    }

    // преобразование минут в часы и минуты
    const minutesDuration = movie.duration
    const hours = Math.trunc(minutesDuration / 60);
    const minutes = minutesDuration % 60;
    const movieDuration = hours + 'ч ' + minutes + 'м';

    return (
        <figure className='movies-card'>
            <div className='movies-card__container'>
                <figcaption className='movies-card__parameters'>
                    <div className='movies-card__about'>
                        <h2 className='movies-card__about-name'>{movie.nameRU}</h2>
                        <time className='movies-card__about-duration'>{movieDuration}</time>
                    </div>
                    <button onClick={handleLikeClick} type='button' className={`movies-card__icon-like ${likeButtonStateClassName}`} alt='Иконка сохранения фильма'></button>
                </figcaption>
                <div className='movies-card__image-container'>
                    <a href={movie.trailerLink}>
                        <img className='movies-card__image' src={imageUrl} alt={imageAlt} />
                    </a>
                </div>
            </div>

        </figure>
    )
}

export default MoviesCard;

