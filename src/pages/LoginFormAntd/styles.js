import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Button = styled(AntdButton)`
  width: 100%;
`;
