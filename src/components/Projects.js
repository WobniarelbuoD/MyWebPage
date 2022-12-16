import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import ExpandCard from './ExpandCard';
import HTML from "../images/HTML_Page.PNG"

const Projects = () => {

    const content = [
        {
            title:"HTML/CSS",
            sub:"The beginning of a legend.",
            text:"My programming journey stared with HTML and CSS. The time it took to learn was about 2 weeks. During these 2 weeks i had some small assignments, but none could compare to my first website/assignment of copying a website using only HTML/CSS. The website is flawed but it perfectly represents the start of my journey.",
            links: [{
                link:"https://github.com/WobniarelbuoD",
                image:HTML
        }]
        },
        {
            title:"Javascript",
            sub:"The Game Changer.",
            text:"My second and main language was Javascript. The time it took to learn was about 6-7weeks. Since Javascript is my favorite language it's only natural i have so many projects with it. ",
            links: [{
                link:"https://github.com/WobniarelbuoD",
                image:HTML
        }]
        },
    ];

    return (
        <Box minHeight={"100vh"} paddingTop={"20vh"}>
        <Box>
            <Card sx={{borderRadius:"30px"}} variant="outlined"> 
            <Typography textAlign={"center"} paddingTop="50px" variant="h3">Projects</Typography>
                <Grid padding="100px" spacing={3} textAlign={"center"} container>
                {content.map((item,index) => {
                    return <ExpandCard key={index} title={item.title} text={item.text} sub={item.sub} links={item.links}/>
                        })}
                </Grid>
            </Card>
        </Box>
        </Box>
    );
};

export default Projects;