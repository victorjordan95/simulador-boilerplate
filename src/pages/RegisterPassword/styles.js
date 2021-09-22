import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const ContainerForm = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  min-width: 496px;
  padding: 32px;

  h2 {
    margin-bottom: 24px;
  }
`;

export const Button = styled(AntdButton)`
  width: 100%;
`;