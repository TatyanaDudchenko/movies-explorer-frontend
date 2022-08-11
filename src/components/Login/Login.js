import './Login.css';
import FormTitle from '../FormTitle/FormTitle';
import FormField from '../FormField/FormField';
import FormInput from '../FormInput/FormInput';
import headerLogo from '../../images/logo.svg';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import FormParagraphLinkContainer from '../FormParagraphLinkContainer/FormParagraphLinkContainer';

function Login({ error }) {
  return (
    <div className='login-form login-form__container'>
      <img className='login-form__logo login-form__logo_margin' src={headerLogo} alt='Логотип Movies Explorer' />
      <form className='login-form__content' noValidate>
        <div className='login-form__title login-form__title_margin'>
          <FormTitle title={'Рады видеть!'} />
        </div>
        <div className='login-form__content_align'>
          <div className='login-form__fields'>
            <FormField label='E-mail'>
              <FormInput error={error} type='email' name='email' minLength='2' maxLength='30' />
            </FormField>
            <FormField label='Пароль'>
              <FormInput error={error} type='password' name='password' minLength='2' maxLength='30' />
            </FormField>
          </div>
          <div className='login-form__button-container'>
            <FormSubmitButton buttonName={'Войти'} />
            <FormParagraphLinkContainer formParagraph={'Еще не зарегистрированы?'} linkPath={'/signup'} linkName={'Регистрация'} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;