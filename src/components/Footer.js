import { Box } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';

const Footer = () => {
    const Primal = green[400]
    return (
        <footer>
            <Box sx={{background:'linear-gradient(163deg, rgba(13,201,32,1) 30%, rgba(0,121,255,1) 70%)'}} height="25vh">

            </Box>
        </footer>
    );
};

export default Footer;