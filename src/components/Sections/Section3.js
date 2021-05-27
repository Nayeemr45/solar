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
                <Button className="button">
                  Start The Solar Calculator
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
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Section3;
