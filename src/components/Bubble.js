import { Box, Grid, Typography } from '@mui/material';
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
                <div style={{backgroundImage:`url(${bubble})`,height:"81%",width:"100%", backgroundSize:"cover", backgroundRepeat: 'no-repeat', backgroundPosition: "center", position:"relative", left:"-100px", top:"50px"}}>
                    <Box padding="2vw 2vh 0 150px ">
                        <Typography variant="h3">
                            <Typed showCursor={false} strings={["Hi. I'm Lukas!"]} typeSpeed={40} />
                        </Typography>
                        <Typography color={Primal} variant="h4"><Typed startDelay={1000} showCursor={false} strings={["I'm A Fullstack Developer."]} typeSpeed={40}></Typed></Typography>
                        <Typography variant="h5"><Typed startDelay={3000} showCursor={false} strings={["I'm a Lithuanian programmer that loves thinking outside of the box."]} typeSpeed={40}></Typed></Typography>
                    </Box>
                </div>
            </Grid>
        </Grid>
        </div>
    );
};

export default Bubble;