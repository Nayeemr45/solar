import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import '../Assets/Css/Solar_Calculator.css'
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function SolarCalculatorForm({ getUserData }) {
  const [data, setdata] = useState();
  const [gender, setGender] = React.useState("male");
  const [firstName, setfirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [zip, setZip] = useState("");
  const [street, setStreet] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeFirstName = (event) => {
    setfirstName(event.target.value);
  };
  const handleChangeSurName = (event) => {
    setSurName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeTelephone = (event) => {
    setTelephone(event.target.value);
  };
  const handleChangeZip = (event) => {
    setZip(event.target.value);
  };
  const handleChangeStreet = (event) => {
    setStreet(event.target.value);
  };
  const handleChangeHouse = (event) => {
    setHouseNo(event.target.value);
  };
  const handleChangeIsAgre = () => {
    setIsAgree(!isAgree);
  };

  const saveData = () => {
    setdata({
      gender: gender,
      firstName: firstName,
      surName: surName,
      email: email,
      telephone: telephone,
      zip: zip,
      street: street,
      houseNo: houseNo,
    });
  };

  useEffect(() => {
    getUserData(data);
  }, [data]);

  const classes = useStyles();
  return (
    <div className="solar-calculator-form-div">
      <form className="solar-calculator-form" noValidate autoComplete="off">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={gender}
          onChange={handleChangeGender}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        <Grid>
        
        <Grid container>
        <TextField
          id="outlined-basic"
          label="First name *"
          variant="outlined"
          value={firstName}
          onChange={handleChangeFirstName}
        />
        <TextField
          id="outlined-basic"
          label="Surname *"
          variant="outlined"
          value={surName}
          onChange={handleChangeSurName}
        />
        </Grid>
        <Grid item sm xs>
        <Grid item sm xs>
        <TextField
          id="outlined-basic"
          label="Email (for contact confirmation) *"
          variant="outlined"
          value={email}
          onChange={handleChangeEmail}
        />
        </Grid>
        <Grid item sm xs>
        <TextField
          id="outlined-basic"
          label="Telephone (for callback) *"
          variant="outlined"
          value={telephone}
          onChange={handleChangeTelephone}
        />
        </Grid>
        <Grid item sm xs>
        <TextField
          id="outlined-basic"
          label="ZIP (potential property) *"
          variant="outlined"
          value={zip}
          onChange={handleChangeZip}
        />
        </Grid>
        <Grid item sm xs>
        <TextField
          id="outlined-basic"
          label="Street *"
          variant="outlined"
          value={street}
          onChange={handleChangeStreet}
        />
        </Grid>
        <Grid item sm xs>
        <TextField
          id="outlined-basic"
          label="House no. *"
          variant="outlined"
          value={houseNo}
          onChange={handleChangeHouse}
        />
        </Grid>
        </Grid>
        </Grid>
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" onClick={handleChangeIsAgre} />}
          label="End"
          labelPlacement="end"
        />
        {isAgree ? (
          <Button variant="contained" color="primary" onClick={saveData}>
            Request Result
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Request Result
          </Button>
        )}
      </form>
    </div>
  );
}

export default SolarCalculatorForm;
