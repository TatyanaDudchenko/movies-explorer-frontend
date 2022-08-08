import './FormLink.css';
import { Link } from 'react-router-dom';

function FormLink({ linkName }) {
    return (
        <>
            <p className='link'>Уже зарегистрированы? <Link className='link' to='/signin'>{linkName}</Link></p>

        </>

    );
}

export default FormLink;