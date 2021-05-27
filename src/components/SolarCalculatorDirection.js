import React from 'react';

const SolarCalculatorDirection = ({data,getUserData}) => {

  const setData = (directionData) => {
   // getUserData(data[index]);
    getUserData(directionData);
  };

  return (
    <div>
      {data[0].icon}
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

