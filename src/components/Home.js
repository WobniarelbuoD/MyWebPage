import { Card, Grid, Typography} from '@mui/material';
import { Box } from '@mui/system';
import Cards from './Cards';
import Bubble from './Bubble';

const Home = () => {
    const cardsContents = [
        {title:"HTML/CSS",
        text:"One of the first things i learned and the one i used the most is deffinetly HTML and CSS. I wanted to have a good grasp on the basics, for this reason i did alot of raw HTML/CSS while learning other languages."},
        
        {title:"Javascript",
        text:"If someone asked me 'What is your favorite programming language?', the answer would be Javascript. Javascript is the language i know best, and the one i've had the most projects with."},
        
        {title:"React.js",
        text:"React was my transition from Javascript and it was also the time i've started using more styling frameworks like bootstrap. When i code with React i mostly use Material UI for styling."},
       
        {title:"PHP",
        text:"PHP was my first dive into the Back-End of programming and where my projects started gaining depth. I am quite confident in my understanding of PHP. It helped me in my future studies with different languages/Frameworks."},
       
        {title:"SQL / Symphony / OOP",
        text:"MySQL was my first dip into databases and data structures. I had an easy time understanding the basics and principles of SQL. This is also where i learned about Object oriented programming."},
       
        {title:"Laravel",
        text:"Laravel was deffinetly my biggest challenge learning factories, seeders and security was not easy. But after learning the basics i have finally created a website with a database, logins and structures."},
    ];
    // const Primal = green[600]
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box minHeight={"100vh"}>
        <Bubble />

        <Box>
            <Card sx={{borderRadius:"30px"}} variant="outlined"> 
            <Typography textAlign={"center"} paddingTop="50px" variant="h3">Languages And Frameworks</Typography>
                <Grid padding="40px" spacing={3} textAlign={"center"} container>

                {cardsContents.map((item,index) => {
                    return <Cards key={index} title={item.title} text={item.text}/>
                        })}
                </Grid>
            </Card>
        </Box>
        </Box>
    );
};

export default Home;