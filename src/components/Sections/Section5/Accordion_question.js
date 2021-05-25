import React from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import MinimizeIcon from '@material-ui/icons/Minimize';
import '../../../Assets/Css/Section5.css';
import AddIcon from '@material-ui/icons/Add';

const Accordion_question = ({text, text2}) => {
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
          {/*         <span className="dot">&#8226;</span>
           */}
          {/*   <span className="dot"><img src={dot} alt={''}/></span>
           */}
          <span className="dot">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
            >
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="5"
                cy="5"
                r="5"
                fill="var(--color)"
              />
            </svg>
          </span>
          <Typography className="content-1-list"> {text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="content-1-list-expand">{text2}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordion_question;
