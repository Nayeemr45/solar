import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../../../Assets/Css/Section_2.css';
import  Icon from '../../../Assets/Icons/Icon ionic-md-arrow-round-back.svg';
import { Avatar } from '@material-ui/core';


const Cards = ({title , subtitle, icon}) => {

    return (
        <div>
            <Card className="card">
          <CardActionArea>
          <CardContent className="card-content">
          <img src={icon} className="icon-avatar" alt={''}/>
              <Typography variant="h5" component="h2" className="title">
                {title}
              </Typography>
              <Typography variant="h5" component="p" className="sub-title">
                {subtitle}
{/*                 <Avatar src={Icon} className="icon"></Avatar>
 */}              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
    )
}

export default Cards
