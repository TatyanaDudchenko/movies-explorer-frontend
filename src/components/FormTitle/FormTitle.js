import './FormTitle.css';

function FormTitle({title}) {
    return (
        <>
            <h2 className='form-title'>
                {title}
            </h2>
        </>
        
    );  
}

export default FormTitle;