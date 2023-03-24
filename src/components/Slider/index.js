import React from 'react'
import './index.css'
import { useState } from 'react';
import SliderButton from '../SliderButton';

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const texts = ['All','Dramas','Comedy','Music','Live','Dubbing','Dramedy','Thrillers', 'News', 'Bollywood', 'Live', 'Game', 'Cricket', 'Patlu', 'films', 'Cars', 'Recent', 'Bike', 'Tennis']
    const handlePrev = () => {
        const index = (currentIndex - 1 + texts.length) % texts.length;
        setCurrentIndex(index);
      };
    
      const handleNext = () => {
        const index = (currentIndex + 1) % texts.length;
        setCurrentIndex(index);
      };
      let itemsToShow;
      if(window.innerWidth >= 320 && window.innerWidth <= 600){
        itemsToShow = 4
      }
      if(window.innerWidth >= 768 && window.innerWidth <= 992){
        itemsToShow = 7
      }
      if(window.innerWidth >= 1200 && window.innerWidth <=1500){
        itemsToShow = 11
      }


      const visibleItems = texts.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className='SliderContainer'>
        
       {currentIndex === 0 || <button className='sliderBtnStyling sliderBtnStylingPrev' onClick={handlePrev}>&lt;</button>}
       <div className='sliderContent'>
        {visibleItems.map((item, index)=>{
            return <SliderButton className='textItem' items={item} />
        })}
        </div>
        {currentIndex === texts.length-itemsToShow || <button className='sliderBtnStyling sliderBtnStylingNext' onClick={handleNext}>&gt;</button>}
        
    </div>
  )
}
