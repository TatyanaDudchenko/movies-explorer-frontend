import './Register.css';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div>
            <Form
                title={'Добро пожаловать!'}
                button={'Зарегистрироваться'}
            />
            <p className='link'>Уже зарегистрированы? <Link className='link' to='/signin'>Войти</Link></p>
        </div>
        
    );  
}

export default Register;