import React, { useState, useEffect } from "react";
import SolarCalculatorCard from "../components/SolarCalculatorCard";
import SolarCalculatorForm from "../components/SolarCalculatorForm";
import SolarCalculatorDirection from "../components/SolarCalculatorDirection";
import {
  SolarCalculatorData,
  SolarCalculatorQuestion,
} from "../Assets/data/SolarCalculatorData";
import "../Assets/Css/Solar_Calculator.css";
import { Box, Grid } from "@material-ui/core";
import { People } from "@material-ui/icons";

function SolarCalculator() {
  const [SolarData, setSolarData] = useState(SolarCalculatorData);
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(0);

  const getUserData = (data) => {
    data ? setUserData(userData.concat(data)) : console.log("");
    setIndex(index + 1);
  };

  useEffect(() => {
    if (index > 6) {
      let finalUserData = {
        People: userData[0].text,
        eConsumption: userData[1].text,
        time: userData[2].text,
        slope: userData[3].text,
        roofArea: userData[4].text,
        direction: userData[5].text,
        gender: userData[6].gender,
        email: userData[6].email,
        firstName: userData[6].firstName,
        surName: userData[6].surName,
        houseNo: userData[6].houseNo,
        street: userData[6].street,
        telephone: userData[6].telephone,
        zip: userData[6].zip,
      };
      let finalUserDataJSON = userData ? JSON.stringify(finalUserData) : "";
      console.log(finalUserDataJSON);
    }
  }, [userData]);

  return (
    <div>
      <p className="solar-question">{SolarCalculatorQuestion[index]}</p>
      <div
        className={
          index < 5
            ? "solar-calculator"
            : index < 6
            ? "solar-calculator-exceptionOne"
            : "solar-calculator-exceptionTwo"
        }
      >
        {index < 5 ? (
          SolarData[index].map((itemData) => (
            <Box className="solar-calculator-box" key={itemData.id}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="section-2-grid"
              >
                <Grid item xs={1} className="section-2-grid-1"></Grid>
                <Grid item sm xs className="section-2-grid-2">
                  <SolarCalculatorCard
                    data={itemData}
                    getUserData={getUserData}
                    className="solar-calculator"
                  />
                </Grid>
                <Grid item xs={1} className="section-2-grid-3"></Grid>
              </Grid>
            </Box>
          ))
        ) : index == 5 ? (
          <SolarCalculatorDirection
            data={SolarData[index]}
            getUserData={getUserData}
          />
        ) : (
          <SolarCalculatorForm getUserData={getUserData} />
        )}
      </div>
    </div>
  );
}

export default SolarCalculator;
