import React from 'react';
import {
  Typography,
  Grid,
  Button,
  ListItemAvatar,
  Avatar,
  Box,
} from '@material-ui/core';
import '../Assets/Css/Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo2 from '../Assets/Images/logo.svg';

const Footer = () => {
  return (
    <Box className="footer">
      <Grid container className="footer-grid-1">
        <Grid item  sm={1} className="footer-grid-2"></Grid>
        <Grid container item  sm className="footer-grid-3">
          <Grid item  sm={4} className="footer-grid-4">
            <img src={Logo2} className="logo" />

            <Typography variant="h6" component="h1" className="footer-Address">
              Carrer del Faisan 17
              <br />
              San Jordi de Salinas, 07817
              <br />
              lbiza,Baleares,Spain
            </Typography>
          </Grid>
          <Grid item  sm={4} className="footer-grid-5">
            <Typography variant="h6" component="h1" className="footer-heading">
              FOLLOW US
            </Typography>
            <Typography variant="h6" component="h1" className="footer-icon">
            <FacebookIcon className="footer-icon" fontSize="large"/>
            <InstagramIcon className="footer-icon" fontSize="large"/>
            </Typography>
          </Grid>
          <Grid item  sm={4} className="footer-grid-6">
            <Typography variant="h6" component="h6" className="footer-heading">
              HOW TO REACH US
            </Typography>

            <Typography variant="h6" component="h6" className="footer-Address">
              info@sol1.eu
              <br />
              +34 971 416 757
            </Typography>
          </Grid>
        </Grid>
        <Grid item  sm={1} className="footer-grid-7"></Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
