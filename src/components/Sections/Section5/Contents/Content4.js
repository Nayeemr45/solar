import React from 'react';
import {Grid, Box, Typography, Button, ListItemAvatar, Avatar} from '@material-ui/core';
import Image from '../../../../Assets/Images/man-worker-firld-by-solar-panels.png';
import Icon from '../../../../Assets/Icons/Icon ionic-md-arrow-round-back.svg';
const Content4 = () => {
  return (
    <div className="content-4">
        <Grid container  className="content-4-grid">
          <Grid item xs={12} sm={5} className="content-4-grid-1">
            <Box className="content-4-box-left">
              <Box className="content-4-rectangle"></Box>
              <img src={Image} alt={''} className="content-4-img"/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
          <Grid item xs={12} sm={4}>
            <Box className="content-4-box-right">
              <Typography
                variant="h4"
                gutterBottom
                className="content-4-heading"
              >
                Financing E.ON Solar Systems -
                <span style={{color: '#FFBA00'}}> It's That Easy</span>
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                className="content-4-paragraph"
              >
                You don't want to spend the amount for your new system all at
                once, but renting the solar system is also not an option for
                you?
                <br />
                <br />
                With our financing option, the costs for a PV system can be
                easily converted into monthly installments and - thanks to the
                solar energy produced for personal use - the electricity costs
                can be reduced at the same time. In contrast to rental or
                leasing models, thanks to the financing, you own the system from
                day one. A solar system is definitely worth it.
              </Typography>
            </Box>
            <Box className="content-4-button-box">
        <Button className="content-4-button">Finance solar system
                    <ListItemAvatar className="avatar">
                      <Avatar src={Icon} className="content-4-icon"></Avatar>
                    </ListItemAvatar>
                    </Button>
        </Box>
          </Grid>
          <Grid item xs={3} sm={3}></Grid>
          </Grid>
    </div>
  );
};

export default Content4;
