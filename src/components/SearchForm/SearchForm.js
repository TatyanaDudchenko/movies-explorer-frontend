import './SearchForm.css';
import { useEffect, useState } from 'react';

function SearchForm({ onGetFoundMovies, onToggleClick, onToggleClickState, onSearchAndFilterMovies, movies }) {

    const [searchText, setSearchText] = useState('');

    // Создаём переменную, которую после зададим в `className` для состояния кнопки переключения короткометражек
    const toggleIconButtonStateClassName = (
        `${onToggleClickState && 'search-form__toggle-icon_active'}`
    );

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     if (e.target[0].value.length !== 0) {
    //         onGetFoundMovies();
    //         handleSearchTextSaving(e);
    //         handleToggleClickStateSaving(onToggleClickState);
    //         onSearchAndFilterMovies(searchText, movies, onToggleClickState);
    //     }
    // }

    function handleSubmit(e) {
        e.preventDefault();

        if (e.target[0].value.length !== 0) {
            onGetFoundMovies(); // получаем фильмы с MoviesApi
            handleSearchTextSaving(e); // получае значение инпута
            handleToggleClickStateSaving(onToggleClickState); // получаем значение состояния чекбокса
            let findMovies = onSearchAndFilterMovies(searchText, movies, onToggleClickState); // сохраняем массив с найденными по поиску фильмам в переменную
            localStorage.setItem('searchMovies', findMovies); // сохраняем массив с найденными в локальное хранилище
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

    useEffect(() => {
        const localStorageSearchText = localStorage.getItem('searchText');
        if (!localStorage.getItem('searchText')) return;
        setSearchText(localStorageSearchText);
    }, []);

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