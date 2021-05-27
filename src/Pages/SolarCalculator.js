import React, { useState, useEffect } from "react";
import SolarCalculatorCard from "../components/SolarCalculatorCard";
import SolarCalculatorForm from "../components/SolarCalculatorForm";
import { SolarCalculatorData } from "../Assets/data/SolarCalculatorData";

function SolarCalculator() {
  const [SolarData, setSolarData] = useState(SolarCalculatorData);
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(0);

  const getUserData = (data) => {
    setUserData(userData.concat(data));
    setIndex(index + 1);
    // if (index < SolarCalculatorData.length - 1) {
    //   setIndex(index + 1);
    // }
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      {index < 6 ?
      SolarData[index].map((itemData) => (
        <SolarCalculatorCard data={itemData} getUserData={getUserData} />
      )) : <SolarCalculatorForm/>
      }
    </>
  );
}

export default SolarCalculator;
