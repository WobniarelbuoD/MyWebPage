import styled from '@emotion/styled';
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
const ExpandCard = (props) => {

    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{width:"100%"}}>
        <CardHeader title={props.title} subheader={props.sub} />
        <CardActions disableSpacing>
          <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{props.text}</Typography>

            {props.links.map((item,index) => {
                    return(
                        <>
                    <CardMedia key={index} component="img" image={item.image} alt="Landing Page"/>
                    <Button color="inherit" href={item.link} target="_blank">Link</Button>
                        </>
                        )})}
          </CardContent>
        </Collapse>
      </Card>
    );
};
export default ExpandCard;