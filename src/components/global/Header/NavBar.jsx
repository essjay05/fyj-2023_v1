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

// import HiddenToggle from './HiddenToggle'

import './NavBar.css'

const customTheme = createTheme({
  palette: {
    primary: {
      light: "#112233",
      main: 'rgba(0,0,0,0.0)',
      dark: "#778899",
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
    background: {
      default: 'rgba(0,0,0,0.0)',
    },
  }
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
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar 
        className='menu'
        position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}>
                {pages.map((page, index) => {
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <NavLink 
                      to={page.to}
                      className={`handwritten-style nav-link ${page.name === currentPageName ? 'active': ''}`}
                      aria-label={page.name}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </NavLink>
                  </MenuItem>
                })}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <NavLink 
                  key={page.name}
                  to={page.to}
                  className={`handwritten-style nav-link ${page.name === currentPageName ? 'active': ''}`}
                  aria-label={page.name}>
                  <Typography textAlign="center">{page.name}</Typography>
                </NavLink>
              ))}
            </Box>
            
          
          </Toolbar>

        </Container>
        {/* <div className='mobile-nav-toggle'>
          <input id='NavToggle' className='nav-toggle' type='checkbox' htmlFor='toggle' />
          <label className='burger' htmlFor='NavToggle' aria-label='Mobile Nav Toggle'> &#9776;</label>
          <HiddenToggle/>
        </div> */}
        {/* <div className='menu-links'>
          <NavLink 
            to='/'
            className='handwritten-style nav-link'
            aria-label='Home'>
              Home
          </NavLink>
          <NavLink 
            to='/portfolio'
            className='handwritten-style nav-link'
            aria-label='Portfolio'>
              Portfolio
          </NavLink>
          <NavLink 
            to='/about'
            className='handwritten-style nav-link'
            aria-label='About'>
              About
          </NavLink>
          <NavLink 
            to='/style-guide'
            className='handwritten-style nav-link'
            aria-label='Style Guide'>
              Style Guide
          </NavLink>
        </div> */}
      </AppBar>
    </ThemeProvider>
  )
}

export default NavBar