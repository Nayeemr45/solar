import React from 'react';
import {Typography, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MinimizeIcon from '@material-ui/icons/Minimize';
import '../../../Assets/Css/Section5.css';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Accordion_question = ({ text ,text2 }) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className="content-1-accordion"
      >
        <AccordionSummary
          expandIcon={expanded === 'panel1' ? <MinimizeIcon /> : <AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <span className="dot">&#8226;</span>
          <Typography className="content-1-list"> {text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-1-list-expand">
            {text2}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordion_question;
