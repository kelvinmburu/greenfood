import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainNews from './MainNews';
import RandomImages from '../../aux/slides';
// import Featurednews from './Featurednews';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
  { title: 'Farmers', url: '#' },
  { title: 'Tool', url: '#' },
  { title: 'Market', url: '#' },
  { title: 'Businesses', url: '#' },
  { title: 'About', url: '#' },


];



const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container   style={{
        border: "solid",
        minWidth: "100%",
        height: "100vh",
      }}>
        <Header title="greenfood" sections={sections} />
        <main>
        <RandomImages />
         
        </main>
      </Container>
      <Footer
        title="powerd by greenfood"
      />
    </ThemeProvider>
  );
}
