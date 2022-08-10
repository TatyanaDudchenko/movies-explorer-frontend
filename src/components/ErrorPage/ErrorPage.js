import './ErrorPage.css';
import LinkName from '../LinkName/LinkName';

function ErrorPage({ linkPath, linkName }) {
    return (
        <>
            <h2>
              404  
            </h2>

            <LinkName
                linkPath={linkPath}
                linkName={linkName}
            />
        </>
    );
}

export default ErrorPage;