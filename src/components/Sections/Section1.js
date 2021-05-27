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
import {Link as RouterLink} from 'react-router-dom';
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
  main_btn: {
    textTransform: 'none',
    fontSize: '10px',
    background: 'var(--button-color)',
    color: 'var(--text-color2)',
  },
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="section-1-svg"
                  >
                    <g
                      id="Group_45865"
                      data-name="Group 45865"
                      transform="translate(-9134 2669)"
                    >
                      <g
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        transform="translate(9134 -2669)"
                        fill="none"
                        stroke="var(--second-icon-color)"
                        strokeWidth="2"
                      >
                        <circle cx="22" cy="22" r="22" stroke="none" />
                        <circle cx="22" cy="22" r="21" fill="none" />
                      </g>
                      <g id="money-bag" transform="translate(9147 -2656)">
                        <path
                          id="Path_4721"
                          data-name="Path 4721"
                          d="M91.788,3.342H95.9A9.781,9.781,0,0,1,97.535.936a.522.522,0,0,0,.121-.595A.549.549,0,0,0,97.15,0a3.181,3.181,0,0,0-1.961.639,2.031,2.031,0,0,1-1.344.463A2.031,2.031,0,0,1,92.5.639,3.181,3.181,0,0,0,90.54,0a.549.549,0,0,0-.507.341.522.522,0,0,0,.121.595A9.78,9.78,0,0,1,91.788,3.342Z"
                          transform="translate(-86.684 0)"
                          fill="var(--second-icon-color)"
                        />
                        <path
                          id="Path_4722"
                          data-name="Path 4722"
                          d="M301,452.551v1.1a.551.551,0,0,0,.551.551H308.2a.551.551,0,0,0,.551-.551v-1.1A.551.551,0,0,0,308.2,452h-6.646A.551.551,0,0,0,301,452.551Z"
                          transform="translate(-289.947 -435.402)"
                          fill="var(--second-icon-color)"
                        />
                        <path
                          id="Path_4723"
                          data-name="Path 4723"
                          d="M308.748,363.652v-1.1A.551.551,0,0,0,308.2,362h-6.646a.551.551,0,0,0-.551.551v1.1a.551.551,0,0,0,.551.551H308.2A.551.551,0,0,0,308.748,363.652Z"
                          transform="translate(-289.947 -348.707)"
                          fill="var(--second-icon-color)"
                        />
                        <path
                          id="Path_4724"
                          data-name="Path 4724"
                          d="M10.983,125.465c-1.08-1.058-1.961-1.954-2.137-3.364h.518a.551.551,0,1,0,0-1.1H4.957a.551.551,0,1,0,0,1.1h.518c-.176,1.41-1.058,2.306-2.137,3.364C1.774,127,0,128.737,0,132.714a2.741,2.741,0,0,0,2.754,2.644h7.262a1.634,1.634,0,0,1-.1-.551V130.4a1.654,1.654,0,0,1,1.652-1.652H13.54A11.175,11.175,0,0,0,10.983,125.465ZM7.16,128.748a1.648,1.648,0,0,1,.551,3.2v.652a.551.551,0,0,1-1.1,0v-.652a1.65,1.65,0,0,1-1.1-1.551.551.551,0,1,1,1.1,0,.551.551,0,1,0,.551-.551,1.648,1.648,0,0,1-.551-3.2v-.652a.551.551,0,0,1,1.1,0v.652a1.65,1.65,0,0,1,1.1,1.551.551.551,0,1,1-1.1,0,.551.551,0,1,0-.551.551Z"
                          transform="translate(0 -116.557)"
                          fill="var(--second-icon-color)"
                        />
                      </g>
                    </g>
                  </svg>
                </ListItemAvatar>
                <ListItemText
                  primary="Attractive Funding Opportunities"
                  className="list-item-text"
                />
              </ListItem>
              <ListItem className="section-1-list">
                <ListItemAvatar>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="section-1-svg"
                  >
                    <g
                      id="Group_45867"
                      data-name="Group 45867"
                      transform="translate(-9520 2678)"
                    >
                      <g
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        transform="translate(9520 -2678)"
                        fill="none"
                        stroke="var(--second-icon-color)"
                        strokeWidth="2"
                      >
                        <circle cx="22" cy="22" r="22" stroke="none" />
                        <circle cx="22" cy="22" r="21" fill="none" />
                      </g>
                      <g
                        id="constructor-with-hard-hat-protection-on-his-head"
                        transform="translate(9470.603 -2668)"
                      >
                        <path
                          id="Path_4725"
                          data-name="Path 4725"
                          d="M78.676,331.764a2.449,2.449,0,0,0-1.921-.842H75.092L74,329.869a4.435,4.435,0,0,1-2.829,1.04,4.374,4.374,0,0,1-2.684-.934l-.974.934H65.781a2.632,2.632,0,0,0-2.105.921c-1.566,1.816-1.3,5.7-1.184,6.9H80.019C80.111,337.514,80.269,333.54,78.676,331.764Z"
                          transform="translate(0 -315.684)"
                          fill="var(--second-icon-color)"
                        />
                        <path
                          id="Path_4726"
                          data-name="Path 4726"
                          d="M148.629,182.376a1.516,1.516,0,0,0-.526,1.171,1.4,1.4,0,0,0,1.079,1.421,4.843,4.843,0,0,0,1.25,2.763,4.317,4.317,0,0,0,.447.408,3.985,3.985,0,0,0,.632.408,3.521,3.521,0,0,0,3.29,0,3.982,3.982,0,0,0,.632-.408,4.313,4.313,0,0,0,.447-.408,4.791,4.791,0,0,0,1.237-2.75h.039a1.349,1.349,0,0,0,1.25-1.434,1.516,1.516,0,0,0-.526-1.171Z"
                          transform="translate(-82.02 -174.533)"
                          fill="var(--second-icon-color)"
                        />
                        <path
                          id="Path_4727"
                          data-name="Path 4727"
                          d="M149.287,41.1a6.017,6.017,0,0,0-2.855-3.448v3.566a1.1,1.1,0,0,1-.105.408,1.034,1.034,0,0,1-.908.566H143.76a1.032,1.032,0,0,1-1.013-.882.54.54,0,0,1-.013-.145V37.638a6.083,6.083,0,0,0-2.855,3.461l-.092.289h-.75v1.645h11.083V41.388h-.741Z"
                          transform="translate(-73.343 -36.019)"
                          fill="var(--second-icon-color)"
                        />
                        <path
                          id="Path_4728"
                          data-name="Path 4728"
                          d="M235.013,5.764h1.645a.606.606,0,0,0,.54-.329.564.564,0,0,0,.079-.289V.816a1.027,1.027,0,0,0-.053-.289A.832.832,0,0,0,236.461,0h-1.448a.6.6,0,0,0-.605.54c0,.026-.013.053-.013.079V5.145a.662.662,0,0,0,.105.355A.642.642,0,0,0,235.013,5.764Z"
                          transform="translate(-164.601)"
                          fill="var(--second-icon-color)"
                        />
                      </g>
                    </g>
                  </svg>
                </ListItemAvatar>
                <ListItemText
                  primary="Regional Solar ExpertsWork"
                  className="list-item-text"
                />
              </ListItem>
              <ListItem className="section-1-list">
                <ListItemAvatar>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="section-1-svg"
                  >
                    <g
                      id="Group_45868"
                      data-name="Group 45868"
                      transform="translate(-9419 2476)"
                    >
                      <g
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        transform="translate(9419 -2476)"
                        fill="none"
                        stroke="var(--second-icon-color)"
                        strokeWidth="2"
                      >
                        <circle cx="22" cy="22" r="22" stroke="none" />
                        <circle cx="22" cy="22" r="21" fill="none" />
                      </g>
                      <g id="chatting" transform="translate(9432 -2493.622)">
                        <path
                          id="Path_4729"
                          data-name="Path 4729"
                          d="M12.973,31.622H2.122A2.124,2.124,0,0,0,0,33.744v9.509a.55.55,0,0,0,.869.447l3.022-2.156a1.479,1.479,0,0,1,.863-.276H11.4a2.124,2.124,0,0,0,2.122-2.122V32.172A.55.55,0,0,0,12.973,31.622ZM10.3,38.28H3.952a.55.55,0,0,1,0-1.1H10.3a.55.55,0,0,1,0,1.1Zm0-2.565H3.952a.55.55,0,0,1,0-1.1H10.3a.55.55,0,1,1,0,1.1Z"
                          fill="var(--second-icon-color)"
                        />
                        <path
                          id="Path_4730"
                          data-name="Path 4730"
                          d="M156.492,150.084v9.509a.55.55,0,0,1-.869.447l-3.022-2.156a1.479,1.479,0,0,0-.863-.276h-6.647a2.124,2.124,0,0,1-2.122-2.122v-1.042h6.162a3.224,3.224,0,0,0,3.221-3.221v-3.261h2.018A2.124,2.124,0,0,1,156.492,150.084Z"
                          transform="translate(-137.731 -112.077)"
                          fill="var(--second-icon-color)"
                        />
                      </g>
                    </g>
                  </svg>
                </ListItemAvatar>
                <ListItemText
                  primary="Personal Advice"
                  className="list-item-text"
                />
              </ListItem>
              <ListItem>
                <Button className="button">
                  <RouterLink to="/SolarCalculator" className="button-link">
                    Start The Solar Calculator
                  </RouterLink>
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
