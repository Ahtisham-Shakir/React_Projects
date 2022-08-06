import React from 'react';
import './App.css';
import { CssBaseline, AppBar, Toolbar, Typography, Container, Grid, Button, CardMedia, Card, CardContent, CardActions } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

function App() {

  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div >
          <Container maxWidth="sm" sx={{ backgroundColor: 'red' }}>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
            <Typography align='center' color='textSecondary' paragraph>Hello everyone this is a photo Album and i am trying to make this text as long as possible. So that we can see this text on multiple lines, Then it will look good</Typography>
            <div>
              <Grid container justifyContent='center' spacing={2} >
                <Grid item>
                  <Button variant='contained' color='primary'> See My Photos</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'> Secondary Action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth='md'>
          <Grid container spacing={4}>
            <Grid item>
              <Card>
                <CardMedia image='https:source.unsplash.com/random' title='image title' />
                <CardContent>
                  <Typography gutterBottom variant='h5'>Heading</Typography>
                  <Typography>This is a media card you can use this section to showacase your products and services.</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>View</Button>
                  <Button size='small' color='primary'>Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
