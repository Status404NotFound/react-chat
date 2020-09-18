import React from 'react';
import {Link} from 'react-router-dom'
import {Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Block, Button} from 'components';

const LoginForm = () => {
    return (
        <div>
            <div className={'auth__top'}>
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}>
                    <Form.Item name="username">
                        <Input
                            placeholder="Имя"
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

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" size={'large'} htmlType="submit">
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Link className={'auth__register-link'} to={'/register'}>
                        Зарегистрироваться
                    </Link>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;