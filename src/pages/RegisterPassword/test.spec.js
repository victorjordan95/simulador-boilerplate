import { render, screen } from '@testing-library/react';
import { RegisterPasswordPage } from '.';

describe('Register Password Page', () => {
  const setup = () => {
    const utils = render(<RegisterPasswordPage />);
    const heading = screen.getByRole('heading', { name: /Register Password/i });
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

  // it('fill fields and call submit', () => {
  //   const { inputCurrentPW, inputNewPW, inputConfirmPW } = setup();
  //   //to do
  // });
})
