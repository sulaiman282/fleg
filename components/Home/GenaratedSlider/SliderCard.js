import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";

export default function Genarated({ data }) {
  return (
    <div className="lg:p-5 ">
      <div className="grid grid-cols-1 lg:grid-cols-2  lg:gap-24  gap-6 ">
        <div className="flex justify-center lg:justify-end">
          <ScrollAnimation animateOnce={true} animateIn="fadeIn">
            <div className="  w-full lg:w-3/4  ml-auto">
              <Image
                placeholder="blur"
                src={data?.img}
                width={500}
                height={500}
                priority={true}
                alt={data?.title}
                blurDataURL="/blur.png"
                className="object-contain  pointer-events-none h-full shadow-md  ml-auto aspect-square p-5  lg:p-0"
              />
              <p className="lg:text-5xl md:text-4xl text-3xl text-center font-bold text-primary mt-3  w-full  ">
                {data?.number}
              </p>
            </div>
          </ScrollAnimation>
        </div>

        <div className="my-auto lg:mx-0 ">
          <div className=" h-fit">
            <ScrollAnimation animateOnce={true} animateIn="fadeIn">
              <h3 className="w-fit font-extrabold bg-primary text-white px-3 py-2 lg:text-4xl md:text-3xl text-2xl">
                {data?.title}
              </h3>{" "}
            </ScrollAnimation>
            <ScrollAnimation
              animateOnce={true}
              animateIn="fadeIn"
              animateOut="fadeOut"
            >
              <p className="text-primary lg:text-base text-sm  py-5 lg:mr-16 text-justify	">
                {data?.description}
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
