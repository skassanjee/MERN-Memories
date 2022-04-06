import { Link } from "react-router-dom";
import {Avatar, Container, AppBar, Toolbar, Button, Typography, Grow, Grid, Tabs, Tab} from '@material-ui/core';
import useStyles from './styles.js'
import React, {useState} from 'react'
import { useEffect } from "react";
import { useNavigate, useLocation  } from "react-router";


export default function Navbar() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const navigate = useNavigate()
  const location = useLocation()
  console.log(JSON.parse(localStorage.getItem('profile')))
  const logout = () => {  
    localStorage.clear()
    setUser(null)
    navigate('/auth')
  }
  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')))

    
  },[location])

  
  const classes = useStyles();

    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
          <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    
  </AppBar>

  );
}