import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from "@mui/material";
import Link from "next/link";
import { toast } from "react-toastify";

export default function Footer({ videoRef }) {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = async () => {
    if (!isCopied) {
      const textToCopy = "AmEriCAq4JpHxZNBNEaKJb1VRptQGv1CRHz5ytNqBpN";
      try {
        await navigator.clipboard.writeText(textToCopy);
        toast.success("Copied");
        setIsCopied(true);
      } catch (error) {
        console.error("Unable to copy text: ", error);
      }
    }
  };

  return (
    <div className=" relative ">
      <video
        ref={videoRef}
        loop
        className="w-full  h-full object-fill  absolute top-0 left-0   pointer-events-none"
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="w-full backdrop-brightness-75  backdrop-blur-sm  relative">
        <h5 className="text-center absolute bottom-0 w-full mb-3 font-bold text-white lg:text-xl text-lg ">
          © 2024 $FLEG. All rights reserved.
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
                <div className="flex  flex-col justify-center items-center   h-fit w-fit gap-4 lg:gap-8   p-10 ">
                  <Image
                    src="/logo.png"
                    width={500}
                    height={500}
                    alt="logo"
                    className="lg:w-40 lg:h-40 h-25 w-24 hover:rotate-[360deg] duration-1000 object-contain cursor-wait"
                  />
                  <Link
                    href="https://magiceden.io/collections/polygon/project_fada"
                    target="_blank"
                  >
                    <Button
                      className="bg-primary mt-4 rounded-full lg:text-3xl text-xl px-5 py-3 lg:px-10 animate-pulse"
                      variant="contained"
                    >
                      Buy Fleg
                    </Button>
                  </Link>

                  <p className="text-center text-[#F3FCFF] lg:text-[40px] lg:w-1/2 md:text-3xl text-2xl font-bold">
                    $FLEG has no association with Amerika. This token is simply
                    a meme coin with no intrinsic value or expectation of
                    financial return.
                  </p>

                  <Button
                    onClick={handleClick}
                    className="text-primary shadow-none hover:text-white mt-4  lg:text-3xl text-xl px-5 py-3 lg:px-10 "
                    variant="contained"
                  >
                    CA : AmEriCAq4JpHxZNBNEaKJb1VRptQGv1CRHz5ytNqBpN
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
