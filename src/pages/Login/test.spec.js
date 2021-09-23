import { waitFor , fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Login} from '.';

const setup = () => {
  const utils = render(<Login />);
  const userInput = screen.getByRole('textbox');
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const button = screen.getByRole('button', { name: /Log in/i });
  return {
    userInput,
    passwordInput,
    button,
    ...utils,
  };
};

test('Show fields page', () => {
  // screen.debug(); // show DOM
  // screen.getByRole(''); // show roles in DOM
  const { userInput, passwordInput, button } = setup();

  expect(button).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(userInput).toBeInTheDocument();
});

// test('Should render button disabled', () => {});

test('Should input values and call submit', async () => {
  const { userInput, passwordInput, button } = setup();
  // const onFinish = jest.fn();

  fireEvent.change(userInput, { target: { value: 'username' } });
  fireEvent.change(passwordInput, { target: { value: 'password' } });

  expect(userInput.value).toBe('username');
  expect(passwordInput.value).toBe('password');

  fireEvent.submit(button);

  // await waitFor(() =>
  //   // expect(fetchSignInSpy).toHaveBeenCalledWith(seedEmail, seedPassword)
  //   expect(onFinish).toBeCalled()
  // );
});

// test('Show no username error', () => {});

// test('Show no password error', () => {});
