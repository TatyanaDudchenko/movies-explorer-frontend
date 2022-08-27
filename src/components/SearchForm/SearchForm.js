import './SearchForm.css';
import { useEffect, useState } from 'react';

function SearchForm({ onGetFoundMovies, onToggleClick, onToggleClickState }) {

    const [searchText, setSearchText] = useState('');

    // Создаём переменную, которую после зададим в `className` для состояния кнопки переключения короткометражек
    const toggleIconButtonStateClassName = (
        `${onToggleClickState && 'search-form__toggle-icon_active'}`
    );

    function handleSubmit(e) {
        e.preventDefault();

        if (e.target[0].value.length !== 0) {
            onGetFoundMovies();
            handleChange(e);
            handleSearchTextSaving(e);

            handleToggleClickStateSaving(onToggleClickState);
        }
    }

    function handleChange(e) {
        const value = e.target[0].value;
        if (value) {
            setSearchText(e.target[0].value)
        }
    }

    function handleSearchTextSaving(e) {
        localStorage.setItem('searchText', JSON.stringify(e.target[0].value));
    }

    function handleToggleClickStateSaving(onToggleClickState) {
        localStorage.setItem('toggleState', JSON.stringify(onToggleClickState));
    }

    useEffect(() => {
        const localStorageSearchText = JSON.parse(localStorage.getItem('searchText'));
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