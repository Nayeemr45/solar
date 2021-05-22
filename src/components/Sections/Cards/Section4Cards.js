import React from 'react';
import Card from '@material-ui/core/Card';
import '../../../Assets/Css/Section_4.css';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';

const Section_4_Cards = ({title, subtitle, icon, Number_Icon}) => {
  return (
    <div>
      <Card className="section-4-card">
        <CardContent className="section-4-card-content">
          <Grid>
            <Grid style={{display: 'grid', justifyContent:'center'}}>
              <img src={icon} className="section-4-icon-avatar" alt={''} />
            </Grid>
            <Grid style={{display: 'grid', justifyContent:'center', paddingTop:'15px'}}>
              <img
                src={Number_Icon}
                className="section-4-number-icon-avatar"
                alt={''}
              />
            </Grid>
          </Grid>
          <Typography
            variant="h5"
            component="h2"
            className="section-4-card-title"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className="section-4-card-sub-title"
          >
            {subtitle}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section_4_Cards;
