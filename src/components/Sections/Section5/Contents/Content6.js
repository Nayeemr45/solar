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
              <Grid item xs={12} sm={6} className="content-6-grid-1"></Grid>
              <Grid item xs={12} sm={1} className="content-6-grid-1"></Grid>
              <Grid item xs={4} sm={4} className="content-6-grid-2">
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-6-heading"
                >
                  Would you like to speak <br />
                  to us personally?{' '}
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
                <Button className="button">
                  Contact us here
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

export default Content6;
