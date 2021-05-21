import React from 'react';
import {
  Avatar,
  Box,
  Grid,
  Typography,
  ListItemAvatar,
  Button,
} from '@material-ui/core';
import '../../Assets/Css/Section_3.css';
import Icon4 from '../../Assets/Icons/icon4.svg';

import Section_3_img from '../../Assets/Images/section3.jpg';
const Section3 = () => {
  return (
    <Box className="section-3">
      <Grid container className="section-3-grid">
        <Grid item xs={1} sm={1} className="section-3-grid-1"></Grid>
        <Grid item xs={8} sm={3} className="section-3-grid-2">
          <Typography variant="h4" gutterBottom className="sectoin-3-heading">
            Detarmine your solar potential
          </Typography>
        </Grid>
        <Grid item xs={2} sm={3} className="section-3-grid-3"></Grid>

        <Grid item xs={4} sm={4} className="section-3-grid-4">
          <img src={Section_3_img} className="Section_3_img" alt={''} />
        </Grid>
        <Grid item xs={2} sm={1} className="section-3-grid-5"></Grid>
      </Grid>
      <div className="img">
        <Box className="img-box">
          <div className="sectoin-3-left">
            <Grid container className="section-3-grid-6">
              <Grid item xs={1} sm={1} className="section-3-grid-7"></Grid>
              <Grid item xs sm={4} className="section-3-grid-8">
                <Typography
                  variant="h4"
                  gutterBottom
                  className="sectoin-3-paragraph"
                >
                  We do an analysis of your roof: Based on the data, you will
                  receive an individual result on your solar potential and a
                  free offer
                </Typography>
                <Button className="cal-button">
                  Start The Solar Calculator
                  <ListItemAvatar className="sectio-3-avatar">
                    <Avatar src={Icon4} className="sectio-3-icon"></Avatar>
                  </ListItemAvatar>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Section3;
