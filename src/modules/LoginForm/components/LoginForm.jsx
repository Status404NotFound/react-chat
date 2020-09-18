import React from 'react';
import {Link} from 'react-router-dom'
import {Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Block, Button} from 'components';

const LoginForm = () => {
    return (
        <div>
            <Block>
                <div className={'auth__top'}>
                    <h2>Войти в аккаунт</h2>
                    <p>Пожайлуста, войдите в свой аккаунт</p>
                </div>
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}>
                        <Input
                            placeholder="Username"
                            size={'large'}
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}>
                        <Input
                            placeholder="Password"
                            size={'large'}
                            type={'password'}
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
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