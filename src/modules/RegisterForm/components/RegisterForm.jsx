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

const RegisterForm = () => {

    const [success] = useState(false)

    return (
        <div>
            <div className={'auth__top'}>
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}>
                        <Form.Item name="email">
                            <Input
                                placeholder="Email"
                                size={'large'}
                                prefix={<MailOutlined className="site-form-item-icon"/>}
                            />
                        </Form.Item>

                        <Form.Item name="name">
                            <Input
                                placeholder="Ваше имя"
                                size={'large'}
                                prefix={<UserOutlined className="site-form-item-icon"/>}
                            />
                        </Form.Item>

                        <Form.Item name="password">
                            <Input
                                placeholder="Пароль"
                                size={'large'}
                                type={'password'}
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                            />
                        </Form.Item>

                        <Form.Item name="passwordRepeat">
                            <Input
                                placeholder="Повторите Пароль"
                                size={'large'}
                                type={'password'}
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" size={'large'} htmlType="submit">
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