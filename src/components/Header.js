import React from "react";
import {Typography,CssBaseline,Toolbar,IconButton,Button, Menu, MenuItem, useMediaQuery, Box} from "@mui/material";
import CottageIcon from '@mui/icons-material/Cottage';
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';

const TopBar = () =>{
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

  return(
    <>
      <CssBaseline /> 
      <Box sx={{backgroundColor:"hsla(0,0%,100%,.8)",width:'1152px', borderRadius:"20px", position:"fixed", marginTop:"3vh"}}>
        <Toolbar>
          <IconButton to="/" component={Link}><CottageIcon size="large" edge="start" color="inherit" aria-label="logo" /></IconButton>

          {matches && <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Menu</Button>}
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
            <MenuItem onClick={handleClose}><Button color="inherit" to="projects" component={Link}>Projects</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color="inherit" to="/comments" component={Link}>Comments</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color="inherit" to="/about" component={Link}>About</Button></MenuItem>
            <MenuItem onClick={handleClose}><IconButton color="inherit" href="https://github.com/WobniarelbuoD" target="_blank"><GitHubIcon size="large" edge="start" color="inherit" aria-label="logo" />Github</IconButton></MenuItem>
      </Menu>

          {!matches &&<Stack id="buttonLinks" direction="row" spacing={2}>
            <Button color="inherit" to="/projects" component={Link}>Projects</Button>
            <Button color="inherit" to="/comments" component={Link}>Comments</Button>
            <Button color="inherit" to="/about" component={Link}>About</Button>
            <IconButton color="inherit" href="https://github.com/WobniarelbuoD" target="_blank"><GitHubIcon size="large" edge="start" color="inherit" aria-label="logo" />Github</IconButton>
          </Stack>}
        </Toolbar>
      </Box> 
    </>
  )
}

export default TopBar;