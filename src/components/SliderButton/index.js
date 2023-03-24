import React from 'react'
import './index.css'

export default function SliderButton(props) {
  return (
    <div>
      <button className='sliderButtonStyling'>{props.items}</button>
    </div>
  )
}
