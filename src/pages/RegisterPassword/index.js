import { Form, Input } from 'antd';
import * as S from './styles';

export function RegisterPasswordPage(){
	const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

	return(
		<S.Container>
			<S.ContainerForm>
				<h2>Register Password</h2>

				<Form 
					name="register"
					layout="vertical"
					size="large"
					onFinish={onFinish}
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
						<Input.Password placeholder="Password"/>
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
            <S.Button type="primary" htmlType="submit" className="login-form-button">
              Save
            </S.Button>
          </Form.Item>
				</Form>
			</S.ContainerForm>
		</S.Container>
	);
}