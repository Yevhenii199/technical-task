import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        width: '1360px',
        height: '42px',
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center',
      }}
     >
      <Typography
        sx={{
          fontFamily: 'Aeroport, sans-serif',
          fontWeight: 900,
          fontSize: '24px',
          textTransform: 'uppercase',
           color:  'black',
           width: '246px',
           height: '33px',
        }}
      >
        Trood Community
      </Typography>

      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/images/header.png`}
        alt="Header"
        sx={{
          width: '229px',
          height: '34px',
        }}
      />
    </Box>
  );
}
