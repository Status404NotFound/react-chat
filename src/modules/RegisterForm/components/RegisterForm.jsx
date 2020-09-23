import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {Form, Input} from "antd";
import {
    InfoCircleTwoTone,
    LockOutlined,
    MailOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Block, Button} from 'components';

const RegisterForm = props => {

    const [success] = useState(false)

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <div>
            <div className={'auth__top'}>
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <Form
                        onSubmit={handleSubmit}
                        name="basic">
                        <Form.Item validateStatus={
                            !touched.email ? '' : errors.email ? 'error' : 'success'
                        }
                                   hasFeedback>
                            <Input
                                name={'email'}
                                placeholder="Email"
                                size={'large'}
                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item name="name">
                            <Input
                                placeholder="Ваше имя"
                                size={'large'}
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                            />
                        </Form.Item>

                        <Form.Item validateStatus={
                            !touched.password ? '' : errors.password ? 'error' : 'success'
                        }
                                   hasFeedback>
                            <Input
                                name={'password'}
                                placeholder="Пароль"
                                size={'large'}
                                type={'password'}
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item validateStatus={
                            !touched.passwordRepeat ? '' : errors.passwordRepeat ? 'error' : 'success'
                        }
                                   hasFeedback>
                            <Input
                                name={'passwordRepeat'}
                                placeholder="Повторите Пароль"
                                size={'large'}
                                type={'password'}
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                value={values.passwordRepeat}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button onClick={handleSubmit} type="primary" size={'large'} htmlType="submit">
                                Зарегистрироваться
                            </Button>
                        </Form.Item>
                        <Link className={'auth__register-link'} to={'/login'}>
                            Войти в аккаунт
                        </Link>
                    </Form>
                ) : (
                    <div className={'auth__success-block'}>
                        <InfoCircleTwoTone style={{ fontSize: '48px'}}/>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                )}
            </Block>
        </div>
    );
};

export default RegisterForm;
