import React, { useEffect, useState } from "react";
import {CssBaseline,Toolbar,IconButton,Button, Menu, MenuItem, useMediaQuery, Box} from "@mui/material";
import CottageIcon from '@mui/icons-material/Cottage';
import { Stack } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import StickyBox from "react-sticky-box";
import { green } from "@mui/material/colors";

const TopBar = () =>{
const Primal = green[500]
const tabs = [
  "projects",
  "comments",
  "about",
]

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
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

const [page, setPage] = useState("")
useEffect(() => {
  setPage(window.frames.location.hash);
});

const topCheck = scrollPosition <= 200 ? "hsla(0,0%,90%,.7)" : "hsla(0,0%,90%,1)" ;
  return(
    <>
      <CssBaseline /> 
      <Box component={StickyBox} offsetTop={30}sx={{backgroundColor:topCheck, borderRadius:"20px",  boxShadow:"4px 4px 4px #000000", zIndex:"1000"}}>
        <Toolbar>
          <IconButton to="/" component={Link}><CottageIcon size="large" edge="start" color="inherit" aria-label="logo" /></IconButton>

          {!matches &&<Box sx={{display:"flex", justifyContent:"end", width:"100%"}}>
          <Stack id="buttonLinks" direction="row" spacing={2}>

          {tabs.map((item,index) => {
            console.log(window.frames.location.hash)
                    return <Button sx={{'&.active': {color:"white"}}} to={item} key={index} color="inherit" component={NavLink}>{item}</Button>
                  })}
            <IconButton color="inherit" href="https://github.com/WobniarelbuoD" target="_blank">
              <GitHubIcon size="large" edge="start" color="inherit" aria-label="logo" />Github
            </IconButton>
          </Stack>
          </Box>}
          
          {matches && <Button sx={{color:Primal}} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Menu</Button>}
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