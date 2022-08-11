import './FormSubmitButton.css';

function FormSubmitButton({buttonName}) {
    return (
        <>
            <button type='submit' className='form-submit-button'>
                {buttonName}
            </button>
        </>
        
    );  
}

export default FormSubmitButton;