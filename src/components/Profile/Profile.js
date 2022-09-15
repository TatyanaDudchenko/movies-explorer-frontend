import './Profile.css';
import FormTitle from '../FormTitle/FormTitle';
// import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useState, useEffect, useContext } from 'react';

function Profile({ error, signout, onUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);

    const [profileUserName, setProfileUserName] = useState('');
    const [profileUserEmail, setProfileUseEmail] = useState('');

    function handleNameChange(e) {
        setProfileUserName(e.target.value);
    }

    function handleEmailChange(e) {
        setProfileUseEmail(e.target.value);
    }

    useEffect(() => {
        setProfileUserName(currentUser.name);
        setProfileUseEmail(currentUser.email);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name: profileUserName,
            email: profileUserEmail,
        });
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
                                <input className={`profile-form__field-input ${error = false && 'profile-form__input-error-message_color'}`}
                                    onChange={handleNameChange}
                                    value={profileUserName}
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
                                    onChange={handleEmailChange}
                                    value={profileUserEmail}
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
                        {/* <Link onClick={signout} className='profile-form__link' to='/'>Выйти из аккаунта</Link> */}
                        <a href='/' onClick={signout} className='profile-form__link'>Выйти из аккаунта</a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Profile;