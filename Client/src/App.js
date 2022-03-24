import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './Assets/Images/memories.png'

const App = () => {
  return (
    <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
            <Typography variant="h2" align='center'>Memoriezzz</Typography>
            <img src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
                    <Grid item
                </Grid>
            </Container>
        </Grow>
    </Container>
  )
}

export default App