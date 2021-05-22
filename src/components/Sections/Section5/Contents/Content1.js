import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import Accordion from '../Accordion_question';

const Content1 = () => {
  const [expanded, setExpanded] = React.useState('panel');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="content-1">
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs>
          <Grid item xs className="content-1-grid">
            <Typography variant="h4" gutterBottom className="content-1-heading">
              Frequent Questions About{' '}
              <span className="text-color">Solar Energy</span>
            </Typography>
          </Grid>

          <Accordion
            text={'What does a solar system cost?'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
          <Accordion
            text={'Which orientation should the roof have?'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
          <Accordion
            text={'What does the unit of messurement kWp mean?'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
          <Accordion
            text={
              'How do mono, polycrystalline and amorphous solar modules deffer?'
            }
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
          <Accordion
            text={'What is the efficiency of a solar module?'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
          <Accordion
            text={'How big does a solar system have to be?'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
          <Accordion
            text={'Is it worth buying a solar system?'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
          <Accordion
            text={'What is the lifespan of a solar system?'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
          <Accordion
            text={'Who installs the E.on solar system?'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
          <Accordion
            text={'What is the average PV yield from a solar system?'}
            text2={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
            }
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Content1;
