import './SearchForm.css';
import { useEffect, useState } from 'react';

function SearchForm({ onGetFoundMovies, onToggleClick, onToggleClickState, setIsToggleClick, onSearchAndFilterMovies, movies, moviesSearchResult, setMoviesSearchResult }) {

    const [searchText, setSearchText] = useState('');

    // Создаём переменную, которую после зададим в `className` для состояния кнопки переключения короткометражек
    const toggleIconButtonStateClassName = (
        `${onToggleClickState && 'search-form__toggle-icon_active'}`
    );

    function handleSubmit(e) {
        e.preventDefault();

        if (e.target[0].value.length !== 0) {
            handleSearchTextSaving(e); // получаем значение инпута
            // handleToggleClickStateSaving(onToggleClickState); // получаем значение состояния чекбокса
            onGetFoundMovies(); // получаем фильмы с MoviesApi
            // вызываем функцию поиска с переданными параметрами и сохраняем результат (массив с найденными фильмами) в переменную
            onSearchAndFilterMovies(searchText, movies, onToggleClickState);
            // let findMovies = onSearchAndFilterMovies(searchText, movies, onToggleClickState);

            // localStorage.setItem('foundMovies', JSON.stringify(findMovies)); // сохраняем массив с найденными фильмами в локальное хранилище
            
            // обновляем результат поиска фильмов для отрисовки на странице
            setMoviesSearchResult(JSON.parse(localStorage.getItem('foundMovies')));

        }
    }

    function handleChange(e) {
        setSearchText(e.target.value)
    }

    function handleSearchTextSaving() {
        localStorage.setItem('searchText', searchText);
    }

    function handleToggleClickStateSaving(onToggleClickState) {
        localStorage.setItem('toggleState', JSON.stringify(onToggleClickState));
    }

    // function handleMoviesSearchSaving(findMovies) {
    //     localStorage.setItem('foundMovies', JSON.stringify(findMovies));
    // }

    // useEffect(() => {
    //     const localStorageToggleState = JSON.parse(localStorage.getItem('toggleState'));
    //     if (!localStorage.getItem('toggleState')) return;
    //     setIsToggleClick(localStorageToggleState);
    //   }, [setIsToggleClick]);

    useEffect(() => {
        const localStorageSearchText = localStorage.getItem('searchText');
        if (!localStorage.getItem('searchText')) return;
        setSearchText(localStorageSearchText);
    }, []);

    // useEffect(() => {
    //     const localStorageMoviesSearchResult = JSON.parse(localStorage.getItem('foundMovies'));
    //     if (!JSON.parse(localStorage.getItem('foundMovies'))) return;
    //     setMoviesSearchResult(localStorageMoviesSearchResult);
    // }, [setMoviesSearchResult]);

    return (
        <div className='search-form-container'>
            <form onSubmit={handleSubmit} className='search-form'>
                <input className='search-form__input'
                    onChange={handleChange}
                    value={searchText}
                    type='text'
                    name='find'
                    placeholder='Фильм'
                    required
                />
                <button type='submit' className='search-form__button search-form__submit-button'></button>
            </form>
            <div className='search-form__toggle-container'>
                <button onClick={onToggleClick} type='switch' className={`search-form__button search-form__toggle-icon ${toggleIconButtonStateClassName}`}></button>
                <p className='search-form__toggle-text'>Короткометражки</p>
            </div>
        </div>

    )
}

export default SearchForm;

// import './SearchForm.css';
// import { useEffect, useState } from 'react';

// function SearchForm({ onGetFoundMovies, onToggleClick, onToggleClickState, onSearchAndFilterMovies, movies }) {

//     const [searchText, setSearchText] = useState('');

//     // Создаём переменную, которую после зададим в `className` для состояния кнопки переключения короткометражек
//     const toggleIconButtonStateClassName = (
//         `${onToggleClickState && 'search-form__toggle-icon_active'}`
//     );

//     function handleSubmit(e) {
//         e.preventDefault();

//         if (e.target[0].value.length !== 0) {
//             onGetFoundMovies();
//             handleSearchTextSaving(e);
//             handleToggleClickStateSaving(onToggleClickState);
//             let findMovies = onSearchAndFilterMovies(searchText, movies, onToggleClickState);
//             localStorage.setItem('searchMovies', findMovies);
//         }
//     }

//     function handleChange(e) {
//         setSearchText(e.target.value)
//     }

//     function handleSearchTextSaving() {
//         localStorage.setItem('searchText', searchText);
//     }

//     function handleToggleClickStateSaving(onToggleClickState) {
//         localStorage.setItem('toggleState', JSON.stringify(onToggleClickState));
//     }

//     useEffect(() => {
//         const localStorageSearchText = localStorage.getItem('searchText');
//         if (!localStorage.getItem('searchText')) return;
//         setSearchText(localStorageSearchText);
//     }, []);

//     return (
//         <div className='search-form-container'>
//             <form onSubmit={handleSubmit} className='search-form'>
//                 <input className='search-form__input'
//                     onChange={handleChange}
//                     value={searchText}
//                     type='text'
//                     name='find'
//                     placeholder='Фильм'
//                     required
//                 />
//                 <button onClick={onSearchAndFilterMovies(searchText, movies, onToggleClickState)} type='submit' className='search-form__button search-form__submit-button'></button>
//             </form>
//             <div className='search-form__toggle-container'>
//                 <button onClick={onToggleClick} type='switch' className={`search-form__button search-form__toggle-icon ${toggleIconButtonStateClassName}`}></button>
//                 <p className='search-form__toggle-text'>Короткометражки</p>
//             </div>
//         </div>

//     )
// }

// export default SearchForm;