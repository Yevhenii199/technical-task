import { Box, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Main page', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Vacancies', path: '/vacancies' },
    { label: 'People', path: '/people' },
    { label: 'Test', path: '/test' },
    { label: 'Settings', path: '/settings' },
  ];

  return (
    <Box sx={{ width: '200px', height: '300px' }}>
      <List>
        {navItems.map(({ label, path }) => {
          const isActive = location.pathname === path;

          return (
            <ListItem
              button
              key={label}
              onClick={() => navigate(path)}
              sx={{
                width: '200px',
                height: '50px',
                borderRadius: '12px',
                backgroundColor: isActive ? '#C2C5CB' : 'transparent',
                color: isActive ? '#FFFFFF' : 'inherit',
              }}
            >
              <ListItemText primary={label} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}





