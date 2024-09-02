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
          position: 'absolute', // Edited top to better respect mobile
          top: { xs: '10px', sm: '20px'}, // Adjust to position the title card at the top
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2, // In front of the background
          padding: { xs: '10px 20px', sm: '20px 40px' }, // Adjust padding for mobile
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent background for readability
          borderRadius: '12px',
          textAlign: 'center',
          width: { xs: '90%', sm: 'auto'}, //Full width on mobile
        }}
      >
        <Typography variant="h3" 
        sx={{ 
          color: '#fff',
          fontSize: { xs: '1.8rem', sm: '2.5rem' }
          }}>
          {title}
        </Typography>
        <Typography variant="h6" 
        sx={{ 
          color: '#fff', 
          marginTop: '10px',
          fontSize: { xs: '1.2rem', sm: '1.5rem'},
          }}>
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