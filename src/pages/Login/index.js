import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { InputForm } from '../../components/forms/InputForm';
import * as S from './styles';

export function LoginPage() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <S.Container>
      <S.ContainerLogin>
        <h2>Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm control={control} name="username" placeholder="Usuário" />

          <InputForm control={control} name="password" placeholder="Senha" isPassword />

          <Button type="primary" htmlType="submit">
            Fazer login
          </Button>
        </form>
      </S.ContainerLogin>
    </S.Container>
  );
}
