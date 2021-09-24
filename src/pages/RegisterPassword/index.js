import { useState } from 'react';
import { Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

export function RegisterPasswordPage(){
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleNavigateHome = () => {
    setTimeout(() => {
      history.push('/dashboard');
      setIsLoading(false);
    }, 2000);
  };

  const onFinish = (values) => {
    setError(false);
    console.log('Success:', values);
    setIsLoading(true);
    handleNavigateHome();
  };

  const onFinishFailed = (errorInfo) => {
    setError(true);
    console.log('Failed:', errorInfo);
  };

  return(
    <S.Container>
      <S.ContainerForm>
        <h2>
          { `${history.location.pathname === '/registerPassword' ? 'Change' : 'Reset'} your Password` }
        </h2>

        <Form
          name="register"
          layout="vertical"
          size="large"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="current"
            rules={[
              {
                required: true,
                message: 'Please input your current password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Current Password"/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="New Password"/>
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password"/>
          </Form.Item>

          <Form.Item>
            <S.Button type="primary" htmlType="submit" className="login-form-button" disabled={(error && true) || isLoading}>
              Save
            </S.Button>
          </Form.Item>
        </Form>
      </S.ContainerForm>
    </S.Container>
  );
}