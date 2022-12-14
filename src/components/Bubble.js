import { Box, Card, Container, Grid, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import React from 'react';
import Typed from 'react-typed';
import profile from "../images/profile.png"
import bubble from "../images/bubble.png"

const Bubble = () => {
    const Primal = green[600]
    return (
        <div>
                    <Grid container padding="20vh 0 10vh 0">
            <Grid item xs={4}><img src={profile} width="100%" alt="profile"/></Grid>
            <Grid item xs={8}>
                <Card sx={{border:"solid 8px black", borderRadius:"40px", marginTop:"4vh"}}>
                    <Container>
                        <Box padding={"20px"} minHeight={"280px"}>
                        <Typography fontSize="2.5rem">
                            <Typed showCursor={false} strings={["Hi. I'm Lukas!"]} typeSpeed={40} />
                        </Typography>
                        <Typography color={Primal} fontSize="2.3rem"><Typed startDelay={1000} showCursor={false} strings={["I'm A Fullstack Developer."]} typeSpeed={40}></Typed></Typography>
                        <Typography fontSize="1.8rem"><Typed startDelay={3000} showCursor={false} strings={["I'm a Lithuanian programmer that loves thinking outside of the box."]} typeSpeed={40}></Typed></Typography>
                        </Box>
                    </Container>
                </Card>
            </Grid>
        </Grid>
        </div>
    );
};

export default Bubble;