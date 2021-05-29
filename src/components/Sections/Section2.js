import React from "react";
import { Box, Grid } from "@material-ui/core";
import icon1 from "../../Assets/Icons/icon5.svg";
import "../../Assets/Css/Section_2.css";
import Cards from "./Cards/Cards";

const Section2 = () => {
  return (
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
          <Cards
            title="Solar Solution"
            subtitle="Solar Products"
            icon={icon1}
          />
        </Grid>
        <Grid item sm xs className="section-2-grid-3">
          <Cards
            title=" Finance Solar System"
            subtitle="Inexpensive to your own solar system"
            icon={icon1}
          />
        </Grid>
        <Grid item sm xs className="section-2-grid-4">
          <Cards
            title="Promotion of solar system"
            subtitle="Find out more about funding"
            icon={icon1}
          />
        </Grid>
        <Grid item xs={1} className="section-2-grid-5"></Grid>
      </Grid>
    </Box>
  );
};

export default Section2;
