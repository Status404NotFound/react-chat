import {withFormik} from 'formik';
import RegisterForm from '../components/RegisterForm';

export default withFormik({
    mapPropsToValues: () => ({ email: '' }),

    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Введите email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email не действительный';
        }

        if (!values.password){
            errors.password = 'Введите пароль';
        } else if (!/(?=.{8,})/i.test(values.password)) {
            errors.password = 'Пароль должен содержать как минимум 8 символов';
        } else if (!/(?=.*[a-z])/i.test(values.password)) {
            errors.password = 'Пароль должен содержать как минимум одну букву в нижнем регистре';
        } else if (!/(?=.*[A-Z])/i.test(values.password)) {
            errors.password = 'Пароль должен содержать как минимум одну букву в верхнем регистре';
        } else if (!/(?=.*[0-9])/i.test(values.password)) {
            errors.password = 'Пароль должен содержать как минимум одну цифру';
        }

        if (values.passwordRepeat !== values.password){
            errors.passwordRepeat = 'пароли не совпадают';
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm);
