import React from 'react';
import '../assets/css/LeftSide.css'

import temp from '../assets/icons/temp.svg'
import humidity from '../assets/icons/humidity.svg'
import bad from '../assets/icons/bad.svg'
import moderate from '../assets/icons/moderate.svg'
import good from '../assets/icons/good.svg'
import error from '../assets/icons/error.svg'
import scull from '../assets/icons/scull.svg'
import pressure from '../assets/icons/pressure.svg' 
import "../assets/forecast/open-weather-icons.css"

export default function LeftSide(props) {

  const polutionSVG = {
    bad,moderate,good,error,scull
  }

  return (
    <div className="leftside">
      <div className="leftside__sensor">
        <div className="leftside__sensor--temp">
          <img src={temp} alt="temp" />
          <p>{props.sensorData.temp}&deg;</p>
        </div>
        <div className="leftside__sensor--humidity">
          <img src={humidity} alt="humidity" />
          <p>{props.sensorData.humidity}%</p>
        </div>
      </div>
      <div className="leftside__forecast">
        <div className="leftside__forecastleft">
        <p className="leftside__forecast--name">NO POLU:</p>
        <div className="leftside__forecast--temp">
          <img src={temp} alt="temp" />
          <p>{props.forecast.current.temp}&deg;</p>
        </div>
        <div className="leftside__forecast--humidity">
          <img src={humidity} alt="humidity" />
          <p>{props.forecast.current.humidity}%</p>
        </div>
        <div className="leftside__forecast--humidity">
          <img src={pressure} alt="pressure" />
          <p>{props.forecast.current.pressure}hPa</p>
        </div>
       
        </div>
        <div className="leftside__forecast--icon">
        <i className={`leftiside__icon owi owi-${props.forecast.current.icon}`} />  
        </div>
        
      </div>
      <div className="leftside__forecastfuture">
      <img src={polutionSVG[props.forecast.polution]} alt={props.forecast.polution} />
        {props.forecast.hourly.map((hour,index) => {
          return (
            <div key={index} className="lefside_forecasthour">
              <i className={`leftiside__icon owi owi-${hour.icon}`} />
              <p>{hour.date}</p>
              <p>{hour.temp}<sup>o</sup>C</p>
            </div>
          )
        })}
      </div>  
    </div>
  )
}
