import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';
import Image from '../../../../Assets/Images/man-worker-firld-by-solar-panels.png';
import Icon from '../../../../Assets/Icons/Icon ionic-md-arrow-round-back.svg';
const Content4 = () => {
  return (
    <div className="content-4">
      <Grid container className="content-4-grid">
        <Grid item xs={12} sm={5} className="content-4-grid-1">
          <Box className="content-4-box-left">
            <Box className="content-4-rectangle"></Box>
            <img src={Image} alt={''} className="content-4-img" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <Box className="content-4-box-right">
            <Typography variant="h4" gutterBottom className="content-4-heading">
              Financing E.ON Solar Systems -
              <span className="text-color"> It's That Easy</span>
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              className="content-4-paragraph"
            >
              You don't want to spend the amount for your new system all at
              once, but renting the solar system is also not an option for you?
              <br />
              <br />
              With our financing option, the costs for a PV system can be easily
              converted into monthly installments and - thanks to the solar
              energy produced for personal use - the electricity costs can be
              reduced at the same time. In contrast to rental or leasing models,
              thanks to the financing, you own the system from day one. A solar
              system is definitely worth it.
            </Typography>
          </Box>
          <Box className="content-4-button-box">
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
        <Grid item xs={3} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default Content4;
