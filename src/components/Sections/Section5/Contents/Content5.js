import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import Icon4 from '../../../../Assets/Icons/icon4.svg';
import Image from '../../../../Assets/Images/alternative-energy-ecological-concept.png';

const Content5 = () => {
  return (
    <div className="content-5">
      <Grid container className="content-5-grid">
        <Grid item xs={1} sm={1} className="content-5-grid-1"></Grid>
        <Grid item xs={12} sm={4} className="content-5-grid-2">
          <Typography variant="h4" gutterBottom className="content-5-heading">
            Funding For
            <br />
            <span className="text-color"> Photovoltaic Systems</span>
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            className="content-5-subheading-1"
          >
            State Subsidies
          </Typography>
          <Typography variant="h4" gutterBottom className="content-5-paragraph">
            There are various government grants and loans available. The state
            subsidizes PV systems, for example, with renovation or new building
            loans. In doing so, he supports the investment in renewable
            energies.
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            className="content-5-subheading-2"
          >
            Regional Funding Programs
          </Typography>
          <Typography variant="h4" gutterBottom className="content-5-paragraph">
            In addition, various federal states or cities are promoting the
            purchase of PV systems, for example through low-interest loans.
          </Typography>
          <Box className="content-5-button-box">
            <Button className="button2">
              Finance solar system
              <ListItemAvatar className="avatar">
                <Avatar src={Icon4} className="icon"></Avatar>
              </ListItemAvatar>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} className="content-5-grid-3"></Grid>
        <Grid item xs={12} sm={6} className="content-5-grid-4">
          <Box className="content-5-box-right">
            <img src={Image} alt={''} className="content-5-img" />
            <Box className="content-5-rectangle"></Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content5;
