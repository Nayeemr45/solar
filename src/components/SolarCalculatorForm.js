import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function SolarCalculatorForm() {
  const classes = useStyles();
  return (
    <div className="solar-calculator-form">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="First name *" variant="outlined" />
          <TextField id="outlined-basic" label="Surname *" variant="outlined" />
          <TextField id="outlined-basic" label="Email (for contact confirmation) *" variant="outlined" />
          <TextField id="outlined-basic" label="Telephone (for callback) *" variant="outlined" />
          <TextField id="outlined-basic" label="ZIP (potential property) *" variant="outlined" />
          <TextField id="outlined-basic" label="Street *" variant="outlined" />
          <TextField id="outlined-basic" label="House no. *" variant="outlined" />
        </form>
    </div>
  );
}

export default SolarCalculatorForm;
