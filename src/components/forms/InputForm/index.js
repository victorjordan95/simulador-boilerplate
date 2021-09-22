import { Controller } from 'react-hook-form';
import { Input } from 'antd';
import * as S from './styles';

export function InputForm({ control, name, error, isPassword, isRequired = false, ...rest }) {
  return (
    <S.Container>
      <Controller
        name={name}
        control={control}
        rules={{
          required: isRequired,
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            type={isPassword ? 'password' : 'text'}
            onChange={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
