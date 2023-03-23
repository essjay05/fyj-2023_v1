import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { createTheme, ThemeProvider } from '@mui/material';

import App from './App'

import './index.css'

// const customTheme = createTheme({
//   palette: {
//     primary: {
//       light: "#112233",
//       main: 'rgba(0,0,0,0.0)',
//       dark: "#778899",
//       contrastText: "#ffffff"
//     },
//     secondary: {
//       light: "#f0e6e6",
//       main: "#c93434",
//       dark: "#3c3c3c",
//       contrastText: "#1d1e22"
//     },
//     info: {
//       main: '#00b8d4',
//       light: '#18ffff',
//       dark: '#00838f',
//       contrastText: "#000"
//     },
//     background: {
//       default: 'rgba(0,0,0,0.0)',
//     },
//   },
//   typography: {
//     fontFamily: [
//       'Covered By Your Grace',
//       'Helvetica',
//       'sans-serif',
//     ].join(','),
//   },});

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={customTheme}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
