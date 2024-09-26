import { Box, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BooksList from './pages/BooksList';
import Home from './pages/Home';
import LoginUser from './pages/LoginUser';
import RegisterUser from './pages/RegisterUser';
import theme from './theme/theme';

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Sidebar /> {/* Add the Sidebar here */}
          <Box sx={{ flexGrow: 1, padding: '16px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<RegisterUser />} />
              <Route path="/login" element={<LoginUser />} />
              <Route path="/books" element={<BooksList />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
