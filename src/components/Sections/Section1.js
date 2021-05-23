import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Toolbar,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Container,
} from '@material-ui/core';
import SolarOne from '../../Assets/Images/Artboard1.jpg';
import Icon1 from '../../Assets/Icons/icon1.svg';
import Icon2 from '../../Assets/Icons/icon2.svg';
import Icon3 from '../../Assets/Icons/icon3.svg';
import Icon4 from '../../Assets/Icons/icon4.svg';
import Box from '@material-ui/core/Box';
import '../../Assets/Css/Section1.css';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    margin: '0px',
    padding: '0px',
  },
  root: {
    flexGrow: 1,
  },
  main_btn:{
    textTransform:'none',
    fontSize: '10px',
    background: 'var(--button-color)',
    color: 'var(--text-color2)'
  }
}));
const Section1 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className="section-1">
        <Grid container className="section-1-grid">
          <Grid item sm={1} className="section-1-grid-1"></Grid>
          <Grid item sm={4} className="section-1-grid-2">
            <Typography varient="h3" className="heading">
              SOLAR SYSTEMS
            </Typography>

            <Typography varient="h3" className="heading2">
              Solar Systems For You By Sol1
            </Typography>
          </Grid>
          <Grid item sm={2} className="section-1-grid-3"></Grid>
          <Grid item sm={4} className="section-1-grid-4">
            <List>
              <ListItem className="section-1-list">
                <ListItemAvatar>
                  <Avatar src={Icon1}></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Attractive Funding Opportunities"
                  className="list-item-text"
                />
              </ListItem>
              <ListItem className="section-1-list">
                <ListItemAvatar>
                  <Avatar src={Icon2}></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Regional Solar ExpertsWork"
                  className="list-item-text"
                />
              </ListItem>
              <ListItem className="section-1-list">
                <ListItemAvatar>
                  <Avatar src={Icon3}></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Personal Advice"
                  className="list-item-text"
                />
              </ListItem>
              <ListItem>
                <Button className="button">
                  Start The Solar Calculator
                  <ListItemAvatar className="avatar">
                    <Avatar src={Icon4} className="icon"></Avatar>
                  </ListItemAvatar>
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  endIcon={<svg xmlns="http://www.w3.org/2000/svg" width="16.608" height="16.608" viewBox="0 0 16.608 16.608">
  <defs>
    <style>
      {/* .cls-1 {
        fill= '#fff',
      } */}
    </style>
  </defs>
  <path id="Icon_ionic-ios-arrow-dropleft-circle" data-name="Icon ionic-ios-arrow-dropleft-circle" class="cls-1" d="M11.679,3.375a8.3,8.3,0,1,1-8.3,8.3A8.3,8.3,0,0,1,11.679,3.375ZM9.946,14.917a.774.774,0,0,0,0,1.09.761.761,0,0,0,.543.224A.774.774,0,0,0,11.036,16l3.753-3.765a.77.77,0,0,0-.024-1.062L10.957,7.355a.771.771,0,0,0-1.09,1.09l3.27,3.234Z" transform="translate(-3.375 -3.375)"/>
</svg>
}
                  className={classes.main_btn}
                >
                  Start The Solar Calculator
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={1} className="section-1-grid-5"></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Section1;
