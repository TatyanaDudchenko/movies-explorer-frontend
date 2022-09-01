import './MoviesCard.css';

function MoviesCard({ movie, moviesUrl, savedMovies, onMovieLike }) {

    // Определяем, есть ли у карточки лайк (есть ли фильм с таким же id в списке сохраненных)
    // console.log(savedMovies)
    const isLikedInitial = savedMovies?.some((item) => item === movie.id);

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
                    <a href={movie.trailerLink}><img className='movies-card__image' src={`${moviesUrl}${movie.image.url}`} alt={movie.name} /></a>
                </div>
            </div>

        </figure>
    )
}

export default MoviesCard;

