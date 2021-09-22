import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const ContainerLogin = styled.div`
  background: white;
  max-width: 720px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  padding: 2rem;

  h2 {
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 3rem;
      border-radius: 0.25rem;

      & + input {
        margin-top: 1rem;
      }
    }

    button {
      width: 100%;
      padding: 1rem;
      height: 3rem;
      margin-top: 1rem;
      border-radius: 0.25rem;
    }
  }
`;
