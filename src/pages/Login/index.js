import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import * as S from './styles';
import { useLogin } from './useLogin';

export function Login() {
  const { onFinish, onFinishFailed, error, isLoading } = useLogin();

  return (
    <S.Container>
      <S.ContainerLogin>
        <h2>Login</h2>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          size="large"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <S.Button type="primary" htmlType="submit" disabled={(error && true) || isLoading}>
              Log in
            </S.Button>
          </Form.Item>
        </Form>
      </S.ContainerLogin>
    </S.Container>
  );
}
