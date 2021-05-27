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
import Image from '../../../../Assets/Images/man-worker-firld-by-solar-panels.png';
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
            <Box className="content-4-button-box">
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
          </Box>
        </Grid>
        <Grid item xs={3} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default Content4;
