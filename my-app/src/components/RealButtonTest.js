import * as React from 'react';
import Button from '@mui/material/Button';

function RealButtonTest({link}) {
    return(
        <Button href={link || "/K_2.js"} varient="contained">
            Test
        </Button>
    );
}

export default RealButtonTest;