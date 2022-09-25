import './Profile.css';
import FormTitle from '../FormTitle/FormTitle';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useEffect, useContext } from 'react';
import { useFormWithValidation } from '../../utils/Validation';

function Profile({ signout, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);

    const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormWithValidation();
    const submitBattonInactiveClassName = 'profile-form__submit-button_inactive';

    useEffect(() => {
        setValues(currentUser);
        setIsValid(true);
      }, [currentUser, setValues, setIsValid]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(values);
    }

    return (
        <div className='profile-form profile-form__container'>
            <form onSubmit={handleSubmit} className='profile-form__content' noValidate>
                <FormTitle title={`Привет, ${currentUser.name || ''}!`} paddingClassName={'profile-form__title-padding'} titleAlignClassName={'profile-form__title-align'} />
                <div className='profile-form__content_align'>
                    <div className='profile-form__fields'>
                        <div className='profile-form__field'>
                            <label className='profile-form__field-label'>Имя</label>
                            <div className='profile-form__field-input-container'>
                                <input className={`profile-form__field-input ${errors.name && 'profile-form__input-error-message_color'}`}
                                    onChange={handleChange}
                                    value={values.name || ''}
                                    type='text'
                                    name='name'
                                    minLength='2'
                                    maxLength='30'
                                    required
                                />
                                {errors.name && <span className='profile-form__input-error-message profile-form__input-error-message_color'>{errors.name}</span>}
                            </div>
                        </div>
                        <div className='profile-form__field'>
                            <label className='profile-form__field-label'>E-mail</label>
                            <div className='profile-form__field-input-container'>
                                <input className={`profile-form__field-input ${errors.email && 'profile-form__input-error-message_color'}`}
                                    onChange={handleChange}
                                    value={values.email || ''}
                                    type='email'
                                    name='email'
                                    minLength='2'
                                    maxLength='30'
                                    required
                                />
                                {errors.email && <span className='profile-form__input-error-message profile-form__input-error-message_color'>{errors.email}</span>}
                            </div>
                        </div>
                    </div>
                    <div className='profile-form__button-container'>
                        <button type='submit' className={`profile-form__submit-button ${!isValid && submitBattonInactiveClassName}`}>Редактировать</button>
                        <a href='/' onClick={signout} className='profile-form__link'>Выйти из аккаунта</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Profile;