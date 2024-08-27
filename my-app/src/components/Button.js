import React from 'react';
import Button from '@mui/material/Button';

function MyComponent({ example }) {
  return (
    <Button variant="contained" color="primary">
      {example || "Default!"}
    </Button>
  );
}

export default MyComponent;