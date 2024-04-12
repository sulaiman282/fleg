import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function About() {
  return (
    <div className=" relative ">
      <div className="">
        <h1 className=" text-white text-center lg:text-5xl md:text-4xl text-3xl font-extrabold animate__animated animate__fadeIn">
          MEET THE FAYDENS
        </h1>

        <div className="flex justify-center">
          <p className="lg:w-3/5 py-10  text-white text-center lg:text-base text-sm">
            Welcome to FADA, a project dedicated to bringing high-quality art to
            the polygon ecosystem. Each Fayden in our collection is carefully
            designed to showcase its own unique personality and style that you
            can easily relate to. We are also proud to present a selection of 40
            exclusive 1 of 1 pieces, that have been specifically created for
            collectors, as well as the FADA Redemption System (FRS) aiming to
            reward holders. Join us on this captivating journey as we deliver
            top-notch art, offering a delightful combination of creativity and
            technology.
          </p>
        </div>
      </div>
    </div>
  );
}
