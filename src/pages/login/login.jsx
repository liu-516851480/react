import React, { Component } from 'react'
import { Form, Icon, Input, Button} from 'antd';
import './css/login.css';
import logo from './images/logo.png';

class Login extends Component {

    pwdValidator = (rule, value, callback) => {
        if(!value){
            callback('密码不能为空!');
        }else if(value.length < 4){
            callback('密码不能小于4位!');
        }else if(value.length > 12){
            callback('密码不能大于12位!');
        } else if (!(/^\w+$/.test(value))){
            callback('密码只能由数字、字母、下划线组成！');
        }
        callback();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator} = this.props.form;
        return (
            <div id="login">
                <div className="loginHeader">
                    <h1>
                        <img src={logo} alt=""/>
                        商品管理系统
                    </h1>
                </div> 
                <div className="loginBody">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>

                            {getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '用户名必须输入!' },
                                    { min: 4, message: '用户名不能小于4位!' },
                                    { max: 12, message: '用户名不能大于12位!' },
                                    { pattern: /^\w+$/, message: '用户名只能由数字、字母、下划线组成!' },
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}

                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    { validator: this.pwdValidator},
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Form.create({ name: 'normal_login' })(Login);
