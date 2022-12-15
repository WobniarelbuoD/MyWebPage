import {HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Comments from "./components/Comments";
import { Container } from "@mui/system";
import Beach from "./components/Beach";
import About from "./components/About";
import { createTheme, ThemeProvider } from "@mui/material";
import Background from "./components/Background";
import Footer from "./components/Footer";

function App() {
  const theme = createTheme({
    // palette: {
    //   mode: 'dark',
    // },
    typography:{
      fontFamily:[
        'Solway',
        'serif'
      ].join(','),
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Beach />
      <Background />
      <Container>
      <HashRouter>
        <Header />
        <Routes sx={{textAlign:'center'}}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/comments" element={<Comments />} />
            <Route exact path="/about" element={<About />} />
        </Routes>
      </HashRouter>
      </Container>
      {/* <Footer /> */}
    </div>
    </ThemeProvider>
  );
}

export default App;