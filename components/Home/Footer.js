import React from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full  bg-[url('/footer2.jpg')] bg-cover bg-center  bg-no-repeat relative">
      <h5 className="text-center absolute bottom-0 w-full mb-3 font-bold text-white lg:text-lg md:text-base ">
        Powered by FADA Labs
      </h5>

      <div className=" min-h-screen h-full w-full flex flex-col items-center justify-center relative  ">
        <div className="    h-fit w-fit ">
          <ScrollAnimation
            animatePreScroll={false}
            animateOnce={true}
            animateIn="fadeIn"
            duration={2}
            animateOut="fadeIn"
            className="flex flex-col justify-center items-center h-full w-full"
          >
            <div className="   ">
              <div className="flex  flex-col justify-center items-center   h-fit w-fit    p-10 ">
                <p className="text-center text-[#F3FCFF] lg:text-[100px] md:text-6xl text-5xl font-bold">
                  BE A
                </p>
                <p className="text-center text-[#F3FCFF] lg:text-[100px] md:text-6xl text-5xl font-bold mt-2">
                  FAYDEN
                </p>
                <Link
                  href="https://magiceden.io/collections/polygon/project_fada"
                  target="_blank"
                >
                  <Button
                    className="bg-primary mt-4 rounded-full lg:text-lg px-5 py-3 lg:px-10 animate-pulse"
                    variant="contained"
                  >
                    Get&nbsp;Your&nbsp;Fayden&nbsp;Now
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
