// src/components/Sidebar.tsx
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '16px',
      }}
    >
      <List>
        <ListItem>
          <RouterLink
            to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemText primary="Home" />
          </RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink
            to="/register"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemText primary="Register" />
          </RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink
            to="/login"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemText primary="Login" />
          </RouterLink>
        </ListItem>
        <ListItem>
          <RouterLink
            to="/books"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemText primary="Books List" />
          </RouterLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
