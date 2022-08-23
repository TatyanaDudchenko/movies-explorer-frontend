import './SearchForm.css';

function SearchForm({ onGetFoundMovies, onToggleClick }) {

    // Определяем состояние кнопки переключения короткометражек
    const isActive = false;
    // Создаём переменную, которую после зададим в `className` для состояния кнопки переключения короткометражек
    const toggleIconButtonStateClassName = (
        `${isActive && 'search-form__toggle-icon_active'}`
    );

    function handleSubmit(e) {
        e.preventDefault();

        if (e.target[0].value.length !== 0) {
            onGetFoundMovies();
            // handleSearchTextSaving();
            // onToggleClick();
        }
    }

    // function handleSearchTextSaving(e) {
    //     localStorage.setItem('searchText', JSON.stringify(e.target[0].value));
    // }

    return (
        <div className='search-form-container'>
            <form onSubmit={handleSubmit} className='search-form'>
                <input className='search-form__input'
                    type='text'
                    name='find'
                    placeholder='Фильм'
                    required
                />
                <button type='submit' className='search-form__button search-form__submit-button'></button>
            </form>
            <div className='search-form__toggle-container'>
                <button type='switch' className={`search-form__button search-form__toggle-icon ${toggleIconButtonStateClassName}`}></button>
                <p onClick={onToggleClick} className='search-form__toggle-text'>Короткометражки</p>
            </div>
        </div>

    )
}

export default SearchForm;