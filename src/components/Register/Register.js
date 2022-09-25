import './Register.css';
import FormTitle from '../FormTitle/FormTitle';
import FormField from '../FormField/FormField';
import FormInput from '../FormInput/FormInput';
import headerLogo from '../../images/logo.svg';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import FormParagraphLinkContainer from '../FormParagraphLinkContainer/FormParagraphLinkContainer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Validation';

function Register({ handleRegister }) {

    const { values, handleChange, errors, isValid, resetForm} = useFormWithValidation();

    useEffect(() => {
      resetForm();
    }, [resetForm]);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      handleRegister(values);
    }

    return (
        <div className='register-form register-form__container'>
            <Link to='/'><img className='register-form__logo' src={headerLogo} alt='Логотип Movies Explorer' /></Link>
            <form onSubmit={handleSubmit} className='register-form__content' noValidate>
                <div className='register-form__title register-form__title_margin'>
                    <FormTitle title={'Добро пожаловать!'} />
                </div>
                <div className='register-form__content_align'>
                    <div className='register-form__fields'>
                        <FormField label='Имя'>
                            <FormInput onChange={handleChange} error={errors.name} type='text' name='name' minLength='2' maxLength='30' />
                        </FormField>
                        <FormField label='E-mail'>
                            <FormInput onChange={handleChange} error={errors.email} type='email' name='email' minLength='2' maxLength='30' />
                        </FormField>
                        <FormField label='Пароль'>
                            <FormInput onChange={handleChange} error={errors.password} type='password' name='password' minLength='2' maxLength='30' />
                        </FormField>
                    </div>
                    <div className='register-form__button-container'>
                        <FormSubmitButton isValid={isValid} buttonName={'Зарегистрироваться'} />
                        <FormParagraphLinkContainer formParagraph={'Уже зарегистрированы?'} linkPath={'/signin'} linkName={'Войти'} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;