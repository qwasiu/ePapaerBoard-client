import React from 'react'
import RectangleDown from './RectangleDown'
import RectangleUp from './RectangleUp'

export default function RightSide(props) {

  return (
    <div className='rightside'>
        <RectangleUp current={props.forecast.current} moonIcon={props.moonIcon}/>
        <RectangleDown dznData={props.dznData}/>
    </div>
  )
}
  