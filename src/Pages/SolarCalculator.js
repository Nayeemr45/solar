import React, { useState, useEffect } from "react";
import SolarCalculatorCard from "../components/SolarCalculatorCard";
import SolarCalculatorForm from "../components/SolarCalculatorForm";
import { SolarCalculatorData } from "../Assets/data/SolarCalculatorData";

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
    <>
      {index < 6 ? (
        SolarData[index].map((itemData) => (
          <Box className="section-2">
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
                  key={itemData.id}
                  data={itemData}
                  getUserData={getUserData}
                  className="solar-calculator"
                />
              </Grid>
              <Grid item xs={1} className="section-2-grid-3"></Grid>
            </Grid>
          </Box>
        ))
      ) : (
        <SolarCalculatorForm />
      )}
    </>
  );
}

export default SolarCalculator;
