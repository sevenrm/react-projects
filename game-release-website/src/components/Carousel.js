import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  overflow: hidden;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselItem = styled.div`
  max-width: 100%;
  box-sizing: border-box;

  img {
    width: 100%;
    height: auto;
    max-height: 170px;
    border-radius: 8px;
  }
`;

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <CarouselContainer>
      <Slider {...settings}>
        {images.map((image, index) => {
          <CarouselItem key={index}>
            <img src={image} alt={`Game ${index + 1}`} />
          </CarouselItem>;
        })}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
