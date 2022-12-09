import { Card, CardContent, Grid, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';

const Cards = (props) => {
    const Primal = green[500]
    return (<Grid item xs={12} md={6}>
                <Card variant="outlined">
                    <CardContent padding="50px">
                        <Box minHeight={"200px"}>
                            <Typography color={Primal} variant='h4'>{props.title}</Typography>
                            <Typography variant='p'>{props.text}</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
    );
};

export default Cards;