import React, { useState } from "react";
import Head from "next/head";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Genarated from "../components/Home/GenaratedSlider/SliderPhoto";
import SliderPhoto from "../components/Home/SliderPhoto/SliderPhoto";
import Roadmap from "../components/Home/Roadmap";
import Team from "../components/Home/Team";
import Footer from "../components/Home/Footer";
import ImageEditorContainer from "../components/Home/ImageEditor/ImageEditorContainer.js";

export default function Index() {
  return (
    <>
      <Head>
        <title>Fada</title>
      </Head>

      <div className="overflow-hidden ">
        {/* <Hero /> */}
        <ImageEditorContainer />
        <section
          className="bg-primary bg-no-repeat bg-cover bg-center min-h-screen flex flex-col justify-center "
          id="about"
        >
          <div className=" py-20 ">
            <div className="container-sk">
              <About />
            </div>
            <SliderPhoto />
          </div>
        </section>
        {/* <Genarated /> */}
        <Roadmap />
        <Team />
        <Footer />
      </div>
    </>
  );
}
