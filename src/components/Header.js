import React, { useEffect, useState } from "react";
import {CssBaseline,Toolbar,IconButton,Button, Menu, MenuItem, useMediaQuery, Box, Typography} from "@mui/material";
import CottageIcon from '@mui/icons-material/Cottage';
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import StickyBox from "react-sticky-box";

const TopBar = () =>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    console.log(window.location.hash)
    const handleClose = () => {
      setAnchorEl(null);
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const topCheck = scrollPosition <= 200 ? "hsla(0,0%,0%,.7)" : "hsla(0,0%,0%,1)" ;
  return(
    <>
      <CssBaseline /> 
      <Box component={StickyBox} offsetTop={30}sx={{backgroundColor:topCheck, borderRadius:"20px",  boxShadow:"4px 4px 4px #ffffff"}}>
        <Toolbar>
          <IconButton to="/" component={Link}><CottageIcon size="large" edge="start" color="inherit" aria-label="logo" /></IconButton>

          {!matches &&<Box sx={{display:"flex", justifyContent:"end", width:"100%"}}>
          <Stack id="buttonLinks" direction="row" spacing={2}>

            <Button color="inherit" to="/projects" component={Link}>Projects</Button>
            <Button color="inherit" to="/comments" component={Link}>Comments</Button>
            <Button color="inherit" to="/about" component={Link}>About Me</Button>
            
            <IconButton color="inherit" href="https://github.com/WobniarelbuoD" target="_blank">
              <GitHubIcon size="large" edge="start" color="inherit" aria-label="logo" />Github
            </IconButton>
          </Stack>
          </Box>}
          
          {matches && <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Menu</Button>}
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
            <MenuItem onClick={handleClose}><Button color="inherit" to="projects" component={Link}>Projects</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color="inherit" to="/comments" component={Link}>Comments</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color="inherit" to="/about" component={Link}>About Me</Button></MenuItem>
            <MenuItem onClick={handleClose}>
              <IconButton color="inherit" href="https://github.com/WobniarelbuoD" target="_blank">
                <GitHubIcon size="large" edge="start" color="inherit" aria-label="logo" />Github
              </IconButton>
            </MenuItem>
      </Menu>
        </Toolbar>
      </Box> 
    </>
  )
}

export default TopBar;