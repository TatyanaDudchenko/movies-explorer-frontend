import './FormInput.css';

function FormInput({name}) {
    return (
        <>
            <div className='form-input'>
                {name}
            </div>
        </>
        
    );  
}

export default FormInput;