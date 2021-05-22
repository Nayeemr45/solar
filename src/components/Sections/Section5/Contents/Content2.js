import React from 'react';
import {Typography, Grid, Box} from '@material-ui/core';
import image from '../../../../Assets/Images/eon-energie-einfach-erklaert-solarenergie.png';
import Number_icon_1 from '../../../../Assets/Icons/Number-icon-1.png';
import Number_icon_2 from '../../../../Assets/Icons/Number-icon-2.png';
import Number_icon_3 from '../../../../Assets/Icons/Number-icon-3.png';
import Number_icon_4 from '../../../../Assets/Icons/Number-icon-4.png';
import Number_icon_5 from '../../../../Assets/Icons/Number-icon-5.png';
import '../../../../Assets/Css/Section5.css';
import dot from '../../../../Assets/Icons/dot.svg';
import Accordion from '../Accordion_question';

const Content2 = () => {
  return (
    <div className="content-2">
      <Grid container className="content-2-grid">
        <Grid item xs={1} sm={1} className="content-2-grid-item-1"></Grid>
        <Grid item xs={10} sm={10} className="content-2-grid-item-2">
          <Typography variant="h4" gutterBottom className="content-2-heading">
            How Does A{' '}
            <span className="text-color">Solar System Work?</span>
          </Typography>
          <Typography variant="h4" gutterBottom className="content-2-paragraph">
            Generating your own electricity with the help of the sun sounds
            tempting. But how does a photovoltaic system work? Solar or
            photovoltaic modules consist of a large number of coupled solar
            cells that convert solar energy into electricity. As a rule, solar
            cells consist of the semiconductor silicon , an inexpensive material
            that is also extremely suitable for solar systems.
            <br />
            <br />
            Sunlight consists of small particles of light called photons . If
            these photons hit the solar system in the sunshine , they trigger a
            movement of the electrons within the solar cells. When electrons
            move, electricity flows. An inverter connected to the modules
            converts this direct current into alternating current, which can be
            used in the house or fed into the power grid.
          </Typography>
          <Box className="content-2-box-1">
            <Typography
              variant="h4"
              gutterBottom
              className="content-2-heading-2"
            >
              Already Knew?
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              className="content-2-paragraph-2"
            >
              In practice, solar modules cannot convert all of the solar energy
              into electricity. How much exactly depends on the respective
              efficiency of the solar cells and the crystal structure of the
              silicon material used . In recent years solar systems have become
              more and more efficient and at the same time cheaper. Modern
              systems therefore produce significantly more solar power than
              older models in the same area - and the development is far from
              over.{' '}
            </Typography>
          </Box>
          <Box className="content-2-box-2">
            <Grid container className="content-2-box-2-grid">
              <Grid item sm={6} xs={12}>
                <img src={image} alt={''} className="content-2-img" />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Box className="contenet-2-box-2-right">
                <Accordion
            text={'Solar cells'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
                <Accordion
            text={'Solar modules'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
                <Accordion
            text={'Inverter'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="content-2-box-3">
            <Typography className="content-2-list-2">
              <span className="content-2-list-2-icon">
                <img
                  src={Number_icon_1}
                  alt={Number_icon_1}
                  className="content-2-box-3-img"
                />
              </span>
              Solar modules
            </Typography>
            <Typography className="content-2-list-2">
              <span className="content-2-list-2-icon">
                <img
                  src={Number_icon_2}
                  alt={Number_icon_2}
                  className="content-2-box-3-img"
                />
              </span>
              Solar cell
            </Typography>
            <Typography className="content-2-list-2">
              <span className="content-2-list-2-icon">
                <img
                  src={Number_icon_3}
                  alt={Number_icon_3}
                  className="content-2-box-3-img"
                />
              </span>
              Negative pole
            </Typography>
            <Typography className="content-2-list-2">
              <span className="content-2-list-2-icon">
                <img
                  src={Number_icon_4}
                  alt={Number_icon_4}
                  className="content-2-box-3-img"
                />
              </span>
              Positive pole
            </Typography>
            <Typography className="content-2-list-2">
              <span className="content-2-list-2-icon">
                <img
                  src={Number_icon_5}
                  alt={Number_icon_5}
                  className="content-2-box-3-img"
                />
              </span>
              End product electricity
            </Typography>
          </Box>
          <Box className="content-2-box-4">
            <Grid>
              <Grid item sm={12}>
                <Typography className="content-2-box-4-heading">
                  <span className="text-color">
                    Excursus: Solar Thermal Energy - Heat From The Sun's Rays
                  </span>
                </Typography>
              </Grid>
              <Grid item sm={10}>
                <Typography className="content-2-box-4-paragraph">
                  Solar energy can also be used to heat or heat water . The
                  devices that are required for this are called solar collectors
                  . They look very similar to the photovoltaic systems that
                  generate electricity. Solar collectors collect the heat from
                  the sun's rays so that it can then be used for heating or hot
                  showers .{' '}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} className="content-2-grid-item-3"></Grid>
      </Grid>
    </div>
  );
};

export default Content2;
