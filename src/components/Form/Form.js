import './Form.css';

function Form({ title, button }) {
    return (
        <div className="form__container">
            <form className="form__content" noValidate>
                <h3 className="form__title">{title}</h3>
                <label className="form__field">
                    <input type="text" placeholder="Имя" name="name" className="form__input" id="name-input" minLength="2" maxLength="30" required />
                </label>
                <label className="form__field">
                    <input type="text" placeholder="Email" name="email" className="form__input" id="email-input" minLength="2" maxLength="30" required />
                </label>
                <label className="form__field">
                    <input type="password" placeholder="Пароль" name="password" className="form__input" id="password-input" required />
                </label>
                <button type="submit" className="form__button">{button}</button>
            </form>
        </div>
    )
}

export default Form;