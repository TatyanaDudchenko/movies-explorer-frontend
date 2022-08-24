import './FormInput.css';

    function FormInput({ name, type, minLength, maxLength, error, onChange }) { // value
    return (
        <div className='form-input'>
            <input className={`form-input__input ${error=false && 'form-input__error-message_color'}`}
                onChange={onChange}
                type={type}
                name={name}
                minLength={minLength}
                maxLength={maxLength}
                required
            />
            {error=false && <span className='form-input__error-message form-input__error-message_color'>Что-то пошло не так...</span>}
        </div>
    );
}

export default FormInput;