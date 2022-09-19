import { useCallback, useState } from "react";

const NAME_INPUT_ERROR_MESSAGE = 'Имя должно содержать от 2 до 30 символов, которыми могут быть буквы латиницы, кириллицы и цифры';
const EMAIL_INPUT_ERROR_MESSAGE = 'Введите корректный формат электронной почты';
const PASSWORD_INPUT_ERROR_MESSAGE = 'Пароль должен содержать от 2 до 30 символов, которыми могут быть буквы латиницы, кириллицы и цифры';

// хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: validateInputs(e).errorMessage});
    setIsValid(target.closest('form').checkValidity() && validateInputs(e).isValid);
    // setErrors({...errors, [name]: target.validationMessage || validateInputs(e).errorMessage});
    // setIsValid(target.closest('form').checkValidity() && validateInputs(e).isValid);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  // валидация вводных данных
  function validateInputs(e) {
    const nameRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]{2,30}$/; // от 2 до 30 символов, которыми могут быть буквы латиницы, кириллицы и цифры
    const emailRegExp = /[^@\s]+@[^@\s]+\.[A-Z]{2,4}$/i; // формат электронной почты
    const passwordRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]{2,30}$/; // от 2 до 30 символов, которыми могут быть буквы латиницы, кириллицы и цифры
    if (e.target.name === 'name' && !nameRegExp.test(e.target.value)) {
      return { errorMessage: NAME_INPUT_ERROR_MESSAGE, isValid: false };
    }
    if (e.target.name === 'email' && !emailRegExp.test(e.target.value)) {
      return { errorMessage: EMAIL_INPUT_ERROR_MESSAGE, isValid: false };
    }
    if (e.target.name === 'password' && !passwordRegExp.test(e.target.value)) {
        return { errorMessage: PASSWORD_INPUT_ERROR_MESSAGE, isValid: false };
      }
    return { errorMessage: undefined, isValid: true };
  }

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}

// export function handleSearch(data, searchQuery) {
//   const regex = new RegExp(searchQuery, "gi");
//   const movies = data.filter(
//     (item) => regex.test(item.nameRU) || regex.test(item.nameEN)
//   );
//   return movies;
// }
