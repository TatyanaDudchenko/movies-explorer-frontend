import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
    return (
        <div className='content'>
            <SearchForm />
            <MoviesCardList />
        </div>
    )
}

export default Movies;