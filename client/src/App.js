import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

import oxygen from './oxygen.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">oxygen suppliers</Typography>
      </AppBar>
      <img src={oxygen} className={classes.background} alt="oxygen cylinders"/>
      <Typography>The aggressive second wave of the pandemic has overwhelmed health infrastructures in most states, with hospitals unable to arrange adequate oxygen supply for the mounting case numbers.
      This shortage has led to over 20 patients dying within hours at Delhi’s Jaipur Golden Hospital Friday. Similarly, six patients died in Amritsar after a private hospital could not procure oxygen. Families of deceased patients in Uttar Pradesh have also alleged that several of these occurred due to a lack of oxygen.

One of the biggest lessons learnt from the first wave was that oxygen therapy helps patients with moderate and severe Covid get better, and only a handful of them need a ventilator after that.

However, despite this information, the present surge in infections seems to have caught the Indian health infrastructure unawares. Almost all states, particularly in north India, are struggling with the supply of medical oxygen.
And thats the case we started supplying free oxygen cylinders      
</Typography>
    <Typography variant="h4" className={classes.down}>List who needs oxygen cylinders</Typography>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;