import React from 'react'
import './index.css'
import { useState, useEffect } from 'react';
import SliderButton from '../SliderButton';

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const texts = ['All', 'Dramas', 'Comedy', 'Music', 'Live', 'Dubbing', 'Dramedy', 'Thrillers', 'News', 'Bollywood', 'Live', 'Game', 'Cricket', 'Patlu', 'films', 'Cars', 'Recent', 'Bike', 'Tennis']
  const handlePrev = () => {
    const index = (currentIndex - 1 + texts.length) % texts.length;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = (currentIndex + 1) % texts.length;
    setCurrentIndex(index);
  };


  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 1 && width <= 320) {
        setItemsToShow(2);
      } else if (width > 321 && width <= 425) {
        setItemsToShow(3);
      } else if (width > 426 && width <= 768) {
        setItemsToShow(4);
      } else if (width > 769 && width <= 1024) {
        setItemsToShow(7);
      } else if (width > 1025 && width <= 1440) {
        setItemsToShow(9);
      } else if (width > 1441) {
        setItemsToShow(11);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // if(window.innerWidth > 1 && window.innerWidth <= 320){
  //   itemsToShow = 2;
  // }
  // if(window.innerWidth > 321 && window.innerWidth <= 425){
  //   itemsToShow = 3;
  // }
  // if(window.innerWidth > 426 && window.innerWidth <= 768){
  //   itemsToShow = 4;
  // }
  // if(window.innerWidth > 769 && window.innerWidth <= 1024){
  //   itemsToShow = 7;
  // }
  // if(window.innerWidth > 1025 && window.innerWidth <= 1440){
  //   itemsToShow = 9;
  // }
  // if(window.innerWidth > 1441){
  //   itemsToShow = 11;
  // }


  const visibleItems = texts.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className='SliderContainer'>

      {currentIndex === 0 || <button className='sliderBtnStyling sliderBtnStylingPrev' onClick={handlePrev}>&lt;</button>}
      <div className='sliderContent'>
        {visibleItems.map((item, index) => {
          return <SliderButton className='textItem' items={item} />
        })}
      </div>
      {currentIndex === texts.length - itemsToShow || <button className='sliderBtnStyling sliderBtnStylingNext' onClick={handleNext}>&gt;</button>}

    </div>
  )
}
