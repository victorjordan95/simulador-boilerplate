import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Login } from '.';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const setup = () => {
  const utils = render(<Login />);
  const userInput = screen.getByRole('textbox');
  const passwordInput = screen.getByPlaceholderText('Password');
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

test('Should input values and call submit', async () => {
  const { userInput, passwordInput, button } = setup();

  await act(async () => {
    fireEvent.change(userInput, { target: { value: 'email@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '1234567' } });
  });

  await act(async () => {
    fireEvent.click(button);
  });

  expect(button).toBeDisabled();
  await new Promise((r) => setTimeout(r, 2000));
  expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard');
});

test('Show errors on try to submit without data', async () => {
  const { button } = setup();

  await act(async () => {
    fireEvent.submit(button);
  });

  expect(button).toBeDisabled();
  await new Promise((r) => setTimeout(r, 2000));

  const alertUser = screen.getAllByRole('alert');
  console.log(alertUser.length);
  expect(alertUser).toHaveLength(2);
});
