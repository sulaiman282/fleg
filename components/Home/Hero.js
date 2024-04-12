import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <section
      className="min-h-screen bg-[url('/footer2.png')]  bg-cover bg-center  bg-no-repeat"
      id="hero"
    >
      <div className=" backdrop-blur-[2px]  backdrop-brightness-75">
        <div className="flex items-center justify-center  w-full min-h-screen container-sk">
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
  );
}
