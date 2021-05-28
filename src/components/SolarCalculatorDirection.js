import { Typography } from '@material-ui/core';
import React from 'react';
import '../Assets/Css/Solar_Calculator_direction.css'
const SolarCalculatorDirection = ({data,getUserData}) => {

  const setData = (directionData) => {
   // getUserData(data[index]);
    getUserData(directionData);
  };

  return (
    <div className="direction-div">
    <Typography className="direction-N">N</Typography>
    <Typography className="direction-W">W</Typography>
    <Typography className="direction-E">E</Typography>
    <Typography className="direction-S">S</Typography>
      <span className="direction-span-N direction" onClick={()=>{setData(data[0])}}>{data[0].icon}</span>
      <span className="direction-span-NW direction" onClick={()=>{setData(data[1])}}>{data[1].icon}</span>
      <span className="direction-span-NE direction" onClick={()=>{setData(data[2])}}>{data[2].icon}</span>
      <span className="direction-span-E direction" onClick={()=>{setData(data[3])}}>{data[3].icon}</span>
      <span className="direction-span-SE direction" onClick={()=>{setData(data[4])}}>{data[4].icon}</span>
      <span className="direction-span-S direction" onClick={()=>{setData(data[5])}}>{data[5].icon}</span>
      <span className="direction-span-SW direction" onClick={()=>{setData(data[6])}}>{data[6].icon}</span>
      <span className="direction-span-W direction" onClick={()=>{setData(data[7])}}>{data[7].icon}</span>
      {/* <img src={data[0].icon} alt="" onClick={()=>{setData(data[0])}}/>
      <img src={data[1].icon} alt="" onClick={()=>{setData(data[1])}}/>
      <img src={data[2].icon} alt="" onClick={()=>{setData(data[2])}}/>
      <img src={data[3].icon} alt="" onClick={()=>{setData(data[3])}}/>
      <img src={data[4].icon} alt="" onClick={()=>{setData(data[4])}}/>
      <img src={data[5].icon} alt="" onClick={()=>{setData(data[5])}}/>
      <img src={data[6].icon} alt="" onClick={()=>{setData(data[6])}}/>
      <img src={data[7].icon} alt="" onClick={()=>{setData(data[7])}}/> */}
    </div>
  )
}

export default SolarCalculatorDirection

