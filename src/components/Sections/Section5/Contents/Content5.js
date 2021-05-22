import {
  Grid,
  Box,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import React from 'react';
import Icon from '../../../../Assets/Icons/Icon ionic-md-arrow-round-back.svg';
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
          <Typography variant="h4" gutterBottom className="content-5-subheading-1">
            State Subsidies
          </Typography>
          <Typography variant="h4" gutterBottom className="content-5-paragraph">
            There are various government grants and loans available. The state
            subsidizes PV systems, for example, with renovation or new building
            loans. In doing so, he supports the investment in renewable
            energies.
          </Typography>
          <Typography variant="h4" gutterBottom className="content-5-subheading-2">
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
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.014"
                  height="14.163"
                  viewBox="0 0 15.014 14.163"
                >
                  <path
                    id="Icon_ionic-md-arrow-round-back"
                    data-name="Icon ionic-md-arrow-round-back"
                    d="M6.926,12.046h9.13L12.516,8.658a1.411,1.411,0,0,1,0-1.928,1.262,1.262,0,0,1,1.843,0l5.9,5.717a1.3,1.3,0,0,1,.384.956v.017a1.3,1.3,0,0,1-.384.956l-5.892,5.717a1.262,1.262,0,0,1-1.843,0,1.411,1.411,0,0,1,0-1.928l3.541-3.388H6.931a1.336,1.336,0,0,1-1.306-1.365A1.322,1.322,0,0,1,6.926,12.046Z"
                    transform="translate(-5.625 -6.33)"
                    fill="var(--button-color)"
                  />
                </svg>
              </ListItemAvatar>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} className="content-5-grid-3"></Grid>
        <Grid item xs={12} sm={6} className="content-5-grid-4">
          <Box className="content-5-box-right">
            <img src={Image} alt={''} className="content-5-img"/>
            <Box className="content-5-rectangle"></Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content5;
