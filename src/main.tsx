import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../src/app/theme'
// import Routing from '../src/Routes/route';
// import App from './App'
import './index.css'
import './App.css'
// import Dashboard from './app/dashboard/dasboard';
// import Campaign from './app/campaign/campaign';
import ProductPage from './app/products/product';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}
      {/* <Campaign/> */}
      <ProductPage/>
      {/* <Routing /> */}
    </ThemeProvider>
  </React.StrictMode>,
)