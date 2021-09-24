import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RegisterPasswordPage } from '.';

const mockHistoryPush = jest.fn();
const mockHistoryLocation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
    location: mockHistoryLocation,
  }),
}));

describe('Register Password Page', () => {
  const setup = () => {
    const utils = render(<RegisterPasswordPage />);
    const heading = screen.getByRole('heading', { name: /your Password/i });
    const inputCurrentPW = screen.getByPlaceholderText(/current password/i);
    const inputNewPW = screen.getByPlaceholderText(/new password/i);
    const inputConfirmPW = screen.getByPlaceholderText(/confirm password/i);
    const btnSave = screen.getByRole('button', { name: /save/i});
    
    return {
      heading,
      inputCurrentPW,
      inputNewPW,
      inputConfirmPW,
      btnSave,
      ...utils
    };  
  };

  it('render elements', () => {
    const { 
      heading,
      inputCurrentPW,
      inputNewPW,
      inputConfirmPW,
      btnSave
    } = setup();
    
    expect(heading).toBeInTheDocument();
    expect(inputCurrentPW).toBeInTheDocument();
    expect(inputNewPW).toBeInTheDocument();
    expect(inputConfirmPW).toBeInTheDocument();
    expect(btnSave).toBeInTheDocument();
  });

  it('input fields and call submit', async () => {
    const { inputCurrentPW, inputNewPW, inputConfirmPW, btnSave } = setup();
    
    await act(async () => {
      fireEvent.change(inputCurrentPW, { target: { value: '7654321' } });
      fireEvent.change(inputNewPW, { target: { value: '1234567' } });
      fireEvent.change(inputConfirmPW, { target: { value: '1234567' } });
    });
    
    await act(async () => {
      fireEvent.click(btnSave);
    });

    expect(btnSave).toBeDisabled();
    await new Promise((r) => setTimeout(r, 2000));
    expect(mockHistoryPush).toHaveBeenCalledWith('/dashboard');
  });

  it('show errors on submit without data', async () => {
    const { btnSave } = setup();

    await act(async () => {
      fireEvent.submit(btnSave);
    });
    
    expect(btnSave).toBeDisabled();
    await new Promise((r) => setTimeout(r, 2000));

    const alertUser = screen.getAllByRole('alert');
    console.log(alertUser.length);
    expect(alertUser).toHaveLength(3);
  })
})
