import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      className="min-h-screen bg-[url('/footer2.png')]  bg-cover bg-center  bg-no-repeat"
      id="hero"
    >
      <div className=" backdrop-blur-[3px]  backdrop-brightness-75">
        <div className="flex flex-col items-center justify-center  w-full min-h-screen container-sk">
          {/* <Image
            src="/hero.webp"
            width={500}
            height={500}
            alt="logo"
            className="lg:w-1/2 w-full mx-auto"
          /> */}
          <p className="text-white md:text-[42px] text-4xl xl:text-[50px] text-center break-all container-sk backdrop-blur-[3px] bg-white/20 p-5 leading-relaxed	 rounded-xl ">
            Study the first 7 digit Vanity CA
            <br />
            CA : AmEriCAq4JpHxZNBNEaKJb1VRptQGv1CRHz5ytNqBpN
          </p>
        </div>
      </div>
    </section>
  );
}
