import React, {useState, useEffect} from 'react';
import SolarCalculatorCard from '../components/SolarCalculatorCard';
import SolarCalculatorForm from '../components/SolarCalculatorForm';
import SolarCalculatorDirection from '../components/SolarCalculatorDirection';
import {useHistory} from 'react-router-dom';
import {
  SolarCalculatorData,
  SolarCalculatorQuestion,
} from '../Assets/data/SolarCalculatorData';
import '../Assets/Css/Solar_Calculator.css';
import {Box, Grid} from '@material-ui/core';
import {People} from '@material-ui/icons';
import * as api from '../api/index.js';

function SolarCalculator() {
  const [SolarData, setSolarData] = useState(SolarCalculatorData);
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(0);

  const getUserData = (data) => {
    data ? setUserData(userData.concat(data)) : console.log('');
    setIndex(index + 1);
  };

  const history = useHistory();
  const goHome = () => history.push('/');

  const sentData = async (finalUserDataJSON) => {
    const {data} = await api.sentData(finalUserDataJSON);
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

      let finalUserDataJSON = userData ? JSON.stringify(finalUserData) : '';
      sentData(finalUserDataJSON);

      /* fetch('http://localhost:8000/contact', {
        method: 'POST',
        body: finalUserDataJSON,
      })
        .then(function (response) {
          console.log(response);
          goHome();
        })
        .then((data) => {
          console.log('Success:', data);
          goHome();
        })
        .catch((error) => {
          console.error('Error:', error);
        }); */
    }
  }, [userData]);

  return (
    <div>
      <p className="solar-question">{SolarCalculatorQuestion[index]}</p>
      <Grid container className="solar-cal-grid">
        <Grid item sm={1}></Grid>
        <Grid item sm>
          <div
            // className="solar-calculator"
            className={
              index < 2
                ? 'solar-calculator'
                : index < 3
                ? 'solar-calculator2'
                : index < 4
                ? 'solar-calculator3'
                : index < 5
                ? 'solar-calculator4'
                : index == 5
                ? 'solar-calculator5'
                : 'solar-calculator-exceptionTwo'
            }
          >
            {index < 5 ? (
              SolarData[index].map((itemData) => (
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  
                >
                  <Box className="solar-calculator-box" key={itemData.id}>
                    <Grid item xs={1} ></Grid>
                    <Grid item sm xs>
                      <SolarCalculatorCard
                        data={itemData}
                        getUserData={getUserData}
                        className="solar-calculator"
                      />
                    </Grid>
                    <Grid item xs={1} ></Grid>
                  </Box>
                </Grid>
              ))
            ) : index == 5 ? (
              <SolarCalculatorDirection
                data={SolarData[index]}
                getUserData={getUserData}
              />
            ) : (
              <SolarCalculatorForm
                getUserData={getUserData}
                className="solarCalculator-form"
              />
            )}
          </div>
        </Grid>
        <Grid item sm={1}></Grid>
      </Grid>
    </div>
  );
}

export default SolarCalculator;
