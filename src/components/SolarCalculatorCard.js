import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../Assets/Css/SolarCalculatorCard.css";

const Cards = ({ data, getUserData }) => {
  const setData = () => {
    getUserData(data);
  };
  return (
    <div>
      
      <Card className="Solarcard" onClick={setData}>
        <CardActionArea>
          <CardContent className="card-content">
            {" "}
            <img src={data.icon} alt={""} className="card-img" />
            <Typography variant="h5" component="h2" className="title">
              {data.text}
            </Typography>
            <Typography variant="h5" component="p" className="sub-title">
              {" "}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Cards;
