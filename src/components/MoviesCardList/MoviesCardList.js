import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import moviesCardImage01 from '../../images/image-movies-card-example-01.png'; // тестовый пример
import moviesCardImage02 from '../../images/image-movies-card-example-02.png'; // тестовый пример
import moviesCardImage03 from '../../images/image-movies-card-example-03.png'; // тестовый пример
import moviesCardImage04 from '../../images/image-movies-card-example-04.png'; // тестовый пример
import moviesCardImage05 from '../../images/image-movies-card-example-05.png'; // тестовый пример
import moviesCardImage06 from '../../images/image-movies-card-example-06.png'; // тестовый пример
import moviesCardImage07 from '../../images/image-movies-card-example-07.png'; // тестовый пример
import moviesCardImage08 from '../../images/image-movies-card-example-08.png'; // тестовый пример
import moviesCardImage09 from '../../images/image-movies-card-example-09.png'; // тестовый пример
import moviesCardImage10 from '../../images/image-movies-card-example-10.png'; // тестовый пример
import moviesCardImage11 from '../../images/image-movies-card-example-11.png'; // тестовый пример
import moviesCardImage12 from '../../images/image-movies-card-example-12.png'; // тестовый пример

function MoviesCardList() {

    const moviesCardsArray = [
        {
            name: '33 слова о дизайне',
            link: moviesCardImage01
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage02
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage03
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage04
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage05
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage06
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage07
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage08
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage09
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage10
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage11
        },
        {
            name: '33 слова о дизайне',
            link: moviesCardImage12
        }
    ];

    return (
        <div className='movies-card-list'>
            {moviesCardsArray.map(item => (<MoviesCard key={item._id} {...item} moviesCard={item} />))}
        </div>
    )
}

export default MoviesCardList;