import React, { useState, useEffect } from "react";
import SolarCalculatorCard from "../components/SolarCalculatorCard";
import SolarCalculatorForm from "../components/SolarCalculatorForm";
import SolarCalculatorDirection from "../components/SolarCalculatorDirection";
import { SolarCalculatorData } from "../Assets/data/SolarCalculatorData";
import "../Assets/Css/Solar_Calculator.css";
import { Box, Grid } from "@material-ui/core";

function SolarCalculator() {
  const [SolarData, setSolarData] = useState(SolarCalculatorData);
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(0);

  const getUserData = (data) => {
    setUserData(userData.concat(data));
    setIndex(index + 1);
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="solar-calculator">
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
        <SolarCalculatorDirection data={SolarData[index]} getUserData={getUserData}/>
      ) : (
        <SolarCalculatorForm   getUserData={getUserData}/>
      )}
    </div>
  );
}

export default SolarCalculator;
