import React, { Component } from 'react'
import { Form, Field, Button } from 'react-vant';
import axios from 'axios'
export class Login extends Component {
  onFinish = (values) => {
    console.log('form submit', values, '111');
    // alert('111')
    axios.get('/Login', { params: values }).then(res => {
      if (res.data.code === 200) {
        localStorage.setItem('login', true)
        this.props.history.push('/my')
      }
      alert(res.data.msg)
    })
  };
  render() {
    return (
      <div>
        <Form onFinish={this.onFinish.bind(this)} onFinish={this.onFinish.bind(this)}>
          <Form.Item name="username" label="用户名">
            <Field />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Field />
          </Form.Item>
          <Button round nativeType="submit" type="primary" block>
            提交
          </Button>
        </Form>
      
      </div>
    )
  }
}

export default Login