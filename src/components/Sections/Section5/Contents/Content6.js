import React from 'react';
import {
  Grid,
  Box,
  Typography,Avatar
} from '@material-ui/core';
import Icon from '../../../../Assets/Icons/Icon ionic-md-arrow-round-back.svg';

import Image from '../../../../Assets/Images/business-customer-service.png';

const Content6 = () => {
  return (
    <Box className="content-6">
      <Grid container className="content-6-grid">
        <Grid item xs={1} sm={1}></Grid>
        <Grid item xs={6} sm={5}>
          <img src={Image} className="content-6-img" alt={''} />
        </Grid>
        <Grid item xs={6} sm={6}></Grid>
      </Grid>
      <div className="content-6-background">
        <Box className="img-box">
          <div className="content-6-left">
            <Grid container className="content-6-grid">
              <Grid item xs={6} sm={6} className="content-6-grid-1"></Grid>
              <Grid item xs={4} sm={4} className="content-6-grid-2">
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-6-heading"
                >
                  Would you like to speak <br />to us personally?{' '}
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-6-list"
                >
                  We are happy to answer all of your open questions.
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-6-list"
                >
                  Tel: 0098-3763983
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-6-list"
                >
                  Mon to Fri: 8 a.m. - 8 p.m. Sat: 9 a.m. - 2 p.m. Free of
                  charge from the German landline network
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-6-list"
                >
                  Are you a business customer? 
                  </Typography>
                  <Box className="contact-us-btn">
                <Typography
                  variant="h4"
                  className="content-6-list contact-us-btn"
                >
                  Contact us here 
                  <Avatar src={Icon} className="content-4-icon"></Avatar>
                </Typography>
                </Box>
                <Grid item xs={2} sm={2}></Grid>
              </Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Content6;
