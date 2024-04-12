import { IconButton } from "@mui/material";
import React from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";

import ScrollAnimation from "react-animate-on-scroll";

export default function Roadmap() {
  return (
    <section
      className="bg-[#AAC8E4] py-10 lg:py-28 md:py-20 min-h-[40vh] md:min-h-screen h-full"
      id="roadmap"
    >
      <div className="container-sk">
        <div>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <h4 className=" font-extrabold text-center text-white lg:text-6xl md:text-5xl text-4xl py-20 my-auto mt-5 ">
              ROADMAP
            </h4>
          </ScrollAnimation>

          <div className="h-[80vh]  flex justify-center items-center">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <div className="flex justify-center ">
                <IconButton className="bg-primary hover:bg-primary duration-300">
                  <LockOpenIcon className="lg:text-3xl md:text-2xl rotate-[20deg] text-white" />
                </IconButton>
              </div>
              <h4 className="font-extrabold text-center text-white lg:text-5xl md:text-4xl text-3xl my-auto mt-5 ">
                SEASON I
              </h4>
            </ScrollAnimation>
          </div>

          <div className="h-[40vh] md:h-screen flex   justify-center items-center">
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeIn"
              className=""
            >
              <p className="font-extrabold   text-center text-white lg:text-5xl md:text-4xl text-3xl mt-5 uppercase">
                Introducing Community Tools.
              </p>
            </ScrollAnimation>
          </div>

          <div className="h-[40vh] md:h-screen flex   justify-center items-center">
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeIn"
              className=""
            >
              <p className="font-extrabold text-center text-white lg:text-5xl md:text-4xl text-3xl mt-5 uppercase">
                Initiating phase 2 Mint
              </p>
              <p className="text-sm lg:text-base text-white mt-5 lg:mt-12 text-center"></p>
            </ScrollAnimation>
          </div>

          <div className="h-[40vh] md:h-screen   flex justify-center items-center">
            <ScrollAnimation
              animateIn="fadeIn"
              animateOut="fadeIn"
              className=""
            >
              <p className="font-extrabold text-center text-white lg:text-5xl md:text-4xl text-3xl mt-5 uppercase">
                Launching the FADA Redemption System (FRS)
              </p>
              <p className="text-sm lg:text-base text-white mt-5 lg:mt-12 text-center"></p>
            </ScrollAnimation>
          </div>
        </div>

        {/* <div className="flex flex-col justify-center items-center min-h-[40vh] md:h-screen">
          <ScrollAnimation
            animateOnce={true}
            animateIn="fadeIn"
            duration={2}
            animateOut="fadeIn"
          >
            <div className="flex justify-center mt-10 lg:mt-28">
              <IconButton className="bg-primary hover:bg-primary duration-300">
                <LockIcon className="lg:text-3xl md:text-2xl rotate-[20deg] text-white" />
              </IconButton>
            </div>

            <p className="font-extrabold text-center text-white lg:text-6xl md:text-5xl text-4xl mt-3">
              AREA2
            </p>

            <div className="flex justify-center">
              <p className="text-sm lg:text-base text-white mt-5 lg:mt-7  w-fit bg-primary px-3 py-2 rotate-[-5deg]">
                Lorem ipsum dolor Lorem ipsum dolor
              </p>
            </div>
          </ScrollAnimation>
        </div> */}
      </div>
    </section>
  );
}
