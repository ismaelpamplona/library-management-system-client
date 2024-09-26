import { ThemeProvider } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser';
import RegisterUser from './pages/RegisterUser';
import theme from './theme/theme';

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
