import { Button } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 16px;
`;

export const ActionButton = styled(Button)`
  color: ${({ theme }) => theme.colors.link};
  border: none;

  &:hover {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: underline;
  }
`;
