import { Card, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Home = () => {
    return (
        <>
        <Typography align="center" sx={{paddingTop:"10vh"}} variant="h3">This Is The Home Page</Typography>
        <Box>
        <Card sx={{height:"500px"}} variant="outlined" />
        </Box>
        </>

    );
};

export default Home;