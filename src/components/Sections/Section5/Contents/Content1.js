import React from 'react';
import {Typography, Grid} from '@material-ui/core';

import '../../../../Assets/Css/Section5.css';
const Content1 = () => {
  return (
    <div className="content-1">
    <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs>
          <Grid item xs={5} className="content-1-grid">
      <Typography variant="h4" gutterBottom className="content-1-heading">
        Frequent Questions About{' '}
        <span style={{color: '#FFBA00'}}>Solar Energy</span>
      </Typography>
      </Grid>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> What does a solar system cost?
      </Typography>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> Which orientation should the roof have?
      </Typography>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> What does the unit of messurement kWp mean?
      </Typography>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> How do mono, polycrystalline and amorphous solar modules deffer?
      </Typography>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> What is the efficiency of a solar module?
      </Typography>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> How big does a solar system have to be?
      </Typography>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> Is it worth buying a solar system?
      </Typography>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> What is the lifespan of a solar system?
      </Typography>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> Who installs the E.on solar system?
      </Typography>
      <Typography variant="h4" gutterBottom className="content-1-list">
        <span className="dot">&#8226;</span> What is the average PV yield from a solar system? 
      </Typography></Grid>
      <Grid item xs={1}></Grid>
</Grid>
    </div>
  );
};

export default Content1;
