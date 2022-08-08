import './FormField.css';

function FormField({ label, children, error }) {
    return (
        <>
            <label>{label}</label>
            {children}
            {error=true && <p>Что-то пошло не так...</p>}
        </>

    );
}

export default FormField;