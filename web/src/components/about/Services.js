import React, { useRef } from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import { localize } from "../../utils/helpers"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { className, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
    >
      <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_47_1168)">
        <path d="M2.28839e-06 10H25.7759" stroke="#014FFE" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M16.5141 19.3677L25.7759 10L16.5141 0.632324" stroke="#014FFE" strokeWidth="2" strokeMiterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_47_1168">
          <rect width="27" height="20" fill="white" transform="matrix(-1 0 0 1 27 0)"/>
        </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_47_1245)">
        <path d="M27 10H1.22412" stroke="#014FFE" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M10.4859 19.3677L1.22412 10L10.4859 0.632324" stroke="#014FFE" strokeWidth="2" strokeMiterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_47_1245">
          <rect width="27" height="20" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </div>
  );
}

const Services = ({ data, language }) => {
  const title = localize(data._rawServicesTitle, [language])
  const services = localize(data._rawServices, [language])
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    waitForAnimate: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <StyledServices>
      <div className="heading">
        <BlockContent
          blocks={title}
        />
      </div>
      <div className="slider">
        <Slider {...settings}>
          {services?.map(({ title, description }, i) => (
            <div className="slide" key={`slide-ser-${i}`}>
              <div className="cont">
                <h4>0{i+1}</h4>
                <div className="title">
                  <BlockContent
                    blocks={title}
                  />
                </div>
                <div className="description">
                  <BlockContent
                    blocks={description}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </StyledServices>
  )
}

const StyledServices = styled.div`
  width: 100%;
  height: auto;
  padding: 3.5rem 3.5rem 5rem;
  background-color: var(--white);
  position: relative;

  .heading {
    color: var(--black);
    text-align: center;
    margin-bottom: 2rem;

    p {
      font-size: 1.4rem;
    }

    em {
        color: var(--blue);
    }
  }

  .slider {
    max-width: 80rem;
    margin: 0 auto;

    .slick-dots {
      position: relative;
      margin-top: 1rem;

      li.slick-active button:before {
        color: var(--blue);
      }
    }

    .slick-next:before, .slick-prev:before {
      display: none;
    }

    .slick-arrow {
      transform: translateY(-2rem);
    }

    .slick-disabled {
      opacity: 0;
      pointer-events: none;
    }
  }

  .slide {
    text-align: center;
    min-height: 17rem;
    outline: none;
    .cont {
      height: 100%;
      min-height: 17rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h4 {
      font-family: var(--serif);
      font-style: italic;
      color: var(--blue);
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .title {
      font-size: 2.5rem;
      line-height: 1;
      margin-bottom: 1.5rem;
    }

    .description {
      font-size: 1rem;
      color: #6D6E71;
    }
  }
`

export default Services
