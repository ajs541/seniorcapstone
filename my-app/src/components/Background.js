import React from 'react';
import { Box } from '@mui/material';

function BackgroundElement({ children }) {
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
          backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Indore_zoo_gate.jpg/1280px-Indore_zoo_gate.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          zIndex: 1, // Behind the content
        }}
      />

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
