import './Register.css';
import FormTitle from '../FormTitle/FormTitle';
import FormField from '../FormField/FormField';
import FormInput from '../FormInput/FormInput';
import headerLogo from '../../images/logo.svg';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import FormLink from '../FormLink/FormLink';

function Register({ error, name, email, password }) {
    return (
        <div className='register-form register-form__container'>
            <img className='register-form__logo register-form__logo_margin' src={headerLogo} alt='Логотип Movies Explorer' />
            <div className='register-form__title register-form__title_margin'>
                <FormTitle
                    title={'Добро пожаловать!'}
                />
            </div>
            <FormField
                label='Имя'
                error={error}
            >
                <FormInput name={name} />
            </FormField>

            <FormField
                label='E-mail'
                error={error}
            >
                <FormInput name={email} />
            </FormField>

            <FormField
                label='Пароль'
                error={error}
            >
                <FormInput name={password} />
            </FormField>

            <FormSubmitButton
                buttonName={'Зарегистрироваться'}
            />
            <FormLink
                linkName={'Войти'}
            />
        </div>

    );
}

export default Register;