import React from 'react'
import Posts from '../../Components/Posts/Posts'
import Form from '../../Components/Form/Form'
import { Container, AppBar, Toolbar, Button, Typography, Grow, Grid, Tabs, Tab} from '@material-ui/core';
import useStyles from './styles.js'
import {Link, Routes, Route} from 'react-router-dom'

const Home = () => {

  const classes = useStyles();


  return (

    <Container maxWidth="lg">
      
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  /> 
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form  />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default Home