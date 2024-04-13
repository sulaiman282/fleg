import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const settings = {
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };
  const handleSelectText = (event) => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(event.target);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  return (
    <>
      <section
        className="min-h-screen bg-[url('/footer2.png')]  bg-cover bg-center  bg-no-repeat"
        id="hero"
      >
        <div className=" backdrop-blur-[3px]  backdrop-brightness-75">
          <div className="flex flex-col items-center justify-center  w-full min-h-screen container-sk">
            <Image
              src="/hero.webp"
              width={500}
              height={500}
              alt="logo"
              className="lg:w-1/2 w-full mx-auto"
            />
          </div>
        </div>
      </section>
      <div className="bg-primary py-2 overflow-hidden">
        <Slider {...settings}>
          <div className=" cursor-grab whitespace-nowrap">
            <p
              onClick={(e) => {
                handleSelectText(e);
              }}
              className="text-white text-2xl lg:text-4xl  text-center   leading-relaxed	 rounded-xl "
            >
              Study the first 7 digit Vanity CA :
              AmEriCAq4JpHxZNBNEaKJb1VRptQGv1CRHz5ytNqBpN
            </p>
          </div>
          <div className=" cursor-grab !w-2 p-2"></div>
        </Slider>
      </div>
    </>
  );
}
