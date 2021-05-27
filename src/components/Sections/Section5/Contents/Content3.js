import React from 'react';
import {
  Typography,
  Grid,
  Button,
  ListItemAvatar,
  Avatar,
  Box,
} from '@material-ui/core';
import Icon4 from '../../../../Assets/Icons/icon4.svg';
import '../../../../Assets/Css/Section5.css';
import SVG from './Content3_svg';
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
                  <SVG />
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
                  <SVG />
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
                  <SVG />
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
                  <SVG />
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
                  <SVG />
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
                  <SVG />
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
                  <SVG />
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
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Content3;
