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

/* Plataforma donde compras un Nft y tienes acceso a material exclusivo de las marcas, solo si holdeas
NFT y marca personal, Si holdeas a mis NFTS tienes acceso a descuentos, regalias etc.
NFT podrian ser las inversiones del futuro con contratos inteligentes

Ej NFTs UFC and watch all the figths in one platform if you are a holder you can get disscounts, like a club NFT is like to be in a footbal club
*/
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
    beforeChange: (current, next) => {
        console.log(current);
        console.log(next)
        setImageIndex(next)},
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
            {image.code ? image.code : <img src={image.src} alt={image.alt} style={{width:'300px'}}/>}
          </div>
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
