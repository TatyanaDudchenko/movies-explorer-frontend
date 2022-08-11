import './Register.css';
import FormTitle from '../FormTitle/FormTitle';
import FormField from '../FormField/FormField';
import FormInput from '../FormInput/FormInput';
import headerLogo from '../../images/logo.svg';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import FormParagraphLinkContainer from '../FormParagraphLinkContainer/FormParagraphLinkContainer';

function Register({ error }) {
    return (
        <div className='register-form register-form__container'>
            <img className='register-form__logo register-form__logo_margin' src={headerLogo} alt='Логотип Movies Explorer' />
            <form className='register-form__content' noValidate>
                <div className='register-form__title register-form__title_margin'>
                    <FormTitle title={'Добро пожаловать!'} />
                </div>
                <div className='register-form__content_align'>
                    <div className='register-form__fields'>
                        <FormField label='Имя'>
                            <FormInput error={error} type='text' name='name' minLength='2' maxLength='30' />
                        </FormField>
                        <FormField label='E-mail'>
                            <FormInput error={error} type='email' name='email' minLength='2' maxLength='30' />
                        </FormField>
                        <FormField label='Пароль' error={error}>
                            <FormInput error={error} type='password' name='password' />
                        </FormField>
                    </div>
                    <div className='register-form__button-container'>
                        <FormSubmitButton buttonName={'Зарегистрироваться'} />
                        <FormParagraphLinkContainer formParagraph={'Уже зарегистрированы?'} linkPath={'/signin'} linkName={'Войти'}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;