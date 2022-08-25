import './Register.css';
import FormTitle from '../FormTitle/FormTitle';
import FormField from '../FormField/FormField';
import FormInput from '../FormInput/FormInput';
import headerLogo from '../../images/logo.svg';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import FormParagraphLinkContainer from '../FormParagraphLinkContainer/FormParagraphLinkContainer';
import { useState } from 'react';

function Register({ error, handleRegister }) {

    const [registerState, setRegisterState] = useState({
        name: '',
        email: '',
        password: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setRegisterState(old => ({
            ...old,
            [name]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();

        handleRegister(registerState);
    }; 

    return (
        <div className='register-form register-form__container'>
            <img className='register-form__logo' src={headerLogo} alt='Логотип Movies Explorer' />
            <form onSubmit={handleSubmit} className='register-form__content' noValidate>
                <div className='register-form__title register-form__title_margin'>
                    <FormTitle title={'Добро пожаловать!'} />
                </div>
                <div className='register-form__content_align'>
                    <div className='register-form__fields'>
                        <FormField label='Имя'>
                            <FormInput onChange={handleChange} error={error} type='text' name='name' value={registerState.name} minLength='2' maxLength='30' />
                        </FormField>
                        <FormField label='E-mail'>
                            <FormInput onChange={handleChange} error={error} type='email' name='email' value={registerState.email} minLength='2' maxLength='30' />
                        </FormField>
                        <FormField label='Пароль'>
                            <FormInput onChange={handleChange} error={error} type='password' name='password' value={registerState.password} minLength='2' maxLength='30' />
                        </FormField>
                    </div>
                    <div className='register-form__button-container'>
                        <FormSubmitButton buttonName={'Зарегистрироваться'} />
                        <FormParagraphLinkContainer formParagraph={'Уже зарегистрированы?'} linkPath={'/signin'} linkName={'Войти'} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;