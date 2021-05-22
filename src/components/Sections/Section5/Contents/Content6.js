import React from 'react';
import {
  Grid,
  Box,
  Typography,Button,ListItemAvatar,Avatar
} from '@material-ui/core';
import Icon from '../../../../Assets/Icons/Icon ionic-md-arrow-round-back.svg';
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
                  {/* <Button className="button">
                  Contact us here 
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
            </Button> */}
            <Button className="button">Contact us here 
                    <ListItemAvatar className="avatar">
                      <Avatar src={Icon4} className="icon"></Avatar>
                    </ListItemAvatar>
                    </Button>
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
