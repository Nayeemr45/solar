import React from 'react';
import {Avatar, Box, Grid, Typography, Button, ListItemAvatar} from '@material-ui/core';
import '../../Assets/Css/Section_4.css';
import Mask_Group from '../../Assets/Images/Mask Group 7.png';
import Icon1 from '../../Assets/Icons/Section-3-icon1.png';
import Icon2 from '../../Assets/Icons/Section-3-icon2.png';
import Icon3 from '../../Assets/Icons/Section-3-icon3.png';
import Icon4 from '../../Assets/Icons/Section-3-icon4.png';
import Icon5 from '../../Assets/Icons/icon4.svg';
import Number_Icon1 from '../../Assets/Icons/Number-icon1.png';
import Number_Icon2 from '../../Assets/Icons/Number-icon2.png';
import Number_Icon3 from '../../Assets/Icons/Number-icon3.png';
import Number_Icon4 from '../../Assets/Icons/Number-icon4.png';
import Section4Cards from './Cards/Section4Cards';
const Section4 = () => {
  return (
    <Box className="section-4">
      <Grid container className="sectoin-4-grid">
        <Grid item xs={1} sm={3}></Grid>
        <Grid item xs={10} sm={6}>
          <div className="sectoin-4-heading-div">
            <Typography variant="h4" gutterBottom className="sectoin-4-heading">
              Quite Simply To Your{' '}
              <span style={{color: '#FFBA00'}}>Own Solar Power</span>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1} sm={3}></Grid>
      </Grid>
      <Grid container className="sectoin-4-paragraph-grid">
        <Grid item xs></Grid>
        <Grid item xs={8}>
          <div className="sectoin-4-paragraph-div">
            <Typography
              variant="h6"
              gutterBottom
              className="sectoin-4-paragraph"
            >
              Around 1.7 million solar systems have already been installed on
              private house roofs in Germany. But that also means that there are
              still around 40 million households that do not use solar energy.
              Does your roof also have the potential for a solar system? And
              what costs would you have to pay if you wanted to produce solar
              power yourself?
            </Typography>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <Grid container className="sectoin-4-paragraph-2-div">
        <Grid item xs></Grid>
        <Grid item xs={8}>
          <div className="sectoin-4-paragraph-2-div">
            <Typography
              variant="h6"
              gutterBottom
              className="sectoin-4-paragraph-2"
            >
              Here you will receive an analysis of your roof and a non-binding
              offer:
            </Typography>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <div className="offer-div">
        <Grid container>
          <Grid item xs={2} sm={2}></Grid>
          <Grid item container xs sm className="sectoin-4-grid-2">
          
            <img src={Mask_Group} alt={''} className="sectoin-4-img"/>
          
            <img src={Mask_Group} alt={''} className="sectoin-4-img"/>
          
            <img src={Mask_Group} alt={''} className="sectoin-4-img"/>
         
          </Grid>

          <Grid item xs={2} sm={2}></Grid>
        </Grid>
      </div>
      <div>
        <Grid container className="sectoin-4-grid-3">
          <Grid item xs={2} sm={2} className="sectoin-4-grid-4"></Grid>
          <Grid item xs={8} sm={2} className="sectoin-4-grid-5">
            <Section4Cards
              title={'Unverbindliches Angebot anfordern'}
              subtitle={'Mit unserem solarrenchner'}
              icon={Icon1} Number_Icon={Number_Icon1}
            />
          </Grid>
          <Grid item xs={8} sm={2} className="sectoin-4-grid-6">
            <Section4Cards
              title={'Beratung'}
              subtitle={'Durch lokalen E.on solarexperten'}
              icon={Icon2} Number_Icon={Number_Icon2}
            />
          </Grid>
          <Grid item xs={8} sm={2} className="sectoin-4-grid-7">
            <Section4Cards
              title={'Installation'}
              subtitle={'Durch lokalen E.on partner'}
              icon={Icon3} Number_Icon={Number_Icon3}
            />
          </Grid>
          <Grid item xs={8} sm={2} className="sectoin-4-grid-8">
            <Section4Cards
              title={'Solarstrom mutzen'}
              subtitle={'Sparen und profitieren'}
              icon={Icon4} Number_Icon={Number_Icon4}
            />
          </Grid>
          <Grid item xs={2} sm={2} className="sectoin-4-grid-9"></Grid>
        </Grid>
      </div>
      <div className="offer-button-div">
      <Button className="offer-button">Request an offer free of charge 
                    <ListItemAvatar className="avatar">
                      <Avatar src={Icon5} className="icon"></Avatar>
                    </ListItemAvatar>
                    </Button>
      </div>
    </Box>
  );
};

export default Section4;
