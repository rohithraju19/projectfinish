import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ADMIN
        </Typography>
        <Link to ='/Add'><Button color="inherit" style={{color:'white'}}>ADD BOOKS</Button></Link>
        <Link to ='/View'><Button color="inherit"  style={{color:'white'}}>VIEW BOOKS</Button></Link>
        {/* //////link cheyyanam///// */}
        <Button color="inherit"  style={{color:'white'}}>USERS</Button>
        <Link to ='/Requests'><Button color="inherit"  style={{color:'white'}}>REQUESTS</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar