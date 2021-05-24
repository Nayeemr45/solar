import React from 'react';
import {
  Typography,
  Grid,
  Button,
  ListItemAvatar,
  Avatar,
  Box,
} from '@material-ui/core';
import Check_icon from '../../../../Assets/Icons/check-icon.png';
import Icon4 from '../../../../Assets/Icons/icon4.svg';
import '../../../../Assets/Css/Section5.css';
import Content3_svg from './Content3_svg'
const Content3 = () => {
  return (
    <div className="content-3">
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs>
          <Typography variant="h4" gutterBottom className="content-3-heading">
            Benefits Of
            <span className="text-color"> Solar Energy</span>
          </Typography>
          <Grid container item xs={12} sm={12} className="content-3-grid">
            <Grid item xs={12} sm={5}>
              <div className="content-3-list-div">
                <span className="content-3-list-icon">
                <Content3_svg />

                </span>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-3-list"
                >
                  Reduction of electricity costs through own use of solar energy
                </Typography>
              </div>
              <div className="content-3-list-div">
                <span className="content-3-list-icon">
                  {/* <img
                    src={Check_icon}
                    alt={''}
                    className="content-3-list-icon-img"
                  /> */}
                  <Content3_svg />
                </span>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-3-list"
                >
                  Additional income from the EEG feed-in allowance
                </Typography>
              </div>
              <div className="content-3-list-div">
                <span className="content-3-list-icon">
                <Content3_svg />
                </span>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-3-list"
                >
                  Electricity storage balances production fluctuations
                </Typography>
              </div>
              <div className="content-3-list-div">
                <span className="content-3-list-icon">
                <Content3_svg />
                </span>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-3-list"
                >
                  Climate-friendly power generation
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={2}></Grid>
            <Grid item xs={12} sm={5}>
              <div className="content-3-list-div">
                <span className="content-3-list-icon">
                <Content3_svg />
                </span>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-3-list"
                >
                  Operation of charging stations for electric cars possible
                </Typography>
              </div>
              <div className="content-3-list-div">
                <span className="content-3-list-icon">
                <Content3_svg />
                </span>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-3-list"
                >
                  Photovoltaic systems are low maintenance and trouble-free
                </Typography>
              </div>
              <div className="content-3-list-div">
                <span className="content-3-list-icon">
                <Content3_svg />
                </span>
                <Typography
                  variant="h4"
                  gutterBottom
                  className="content-3-list"
                >
                  25-year performance guarantee * on E.ON solar systems
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Box className="content-3-button-box">
            <Button className="button">
              Our solar solution
              <ListItemAvatar className="avatar">
                <Avatar src={Icon4} className="icon"></Avatar>
              </ListItemAvatar>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Content3;
