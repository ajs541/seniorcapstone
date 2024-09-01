import React from 'react';
import { Box, Typography } from '@mui/material';

function BackgroundElement({ title, subtitle, link, children }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden', // Ensures no overflow from children
      }}
    >
      {/* Blurred Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${link})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          zIndex: 1, // Behind the content
        }}
      />

      {/* Title Card */}
      <Box
        sx={{
          position: 'absolute',
          top: '20px', // Adjust to position the title card at the top
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2, // In front of the background
          padding: '10px 20px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background for readability
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ color: '#fff'}}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ color: '#fff', marginTop: '10px'}}>
          {subtitle}
        </Typography>
      </Box>

      {/* Content Overlay */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2, // In front of the background
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%', // Center content vertically
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default BackgroundElement;