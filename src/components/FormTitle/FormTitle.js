import './FormTitle.css';

function FormTitle({ title, titleAlignClassName, paddingClassName }) {
    return (
        <h2 className={`form-title ${titleAlignClassName} ${paddingClassName}`}>
            {title}
        </h2>

    );
}

export default FormTitle;