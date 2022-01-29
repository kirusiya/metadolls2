import React, { useState } from "react";
import Slider from "react-slick";
/* import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; */

import styles from '../styles/ImageSlider.module.css'

const NextArrow = ({ onClick }) => {
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      Rigth
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className={styles.prevArrow}  onClick={onClick}>
      Left
    </div>
  );
};

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
   /*  nextArrow: <NextArrow onClick />, */
  /*   prevArrow: <PrevArrow onClick />, */
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? styles.activeSlide : styles.slide}
          key={image.id}
        >
          <div className={styles.slideWrapper}>
            {image.code ? image.code : <img src={image.src} alt={image.alt} />}
          </div>
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
