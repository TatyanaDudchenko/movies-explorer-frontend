import './FormSubmitButton.css';

function FormSubmitButton({buttonName}) {
    return (
        <>
            <div className='form-submit-button'>
                {buttonName}
            </div>
        </>
        
    );  
}

export default FormSubmitButton;