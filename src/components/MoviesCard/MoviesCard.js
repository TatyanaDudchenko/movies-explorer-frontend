import './MoviesCard.css';
// import moviesCardImage from '../../images/image-movies-card-example-big.png'; // тестовый пример
import moviesCardImage from '../../images/image-movies-card-example-small.PNG'; // тестовый пример
import iconSavedInactive from '../../images/icon-saved-inactive.svg';


function MoviesCard() {

    return (
        <figure className='movies-card'>
            <div className='movies-card__container'>
                <figcaption className='movies-card__parameters'>
                    <div className='movies-card__about'>
                        <h2 className='movies-card__about-name'>33 слова о дизайне</h2>
                        <p className='movies-card__about-duration'>1ч 47мин</p>
                    </div>
                    <button type='button'>
                        <img className='movies-card__like' src={iconSavedInactive} alt='Иконка сохранения фильма' />
                    </button>
                </figcaption>
                <div className='movies-card__image-container'>

                <img className='movies-card__image' src={moviesCardImage} alt='Обложка фильма' />

                </div>
            </div>

        </figure>
    )
}

export default MoviesCard;

