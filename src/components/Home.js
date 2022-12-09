import { Card, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Home = () => {
    return (
        <>
        <Box padding="25vh 0">
        <Typography align="center" variant="h3">Welcome.</Typography>
        <Typography align="center" variant="h5">This Website Is Dedicated To The Likeness Of Me</Typography>
        <Typography align="center" variant="h5">Who Am I? You Might Ask?</Typography>
        <Typography align="center" variant="h5">The Programmer God.</Typography>
        </Box>
        <Box>
        <Card sx={{height:"2500px"}} variant="outlined" />
        </Box>
        </>

    );
};

export default Home;