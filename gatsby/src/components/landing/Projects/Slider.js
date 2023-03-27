import React, { useRef, useEffect } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      className={className}
      onClick={onClick}
      src="/Right_arrow.png"
      alt="Next slide"
    />
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <img
      className={className}
      onClick={onClick}
      src="/Left_arrow.png"
      alt="Previous slide"
    />
  );
}

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
    arrows: true,
    ref: sliderRef,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
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
    <div onKeyDown={handleArrows}>
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
