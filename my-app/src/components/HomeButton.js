import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <IconButton component={Link} to="/" variant="contained" sx={{ color: '#fff' }}>
            <HomeIcon />
        </IconButton>
    );
};

export default HomeButton;