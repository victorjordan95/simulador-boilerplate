import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function useLogin() {
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleNavigateHome = () => {
    setTimeout(() => {
      history.push('/dashboard');
      setIsLoading(false);
    }, 2000);
  };

  const onFinish = (values) => {
    setError(false);
    console.log('Success:', values);
    setIsLoading(true);
    handleNavigateHome();
  };

  const onFinishFailed = (errorInfo) => {
    setError(true);
    console.log('Failed:', errorInfo);
  };

  return {
    isLoading,
    error,
    onFinish,
    onFinishFailed,
  };
}
