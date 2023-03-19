import React, { useRef, useEffect } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const SliderLanding = ({ slides, title }) => {
  const sliderRef = useRef(null);

  const settings = {
    centerPadding: "0",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    waitForAnimate: true,
    speed: 500,
    arrows: false,
    ref: sliderRef,
  };

  const handleWheel = (e) => {
    let blocked = false;
    let blockTimeout = null;
    let prevDeltaY = 0;

    let deltaY = e?.originalEvent?.deltaY;
    e.preventDefault();
    e.stopPropagation();

    clearTimeout(blockTimeout);
    blockTimeout = setTimeout(function(){
      blocked = false;
    }, 100);

    if (deltaY > 0 && deltaY > prevDeltaY || deltaY < 0 && deltaY < prevDeltaY || !blocked) {
      blocked = true;
      prevDeltaY = deltaY;

      if (deltaY > 0) {
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleArrows);

    return () => {
      window.removeEventListener('keydown', handleArrows);
    };
  }, []);

  const handleArrows = (e) => {
    const
      LEFT = 37,
      RIGHT = 39;

    if (e.keyCode === LEFT) {
      sliderRef.current.slickPrev();
    }
    if (e.keyCode === RIGHT) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div onKeyDown={handleArrows} onWheel={handleWheel}>
      <Slider {...settings}>
        {slides?.map((slide) => (
          <GatsbyImage
            key={slide._key}
            style={{ height: "100%", width: "100%" }}
            image={getImage(slide.asset)}
            alt={`The Branding People | ${title}`}
          />
        ))}
      </Slider>
    </div>
  )
}

export default SliderLanding
