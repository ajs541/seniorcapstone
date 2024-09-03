import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function RouterButton() {
  return (
    <Button component={Link} to="/K_2.js">
      Router Link
    </Button>
  );
}