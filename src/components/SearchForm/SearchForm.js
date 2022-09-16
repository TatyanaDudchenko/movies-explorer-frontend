import './SearchForm.css';

function SearchForm({
    onGetFoundMovies,
    onToggleClick,
    onToggleClickState,
    onSetIsToggleClick,
    // onSearchAndFilterMovies,
    // onSearchAndFilterSavedMovies,
    onSearchAndFilterFunction,
    // movies,
    // savedMovies,
    movArr,
    setMoviesSearchResult,
    // savedMoviesSearchText,
    setSavedMoviesSearchText,
    searchTextQuery,
    setSearchTextQuery,
    keyInStorageSearchText,
}) {

    // const [searchText, setSearchText] = useState('');

    // Создаём переменную, которую после зададим в `className` для состояния кнопки переключения короткометражек
    const toggleIconButtonStateClassName = (
        `${onToggleClickState && 'search-form__toggle-icon_active'}`
    );

    function handleSubmit(e) {
        e.preventDefault();

        if (e.target[0].value.length !== 0) {

            if (onToggleClickState === true) {
                onSetIsToggleClick(false);
            }

            // handleSearchTextSaving(e); // получаем значение инпута
            onGetFoundMovies(); // получаем фильмы с MoviesApi
            // вызываем функцию поиска с переданными параметрами и сохраняем результат (массив с найденными фильмами) в переменную
            onSearchAndFilterFunction(searchTextQuery, movArr, onToggleClickState);
            // onSearchAndFilterMovies(searchText, movies, onToggleClickState);
            // onSearchAndFilterSavedMovies(savedMoviesSearchText, savedMovies, onToggleClickState);

            localStorage.setItem('toggleState', JSON.stringify(onToggleClickState)); // сохраняем состояние чекбокса в локальное хранилище

            // // обновляем результат поиска фильмов для отрисовки на странице
            // setMoviesSearchResult(JSON.parse(localStorage.getItem('foundMovies')));
        }
    }

    function handleChange(e) {
        setSearchTextQuery(e.target.value);
        // setSavedMoviesSearchText(e.target.value);
    }

    // function handleSearchTextSaving() {
    //     localStorage.setItem(`${keyInStorageSearchText}`, searchTextQuery);
    //     // localStorage.setItem('savedMoviesSearchText', savedMoviesSearchText);
    // }

    // useEffect(() => {
    //     const localStorageSearchText = localStorage.getItem(`${keyInStorageSearchText}`);
    //     if (!localStorage.getItem(`${keyInStorageSearchText}`)) return;
    //     setSearchTextQuery(localStorageSearchText);
    // }, [setSearchTextQuery, keyInStorageSearchText]);






    // useEffect(() => {
    //     const localStorageSearchText = localStorage.getItem('savedMoviesSearchText');
    //     if (!localStorage.getItem('savedMoviesSearchText')) return;
    //     setSavedMoviesSearchText(localStorageSearchText);
    // }, [setSavedMoviesSearchText]);

    return (
        <div className='search-form-container'>
            <form onSubmit={handleSubmit} className='search-form'>
                <input className='search-form__input'
                    onChange={handleChange}
                    value={searchTextQuery}
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