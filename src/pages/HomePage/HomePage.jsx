import { Box, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f0f4f8',
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: 'primary.main', textAlign: 'center' }}
      >
        Welcome to the Phone Book — all your contacts in one place!
      </Typography>
    </Box>
  );
};

export default HomePage;
