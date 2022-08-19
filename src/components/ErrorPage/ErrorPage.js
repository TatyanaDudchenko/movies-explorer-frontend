import './ErrorPage.css';
import { Link, useHistory } from 'react-router-dom';

function ErrorPage() {

    const history = useHistory();

    return (
        <div className='error-page'>
            <h2 className='error-page__error-title'>404</h2>
            <p className='error-page__error-paragraph'>Страница не найдена</p>
            <Link className='error-page__link' onClick={() => history.goBack()}>Назад</Link>
        </div>
    );
}

export default ErrorPage;
