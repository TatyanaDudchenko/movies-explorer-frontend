import './FormParagraphLinkContainer.css';
import FormParagraph from '../FormParagraph/FormParagraph';
import LinkName from '../LinkName/LinkName';

function FormParagraphLinkContainer({ formParagraph, linkPath, linkName }) {
    return (
        <>
            <FormParagraph
                formParagraph={formParagraph}
            />

            <LinkName
                linkPath={linkPath}
                linkName={linkName}
            />
        </>
    );
}

export default FormParagraphLinkContainer;