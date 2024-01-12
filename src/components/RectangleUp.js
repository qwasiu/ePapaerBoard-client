import React from 'react'
import getNameDate from '../modules/NameDay.js'
import '../assets/css/RectangleUp.css'
import moonImage0 from '../assets/moon/0.png'
import moonImage1 from '../assets/moon/1.png'
import moonImage2 from '../assets/moon/2.png'
import moonImage3 from '../assets/moon/3.png'
import moonImage4 from '../assets/moon/4.png'
import moonImage5 from '../assets/moon/5.png'
import moonImage6 from '../assets/moon/6.png'
import moonImage7 from '../assets/moon/7.png'
import moonImage8 from '../assets/moon/8.png'

const date = new Date();

const monthString = date.toLocaleDateString('pl-PL', { month: 'long' });
const dayString = date.toLocaleDateString('pl-PL', { day: 'numeric' });
const weekDayString = date.toLocaleDateString('pl-PL', { weekday: 'long' });
 
const moonImages = [moonImage0,moonImage1,moonImage2,moonImage3,moonImage4,moonImage5,moonImage6,moonImage7,moonImage8]

export default function RectangleUp(props) {



  return (
    <div className="rectangleup"> 
      <div className="rectangleup-weekday">{weekDayString}</div>
      <div className="rectangleup-smalltime">
        <div className='rectangleup-month'>{monthString}</div>
        <div className="rectangleup-daynumber">{dayString}</div>
      </div>
    <div className="rectangleup-nameDay">
      <div>{
      getNameDate(new Date())}
      </div>
 
    </div>

    <div className="rectangleup-astro">
      <div className="rectangleup-astrodata">
        <div>WSCHÓD</div>
        <div>{props.current.sunrise}</div>
        <div>ZACHÓD</div>
        <div>{props.current.sunset}</div>
      </div> 
      <div className="rectangleup-astromoon">
        <img className="rectangleup-moonimg" src={moonImages[props.moonIcon]} alt="moon"/>
      </div>
    </div>
    </div>
  )
}
