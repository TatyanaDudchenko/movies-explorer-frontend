import './ErrorPage.css';
import {useHistory} from 'react-router-dom';

function ErrorPage() {

    const history = useHistory();

    return (
        <>
            <h2>
              404  
            </h2>

            <p onClick={() => history.goBack()}>Назад</p>
        </>
    );
}

export default ErrorPage;
