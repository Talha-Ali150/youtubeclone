import React from 'react'
import './index.css'
import { useState } from 'react';

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const texts = ['All','Live','Music','Cinema','Thriller','Comedy','Cricket','News',]
    const handlePrev = () => {
        const index = (currentIndex - 1 + texts.length) % texts.length;
        setCurrentIndex(index);
      };
    
      const handleNext = () => {
        const index = (currentIndex + 1) % texts.length;
        setCurrentIndex(index);
      };
      let itemsToShow =4

      const visibleItems = texts.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className='SliderContainer'>
        
       {currentIndex === 0 || <button onClick={handlePrev}>&lt;</button>}
        {visibleItems.map((item, index)=>{
            return <p className='textItem active'>{item}</p>
        })}
        {currentIndex === texts.length-itemsToShow || <button onClick={handleNext}>&gt;</button>}
        
    </div>
  )
}
