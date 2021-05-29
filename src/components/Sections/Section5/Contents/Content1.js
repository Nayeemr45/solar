import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Accordion from "../Accordion_question";

const Content1 = () => {
  const [expanded, setExpanded] = React.useState("panel");
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
              Frequent Questions About{" "}
              <span className="text-color">Solar Energy</span>
            </Typography>
          </Grid>

          <Accordion
            text={"What does it cost for a solar system?"}
            text2={
              "In the past decade the cost of solar has declined by nearly 70% and with financing options it is becoming even more viable to start saving money and benefit from subsidies. With every case being different, we can give you a personalised no obligation offer."
            }
          />
          <Accordion
            text={"Which orientation should the roof have?"}
            text2={
              "This ideal situation is naturally not always feasible due to structural requirements, shading from neighboring buildings, mountains or trees. However, roof areas that are oriented towards the west or east also offer high solar potential, depending on the location , as yield losses of up to 10% must be expected. In addition, solar power generators have the advantage that with a west or east-facing roof they generate a larger proportion of the electricity produced in the morning or in the evening - i.e. precisely at the times when most electricity is needed in households. Only areas facing north remain in the shade all day and are therefore not suitable."
            }
          />
          <Accordion
            text={"What does the unit of measurement kWp mean?"}
            text2={
              "Kilowatt peak - or kWp for short - indicates the peak output of a solar system under reference conditions. The unit is used to make the performance of different solar modules comparable with each other. We will explain the reference conditions for the kWp unit to you in detail."
            }
          />
          <Accordion
            text={"How big does a solar system have to be?"}
            text2={
              "Using the entire roof area is not always necessary. Sol1 tailors the solar system to your electricity consumption and is planned based on your needs.  A solar system with a size of 24.2 m² can produce approx. 4,250 kWh and theoretically covers the average annual consumption of a family of four."
            }
          />
          <Accordion
            text={"What is the lifespan of a solar system?"}
            text2={
              "The service life of a solar system depends on the solar cells used. According to the current state of development, you can expect amorphous solar cells to have a useful life of 20 to 25 years. Depending on the manufacturer, the service life of crystalline solar cells is even stated to be up to 30 years. It is important to know that the performance of the modules decreases over the years. You should expect a reduction of 0.2% to 0.5% per year. This means that after 20 years with the same level of light irradiation, a solar system still achieves 90% of the original electricity yield."
            }
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Content1;
