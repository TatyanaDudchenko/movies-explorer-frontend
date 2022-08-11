import './FormParagraphLinkContainer.css';
import FormParagraph from '../FormParagraph/FormParagraph';
import LinkName from '../LinkName/LinkName';

function FormParagraphLinkContainer({ formParagraph, linkPath, linkName }) {
    return (
        <div className='form-paragraph-link-container'>
            <FormParagraph
                formParagraph={formParagraph}
            />

            <LinkName
                linkPath={linkPath}
                linkName={linkName}
            />
        </div>
    );
}

export default FormParagraphLinkContainer;