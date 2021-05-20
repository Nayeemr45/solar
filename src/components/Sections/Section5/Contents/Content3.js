import React from 'react';
import {Typography, Grid, Button, ListItemAvatar, Avatar, Box} from '@material-ui/core';
import Check_icon from '../../../../Assets/Icons/check-icon.png';
import Icon4 from '../../../../Assets/Icons/icon4.svg';
import '../../../../Assets/Css/Section5.css';
const Content3 = () => {
  return (
    <div className="content-3">
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs>
          <Typography variant="h4" gutterBottom className="content-3-heading">
            Benefits Of
            <span style={{color: '#FFBA00'}}> Solar Energy</span>
          </Typography>
          <Grid container item xs={12} sm={12} className="content-3-grid">
          <Grid item xs={12} sm={5}>
          <Typography variant="h4" gutterBottom className="content-3-list">
            <span className="content-3-list-icon"><img src={Check_icon} alt={''} />
            </span>
            Reduction of electricity costs through own use of solar energy
          </Typography>
          <Typography variant="h4" gutterBottom className="content-3-list">
            <span className="content-3-list-icon"><img src={Check_icon} alt={''} />
            </span>
            Additional income from the EEG feed-in allowance
          </Typography>
          <Typography variant="h4" gutterBottom className="content-3-list">
            <span className="content-3-list-icon"><img src={Check_icon} alt={''} />
            </span>
            Electricity storage balances production fluctuations
          </Typography>
          <Typography variant="h4" gutterBottom className="content-3-list">
            <span className="content-3-list-icon"><img src={Check_icon} alt={''} />
            </span>
            Climate-friendly power generation
          </Typography>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
          <Typography variant="h4" gutterBottom className="content-3-list">
            <span className="content-3-list-icon"><img src={Check_icon} alt={''} />
            </span>
            Operation of charging stations for electric cars possible
          </Typography>
          <Typography variant="h4" gutterBottom className="content-3-list">
            <span className="content-3-list-icon"><img src={Check_icon} alt={''} />
            </span>
            Photovoltaic systems are low maintenance and trouble-free
          </Typography>
          <Typography variant="h4" gutterBottom className="content-3-list">
            <span className="content-3-list-icon"><img src={Check_icon} alt={''} />
            </span>
            25-year performance guarantee * on E.ON solar systems
          </Typography>
        </Grid>
        
        </Grid>
        <Box className="content-3-button-box">
        <Button className="content-3-button">Our solar solution
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
