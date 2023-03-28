import * as React from 'react';
import { NavLink } from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import './NavBar.css'

const customTheme = createTheme({
  palette: {
    primary: {
      light: "rgba(1, 255, 230, 0.85)",
      main: 'rgba(0,0,0,0)',
      dark: "#4ab19d",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#f0e6e6",
      main: "#c93434",
      dark: "#3c3c3c",
      contrastText: "#1d1e22"
    },
    info: {
      main: '#00b8d4',
      light: '#18ffff',
      dark: '#00838f',
      contrastText: "#000"
    },
  },
  typography: {
    fontFamily: [
      'Nothing You Could Do',
      'JetBrains Mono',
      'Helvetica',
      'sans-serif',
    ].join(','),
    color: 'rgba(1, 255, 230, 0.85)',
  },
});

const pages = [
  {
    to: '/',
    name: 'Home',
    active: false
  },
  {
    to: '/portfolio',
    name: 'Portfolio',
    active: false
  },
  {
    to: '/about',
    name: 'About',
    active: false
  },
  {
    to: '/style-guide',
    name: 'Style Guide',
    active: false
  }
]


const NavBar = ({ currentPageName }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar 
        className='menu'
        position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* Desktop Nav 'LOGO' */}
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Nothing You Could Do',
                letterSpacing: '2px',
                color: '#FFFFFF',
                textDecoration: 'none',
                width: { s: '25%', md: '50%', l: '100%'},
              }}
            >
              &copy; JOY S. 2018
            </Typography>
            {/* Mobile Menu Nav / pop up menu */}
            <Box sx={{ 
              flexGrow: 1, 
              display: { xs: 'flex', md: 'none' },
            }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  width: '100%',
                  background: 'rgba(0,0,0,.8)',
                }}>
                {pages.map((page, index) =>(
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography
                      variant='h6'
                      component='a'
                      href={page.to}
                      textAlign="center"
                      aria-label={page.name}
                      className={`handwritten-style nav-link ${page.name === currentPageName ? 'active': ''}`}
                      sx={{ 
                        fontFamily: 'Nothing You Could Do',
                        letterSpacing: '2px',
                        color: 'rgba(1, 255, 230, 0.85)',
                        textDecoration: 'none',
                        width: '100%',}}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Typography
                  key={page.name}
                  variant='h6'
                  component='a'
                  href={page.to}
                  textAlign="center"
                  aria-label={page.name}
                  className={`handwritten-style nav-link ${page.name === currentPageName ? 'active': ''}`}
                  sx={{
                    fontFamily: 'Nothing You Could Do',
                    letterSpacing: '2px',
                    color: 'rgba(1, 255, 230, 0.85)',
                    textDecoration: 'none',
                    width: '100%',}}>
                  {page.name}
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default NavBar