import './FormSubmitButton.css';

function FormSubmitButton({ buttonName, isValid }) {

    const submitBattonInactiveClassName = 'form-submit-button_inactive';

    return (
        <button
            type='submit'
            className={`form-submit-button ${!isValid && submitBattonInactiveClassName}`}
            disabled={!isValid && true}
        >
            {buttonName}
        </button>

    );
}

export default FormSubmitButton;