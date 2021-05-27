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
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.608"
                  height="16.608"
                  viewBox="0 0 16.608 16.608"
                >
                  <defs></defs>
                  <path
                    id="Icon_ionic-ios-arrow-dropleft-circle"
                    data-name="Icon ionic-ios-arrow-dropleft-circle"
                    className="cls-1"
                    d="M11.679,3.375a8.3,8.3,0,1,1-8.3,8.3A8.3,8.3,0,0,1,11.679,3.375ZM9.946,14.917a.774.774,0,0,0,0,1.09.761.761,0,0,0,.543.224A.774.774,0,0,0,11.036,16l3.753-3.765a.77.77,0,0,0-.024-1.062L10.957,7.355a.771.771,0,0,0-1.09,1.09l3.27,3.234Z"
                    transform="translate(-3.375 -3.375)"
                  />
                </svg>
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
