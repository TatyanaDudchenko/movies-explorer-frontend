import './FormField.css';

function FormField({ label, children }) {
    return (
        <div className='form-field'>
            <label className='form-field__label'>{label}</label>
            {children}
        </div>

    );
}

export default FormField;