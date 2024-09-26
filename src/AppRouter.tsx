import { ThemeProvider } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterUser from './pages/RegisterUser';
import theme from './theme/theme';

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
