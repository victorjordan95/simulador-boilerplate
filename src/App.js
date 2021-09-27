import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import './styles/App.css';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}
