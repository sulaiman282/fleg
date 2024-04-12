import React from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindow from "../../../hooks/useWindowSize";
import { useEffect } from "react";
import { useState } from "react";

const SimpleSlider = () => {
  const [count, setCount] = useState(12);
  const usewindowSize = useWindow();

  useEffect(() => {
    if (usewindowSize?.width < 760) {
      setCount(3);
    } else if (usewindowSize?.width < 1024) {
      setCount(6);
    } else if (usewindowSize?.width < 1280) {
      setCount(7);
    } else if (usewindowSize?.width < 1440) {
      setCount(8);
    } else if (usewindowSize?.width < 1600) {
      setCount(10);
    } else if (usewindowSize?.width < 1921) {
      setCount(12);
    } else if (usewindowSize?.width < 2560) {
      setCount(14);
    } else if (usewindowSize?.width < 3840) {
      setCount(16);
    } else {
      setCount(18);
    }
  }, [usewindowSize]);

  const settings = {
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
    infinite: true,
    slidesToShow: count,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings2 = {
    pauseOnHover: false,
    pauseOnFocus: false,
    rtl: true,
    dots: false,
    infinite: true,
    slidesToShow: count,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const web = [
    "/faidenimage/1.png",
    "/faidenimage/2.png",
    "/faidenimage/3.png",
    "/faidenimage/4.png",
    "/faidenimage/5.png",
    "/faidenimage/6.png",
    "/faidenimage/7.png",
    "/faidenimage/8.png",
    "/faidenimage/9.png",
    "/faidenimage/10.png",
    "/faidenimage/11.png",
    "/faidenimage/12.png",
    "/faidenimage/13.png",
    "/faidenimage/14.png",
    "/faidenimage/16.png",
    "/faidenimage/17.png",
    "/faidenimage/18.png",
    "/faidenimage/19.png",
    "/faidenimage/20.png",
    "/faidenimage/21.png",
    "/faidenimage/22.png",
    "/faidenimage/23.png",
    "/faidenimage/24.png",
    "/faidenimage/25.png",
    "/faidenimage/26.png",
    "/faidenimage/27.png",
    "/faidenimage/28.png",
    "/faidenimage/29.png",
    "/faidenimage/30.png",
    "/faidenimage/31.png",
    "/faidenimage/32.png",
    "/faidenimage/33.png"
];

  return (
    <div className=" w-full ">
      <Slider {...settings}>
        {web?.map((data, index) => (
          <div className="p-2 cursor-grab" key={index}>
            <SliderCard data={data} />
          </div>
        ))}
      </Slider>

      <Slider {...settings2}>
        {web?.map((data, index) => (
          <div className="p-2 cursor-grab" key={index}>
            <SliderCard data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
