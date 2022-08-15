import './Profile.css';
import FormTitle from '../FormTitle/FormTitle';
import { Link } from 'react-router-dom';

function Profile({ error }) {
    return (
        <div className='profile-form profile-form__container'>
            <form className='profile-form__content' noValidate>
                <FormTitle title={'Привет, Татьяна!'} paddingClassName={'profile-form__title-padding'} titleAlignClassName={'profile-form__title-align'} />
                <div className='profile-form__content_align'>
                    <div className='profile-form__fields'>
                        <div className='profile-form__field'>
                            <label className='profile-form__field-label'>Имя</label>
                            <div className='profile-form__field-input-container'>
                                <input className={`profile-form__field-input ${error = false && 'profile-form__input-error-message_color'}`}
                                    type='text'
                                    name='name'
                                    minLength='2'
                                    maxLength='30'
                                    required
                                />
                                {error = false && <span className='profile-form__input-error-message profile-form__input-error-message_color'>Что-то пошло не так...</span>}
                            </div>
                        </div>
                        <div className='profile-form__field'>
                            <label className='profile-form__field-label'>E-mail</label>
                            <div className='profile-form__field-input-container'>
                                <input className={`profile-form__field-input ${error = false && 'profile-form__input-error-message_color'}`}
                                    type='email'
                                    name='email'
                                    minLength='2'
                                    maxLength='30'
                                    required
                                />
                                {error = false && <span className='profile-form__input-error-message profile-form__input-error-message_color'>Что-то пошло не так...</span>}
                            </div>
                        </div>
                    </div>
                    <div className='profile-form__button-container'>
                        <button type='submit' className='profile-form__submit-button'>Редактировать</button>
                        <Link className='profile-form__link' to='/signin'>Выйти из аккаунта</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Profile;