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
        isValid,
        dirty
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
                            !touched.email ? undefined : errors.email ? 'error' : 'success'
                        }
                                   help={!touched.email ? undefined : errors.email}
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
                            !touched.password ? undefined : errors.password ? 'error' : 'success'
                        }
                                   help={!touched.password ? undefined : errors.password}
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
                            !touched.passwordRepeat ? undefined : errors.passwordRepeat ? 'error' : 'success'
                        }
                                   help={!touched.passwordRepeat ? undefined : errors.passwordRepeat}
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
                            {dirty && isValid ?
                                <Button onClick={handleSubmit} type="primary" size={'large'} htmlType="submit">
                                    Зарегистрироваться
                                </Button> :
                                <Button onClick={handleSubmit} type="primary" size={'large'} htmlType="submit" disabled>
                                    Зарегистрироваться
                                </Button>
                            }

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
