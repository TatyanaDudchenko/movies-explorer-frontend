import './SearchForm.css';


function SearchForm() {
    return (
        <div className='search-form-container'>
            <form className='search-form'>
                <input className='search-form__input'
                    type='text'
                    name='find'
                    placeholder='Фильм'
                    required
                />
                <button type='submit' className='search-form__button search-form__submit-button'></button>
            </form>
            <div className='search-form__toggle-container'>
                <button type='switch' className='search-form__button search-form__toggle-icon'></button>
                <p className='search-form__toggle-text'>Короткометражки</p>
            </div>
        </div>

    )
}

export default SearchForm;