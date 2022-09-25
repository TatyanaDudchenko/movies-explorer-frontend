import './FormInput.css';

function FormInput({ name, type, minLength, maxLength, error, onChange, value }) {
    return (
        <div className='form-input'>
            <input className={`form-input__input ${error && 'form-input__error-message_color'}`}
                onChange={onChange}
                type={type}
                name={name}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                required
            />
            {error && <span className='form-input__error-message form-input__error-message_color'>{error}</span>}
        </div>
    );
}

export default FormInput;